import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/newg",
      name: "newg",
      component: () => import("../views/newgView.vue"),
    },
    {
      path: "/acido",
      name: "acido",
      component: () => import("../views/acidoView.vue"),
    },
    {
      path: "/autodp",
      name: "autodp",
      component: () => import("../views/autodpView.vue"),
    },
    {
      path: "/fem",
      name: "fem",
      component: () => import("../views/femView.vue"),
    },
    {
      path: "/estrang",
      name: "estrang",
      component: () => import("../views/estrangView.vue"),
    },
  ],
});

export default router;
