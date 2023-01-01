// /store/user.js

import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
  }),
  actions: {
    setUser(user) {
      this.user = user;
      this.loading = false;
    },
    setLoading(e) {
      this.loading = e;
    },
    logout() {
      this.user = null;
    },
  },
});

export default useAuth;
