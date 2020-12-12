import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Wishlist from "../views/Wishlist.vue";
import Library from "../views/Library.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/library",
    name: "library",
    component: Library
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: Wishlist
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
