import useModal from "@/store/modal";
import { ref } from "vue";

export default function useConfirm({ title, description, action, onConfirm }) {
  const modal = useModal();

  const loading = ref(false);

  const close = () => {
    modal.close();
    loading.value = false;
  };
  const setLoading = (value) => {
    loading.value = value;
  };

  const confirm = () => {
    modal.open({
      title: title,
      content: description,
      type: "confirm",
      actions: [
        {
          title: "Cancel",
          action: () => modal.close(),
          variant: "default",
        },
        {
          color: "danger",
          title: action,
          action: onConfirm,
          loading: loading,
        },
      ],
    });
  };

  return {
    confirm,
    close,
    setLoading,
  };
}
