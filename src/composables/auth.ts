import { onMounted } from "vue";
import useStoreAuth from "../store/auth";
import AuthServices from "../services/auth.services";
export function useAuth() {
  const { setUser } = useStoreAuth();
  onMounted(() => {
    new AuthServices().currentUserChanged((user) => {
      if (user) {
        setUser({
          email: user?.email,
          id: user?.id,
          names: user?.names,
          photo: user?.photo,
        });
      }
    });
  });

  return {};
}

export default useAuth;
