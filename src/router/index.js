import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("@/pages/home.vue"),
    },
    {
      path: "/play",
      name: "play",
      component: () => import("@/pages/play.vue"),
    },
  ],
});

export default router;
