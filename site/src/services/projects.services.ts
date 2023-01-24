import api from "@/api";
import db from "@/db";
import CollectionInterface from "@/interfaces/collection";
import Collection from "./collection";

interface ProjectsServiceInterface extends CollectionInterface {
  transfer(): any;
}

const projectsDb = db.collection("projects");
const projectsApi = api.collection("projects");

const formater = ({ name, category, createdAt, members, unknown }) => {
  return {
    name,
    category,
    createdAt,
    members,
    unknown: "unknown",
  };
};
class ProjectsService extends Collection implements ProjectsServiceInterface {
  constructor() {
    super({ api: projectsApi, db: projectsDb, formater });
  }

  transfer() {
    console.log("transfer project");
  }
}

export default ProjectsService;
