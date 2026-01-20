import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('../pages/Login.vue')
    }
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
