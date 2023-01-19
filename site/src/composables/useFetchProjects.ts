import useProjects from "@/store/projects";
import { onMounted } from "vue";
import useAuth from "@/store/auth";
import { storeToRefs } from "pinia";
import data, { projectsService } from "@/services";
import useData from "@/composables/useData";
export function useFetchProjects() {
  const projectStore = useProjects();
  const { setProjects, setLoading } = useProjects();

  const { projects, loading } = storeToRefs(projectStore);
  const { user } = useAuth();

  const dd = firebase.collection("porjects").create({});

  onMounted(async () => {
    const service = data
      .records("projects", id, "memebers")
      .limit()
      .filter()
      .get();
    const {} = useData();
    setProjects(data);
    setLoading(false);
  });

  return {
    projects,
    loading,
  };
}

export default useFetchProjects;
