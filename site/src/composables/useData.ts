import { ref } from "vue";
export function useData({ service }) {
  const loading = ref(false);
  const data = ref([]);

  const loadData = () => {
    return service.get();
  };

  return {
    loading,
    data,
  };
}

export default useData;
