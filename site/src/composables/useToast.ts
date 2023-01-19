import { useToast as useVueToast } from "vue-toastification";
import Notification from "@/components/Notification.vue";

export default function useToast() {
  const toast = useVueToast();

  const show = ({ title, message, variant }: any) => {
    toast({
      component: Notification,
      props: {
        message: message,
        title: title,
        variant: variant,
      },
    });
  };

  return {
    show,
  };
}
