import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Projects from "../views/Projects.vue";
import Dashboard from "../views/projects/Dashboard.vue";
import PageNotFound from "../views/404.vue";
import Expenses from "../views/projects/expenses/Expenses.vue";
import useAuth from "../store/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        public: true,
      },
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        public: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        public: true,
      },
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/projects/:id",
      component: Dashboard,
    },
    {
      path: "/projects/:id/expenses",
      component: Expenses,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: PageNotFound },
  ],
});

router.beforeEach(async (to, from, next) => {
  const { user } = useAuth();
  if (!to.meta.public && !user) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
