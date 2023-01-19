interface CollectionInterface {
  where(field: string, operation: "==" | "<" | ">", value: any): void;
  add(item: any): void;
  get(): any;
  limit(limit: number): void;
}

export default CollectionInterface;
