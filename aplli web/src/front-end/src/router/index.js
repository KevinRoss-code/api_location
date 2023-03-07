import { createRouter, createWebHashHistory } from "vue-router";
import Inscription from "../views/Inscription.vue";

const routes = [
  {
    path: "/",
    name: "Inscription",
    component: Inscription,
  },
  {
    path: "/connexion",
    name: "Connexion",
    // route level code-splitting
    // this generates a separate chunk (connexion.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "connexion" */ "../views/Connexion.vue"),
  },
  {
    path: "/murappli",
    name: "MurAppli",
    component: () =>
      import(/* webpackChunkName: "murappli" */ "../views/MurAppli.vue"),
  },
  {
    path: "/profil",
    name: "Profil",
    component: () =>
      import(/* webpackChunkName: "profil" */ "../views/Profil.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
