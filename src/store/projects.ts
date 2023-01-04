// /store/user.js

import { defineStore } from "pinia";

export const useProjects = defineStore("projects", {
  state: () => ({
    projects: [],
    currentProject: null,
    loading: true,
  }),
  actions: {
    setProjects(projects) {
      this.projects = projects;
    },
    setLoading(e) {
      this.loading = e;
    },
    setCurrentProject(project) {
      this.currentProject = project;
    },
  },
});

export default useProjects;
