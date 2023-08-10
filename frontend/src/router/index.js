import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: () => import("../views/LandingPageView.vue"),
    },
    {
      path: "/despreNoi",
      name: "despreNoi",
      component: () => import("../views/DespreNoi.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/servicii",
      name: "servicii",
      component: () => import("../views/ServicesView.vue"),
    },
    {
      path: "/prices",
      name: "prices",
      component: () => import("../views/PricesView.vue"),
    },
    {
      path: "/CRUD",
      name: "CRUD",
      component: () => import("../views/CRUDView.vue"),
    },
  ],
});

export default router;
