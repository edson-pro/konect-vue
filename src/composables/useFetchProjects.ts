import { getProjects } from "@/services/projects.services";
import useProjects from "@/store/projects";
import { onMounted } from "vue";
import useAuth from "@/store/auth";
import { storeToRefs } from "pinia";
export function useFetchProjects() {
  const projectStore = useProjects();
  const { setProjects, setLoading } = useProjects();

  const { projects, loading } = storeToRefs(projectStore);
  const { user } = useAuth();
  onMounted(async () => {
    const projects = await getProjects({ userId: user.id });
    setProjects(projects);
    setLoading(false);
  });

  return {
    projects,
    loading,
  };
}

export default useFetchProjects;
