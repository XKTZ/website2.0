import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/main/Home";
import Projects from "@/views/main/Projects";
import Skills from "@/views/main/Skills";
import Achievements from "@/views/main/Achievements";
import Blogs from "@/views/main/Blogs";
import Blog from "@/views/main/Blog";

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
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  },
  {
    path: '/blog/:id/:title',
    name: 'blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
