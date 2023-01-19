import { markRaw } from "vue";
import { defineStore } from "pinia";

export const useModal = defineStore("modal", {
  state: (): any => ({
    isOpen: false,
    payload: {},
  }),
  actions: {
    open(payload?: any) {
      this.isOpen = true;
      this.payload = payload;
    },
    action(payload: any) {
      payload();
    },
    close() {
      this.isOpen = false;
      setTimeout(() => {
        this.payload = {};
      }, 500);
    },
  },
});

export default useModal;
