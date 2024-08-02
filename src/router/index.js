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
      path: "/kakao",
      name: "kakao",
      component: () => import("../views/kakao/KakaoView.vue"),
    },
    {
      path: "/web-share-api",
      name: "web-share-api",
      component: () => import("../views/webShareApi/WebShareApi.vue"),
    },
  ],
});

export default router;
