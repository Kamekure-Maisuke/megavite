import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Single from '../components/Single.vue'

// router定義
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/single',
    component: Single,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
