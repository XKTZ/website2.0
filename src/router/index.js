import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/main/Home";
import Projects from "@/views/main/Projects";
import Skills from "@/views/main/Skills";
import Achievements from "@/views/main/Achievements";
import Blogs from "@/views/main/Blogs";
import Blog from "@/views/main/Blog";
import Notes from "@/views/main/Notes";
import Note from "@/views/main/Note.vue";

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
    path: '/notes',
    name: 'notes',
    component: Notes
  },
  {
    path: '/blog/:id/:title',
    name: 'blog',
    component: Blog
  },
  {
    path: '/note/:id/:title',
    name: 'note',
    component: Note
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
