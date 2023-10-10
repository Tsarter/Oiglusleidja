import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Chat from "@/views/Chat.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chat",
    name: "About",
    component: Chat,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;