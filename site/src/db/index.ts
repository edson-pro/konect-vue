// db.ts
import api from "@/api";
import queue from "@/services/queue";
import Dexie, { Table } from "dexie";
import "dexie-observable";

export interface Project {
  id?: number;
  name: string;
  members: number;
  category: string;
  createdAt: string;
}

class DexieDb extends Dexie {
  projects!: Table<Project>;
  constructor() {
    super("app");
    this.version(1).stores({
      projects: "++id, name, category, createdAt, members", // Primary key and indexed props
    });
    this.version(2).stores({});
  }
}
const dexie = new DexieDb();

const getAction = (change) => {
  switch (change.type) {
    case 1: // CREATED
      return "CREATED";
    case 2: // UPDATED
      return "UPDATED";
    case 3: // DELETED
      return "DELETED";
  }
};

dexie.on("changes", function (changes) {
  changes.forEach(function (change: any) {
    return db.sync({
      id: change.key,
      action: getAction(change.key),
      payload: change.obj,
      collection: change.table,
    });
  });
});

const collections = {
  projects: dexie.projects,
};

class ClientDb {
  table;
  conditions = [];
  docId;
  query;
  limitDocs;
  constructor() {}
  collection(name) {
    this.table = collections[name];
    return this;
  }
  limit(limit) {
    this.limitDocs = limit;
    return this;
  }
  update(doc) {
    return this.table.put({ id: doc.id, ...doc });
  }
  delete(id) {
    return this.table.delete(id);
  }
  create(data) {
    return this.table.add(data);
  }
  where(field, operation: "==" | ">" | "<" | ">=" | "<=", value) {
    this.conditions.push({ field: field, operator: operation, value: value });
    return this;
  }
  doc(id: number | string) {
    this.docId = id;
    return this;
  }
  get() {
    if (this.docId) {
      return this.table.get(this.docId);
    } else {
      let q = this.table;

      if (this.conditions.length) {
        const operators = {
          "==": (doc, field, value) => doc[field] === value,
          "<": (doc, field, value) => doc[field] < value,
          ">": (doc, field, value) => doc[field] > value,
          "<=": (doc, field, value) => doc[field] <= value,
          ">=": (doc, field, value) => doc[field] >= value,
          default: () => true,
        };

        this.conditions.forEach((e) => {
          const operator = operators[e.operator] || operators.default;
          q = q.filter((doc) => operator(doc, e.field, e.value));
        });
      } else {
        q = this.query;
      }

      return q.limit(this.limitDocs).toArray();
    }
  }
  sync({ id, action, payload, collection, isQueue }) {
    let query = null;
    switch (action) {
      case "CREATED":
        query = api.collection(collection).create(payload);
        break;
      case "UPDATED":
        query = api.collection(collection).doc(id).update(payload);
        break;
      case "DELETED":
        query = api.collection(collection).doc(id).delete();
        break;
    }
    return query
      .then((e) => {
        console.log("docment saved");
      })
      .catch((e) => {
        if (!isQueue) {
          queue.addToQueue({ id, action, payload, collection });
        } else {
          query;
        }
      });
  }
}

const db = new ClientDb();

export default db;
