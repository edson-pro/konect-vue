import CollectionInterface from "@/interfaces/collection";

class Collection implements CollectionInterface {
  collection;
  docId;
  limitDocs = 20;
  conditions = [];
  constructor(collection) {
    this.collection = collection;
  }

  where(field, operation: "==" | ">" | "<" | ">=" | "<=", value) {
    this.conditions.push({ field: field, operator: operation, value: value });
    return this;
  }

  limit(limit) {
    this.limitDocs = limit;
    return this;
  }

  doc(id: number | string) {
    this.docId = id;
    return this;
  }

  update(item) {
    return this.collection.update({ id: item.id, ...item });
  }

  delete() {
    return this.collection.delete(this.docId);
  }

  get() {
    if (this.docId) {
      return this.collection.doc(this.docId).get();
    } else {
      let q = this.collection;
      if (this.conditions.length) {
        this.conditions.forEach((e) => {
          q = q.where(e.field, e.operator, e.value);
        });
      } else {
        q = this.collection;
      }

      return q.limit(this.limitDocs).get();
    }
  }

  add(item) {
    return this.collection.create(item);
  }
}

export default Collection;
