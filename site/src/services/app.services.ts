import AuthServices from "./auth.services";
import ProjectsService from "./projects.services";

class App {
  private services = {
    projects: new ProjectsService(),
    // budgets: new BudgetService(),
  };
  collection(name: "projects" | "budgets") {
    return this.services[name];
  }

  auth() {
    return new AuthServices();
  }
}

export default App;
