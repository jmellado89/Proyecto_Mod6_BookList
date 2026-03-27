import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/home",
      redirect: { name: "Home" },
    },
    {
      path: "/libros",
      name: "Libros",
      component: () => import("@/views/LibrosView.vue"),
    },
    {
      path: "/libros/:id",
      name: "Detalle",
      props: true,
      component: () => import("@/views/DetalleLibro.vue"),
    },
    {
      path: "/agregarlibro",
      name: "AgregarLibros",
      component: () => import("@/views/AgregarLibro.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  // obtener estado del usuario (autenticado o no autenticado)
  const isAuthenticated = localStorage.getItem("auth_token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    // usuario no autenticado intenta navegar a '/admin'
    return { name: "Login" };
  }

  // si el usuario está autenticado, no le permitiremos entrar a la vista '/login'
  if (to.name === "Login" && isAuthenticated) {
    return { name: "AgregarLibros" };
  }
});

export default router;
