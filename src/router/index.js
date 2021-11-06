import { createRouter, createWebHashHistory } from "vue-router";
import app from "../App.vue";
import Home from "../views/Home.vue";
import StatIsailo from "../views/StationeryIsailo.vue";
import NurIsailo from "../views/NursingIsailo.vue";
import SchoolBlaise from "../views/SchoolBlaise.vue";
import shortDocumen from "../views/shortDocumen.vue";
import WallArt from "../views/WallArt.vue";
const routes = [
  {
    path: "/",
    name: "app",
    component: app,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/StatIsailo",
    name: "StatIsailo",
    component: StatIsailo,
  },
  {
    path: "/NurIsailo",
    name: "NurIsailo",
    component: NurIsailo,
  },
  {
    path: "/SchoolBlaise",
    name: "SchoolBlaise",
    component: SchoolBlaise,
  },
  {
    path: "/shortDocumen",
    name: "shortDocumen",
    component: shortDocumen,
  },
  {
    path: "/WallArt",
    name: "WallArt",
    component: WallArt,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
