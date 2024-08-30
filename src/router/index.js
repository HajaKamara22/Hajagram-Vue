import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Feeds from '@/views/Feeds.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feeds',
      name: 'feeds',
      component: Feeds
    }
  ]
})

export default router
