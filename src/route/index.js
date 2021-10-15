import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Single from '../components/Single.vue'
import Member from '../components/Member.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
