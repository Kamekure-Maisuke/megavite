import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Single from '../components/Single.vue'
import Member from '../components/Member.vue'
import Blog from '../components/Blog.vue'

// router定義
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/single',
    component: Single,
  },
  {
    path: '/member',
    component: Member,
  },
  {
    path: '/blog',
    component: Blog,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
