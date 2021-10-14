import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Nogi from '../components/Nogi.vue'

// router定義
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/nogi',
    component: Nogi,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
