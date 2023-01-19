// db.ts
import Dexie, { Table } from "dexie";

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
  }
}
const dexie = new DexieDb();

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
    return this.table.create(data);
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
}

const db = new ClientDb();

export default db;
