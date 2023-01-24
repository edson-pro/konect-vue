import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL;

const client = axios.create({
  baseURL: API_URL,
});

const routes = {
  projects: "/projects",
};

class ClientApi {
  route;
  conditions = [];
  docId;
  query;
  limitDocs;
  constructor() {}
  collection(name) {
    this.route = routes[name];
    return this;
  }
  limit(limit) {
    this.limitDocs = limit;
    return this;
  }
  update(doc) {
    return client.put(this.route, { data: doc });
  }
  delete(id) {
    return client.delete(this.route + "/" + id);
  }
  create(data) {
    return client.post(this.route, { data: data });
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
      return client.get(this.route + "/" + this.docId);
    } else {
      let q = {};

      if (this.conditions.length) {
        this.conditions.forEach((e) => {
          const field = e.field;
          const operators = {
            "==": {
              [field]: e.value,
            },
            "<": {
              [field + "_lt"]: e.value,
            },
            ">": {
              [field + "_gt"]: e.value,
            },
          };

          q = { ...q, ...operators[e.operator] };
        });
      }

      if (this.limitDocs) {
        q["limit"] = this.limitDocs;
      }

      return client
        .get(this.route, { params: q })
        .then((e) => e.data)
        .catch((e) => {
          throw { code: e.code, message: e.message };
        });
    }
  }
}

const api = new ClientApi();

export default api;
