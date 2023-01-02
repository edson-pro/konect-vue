import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Login from "@/views/Login.vue";
import Projects from "@/views/Projects.vue";
import Dashboard from "@/views/projects/Dashboard.vue";
import PageNotFound from "@/views/404.vue";
import Expenses from "@/views/projects/expenses/Expenses.vue";
import useAuth from "@/store/auth";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: Home,
      meta: {
        public: true,
      },
    },
    {
      path: "/forgot-password",
      component: ForgotPassword,
      meta: {
        public: true,
      },
    },
    {
      path: "/reset-password",
      component: ResetPassword,
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
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: PageNotFound,
      meta: {
        public: true,
      },
    },
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
