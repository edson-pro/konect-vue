import router from "@/router";
import AuthServices from "@/services/auth.services";
import useModal from "@/store/modal";
import { ref } from "vue";

export default function useLogout() {
  const modal = useModal();
  const loadingLogout = ref(false);

  const logout = () => {
    modal.open({
      title: "Logout from your account",
      content: `Are you sure you want to logout from your? click yes to logout or cancel to cancel it.`,
      type: "confirm",
      actions: [
        {
          title: "Cancel",
          action: () => modal.close(),
          variant: "default",
        },
        {
          color: "danger",
          title: "Logout",
          action: () => {
            loadingLogout.value = true;
            return new AuthServices().logout().then((e) => {
              modal.close();
              loadingLogout.value = false;
              router.push("/");
            });
          },
          loading: loadingLogout,
        },
      ],
    });
  };

  return {
    logout,
  };
}
