import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Login from "@/views/Login.vue";
import Projects from "@/views/Projects.vue";
import Dashboard from "@/views/projects/Dashboard.vue";
import PageNotFound from "@/views/404.vue";
import Expenses from "@/views/projects/expenses/Expenses.vue";
import useAuth from "@/store/auth";
import MainLayout from "@/components/layouts/MainLayout.vue";
import AppLayout from "@/components/layouts/AppLayout.vue";
import AuthLayout from "@/components/layouts/AuthLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          component: Home,
        },
      ],
      meta: {
        public: true,
      },
    },
    {
      path: "/auth",
      component: AuthLayout,
      children: [
        {
          path: "forgot-password",
          component: ForgotPassword,
        },
        {
          path: "reset-password",
          component: ResetPassword,
        },
        {
          path: "login",
          component: Login,
        },
        {
          path: "register",
          component: Register,
        },
      ],
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
      component: AppLayout,
      children: [
        {
          path: "",
          component: Dashboard,
        },
        {
          path: "expenses",
          component: Expenses,
        },
        {
          path: ":pathMatch(.*)*",
          name: "NotFoun",
          component: PageNotFound,
        },
      ],
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: MainLayout,
      children: [
        {
          path: "",
          component: PageNotFound,
        },
      ],
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
      path: "/auth/login",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
