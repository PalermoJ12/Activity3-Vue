import { createRouter, createWebHistory } from 'vue-router'
import homePage  from '../components/pages/homePage.vue'
import LoginPage from '../components/pages/LoginPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

export default router
