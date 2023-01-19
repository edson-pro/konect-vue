import CollectionInterface from "@/interfaces/collection";
import Collection from "./collection";

export interface BudgetServiceInterface extends CollectionInterface {
  calculate(): any;
}

class BudgetService extends Collection implements BudgetServiceInterface {
  calculate() {
    console.log("calculate budget");
  }
}

export default BudgetService;
