import { createRouter, createWebHistory } from 'vue-router'
import TheDashboard from '../views/TheDashboard.vue'
import TheSignIn from '../views/TheSignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: TheDashboard
    },
    {
      path: '/sign-in',
      name: 'sign_in',
      component: TheSignIn
    }
  ]
})

export default router
