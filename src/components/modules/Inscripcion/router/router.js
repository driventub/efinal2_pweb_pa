import { createRouter, createWebHistory } from "vue-router";


const routes = [
 
  {
    path: "/estudiante",
    component: () => import("../pages/Inscripcion.vue"),
  },
  {
    path: "/token",
    component: () => import("../pages/Token.vue"),
  },
  {
    path: "/",
    component: () => import("../pages/Bienvenida.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;