import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/main/Home";
import Projects from "@/views/main/Projects";
import Skills from "@/views/main/Skills";
import Achievements from "@/views/main/Achievements";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'project',
    component: Projects
  },
  {
    path: '/skills',
    name: 'skill',
    component: Skills
  },
  {
    path: '/achievements',
    name: 'achievement',
    component: Achievements
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
