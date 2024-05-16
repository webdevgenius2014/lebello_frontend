import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/h',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/pro',
      name: 'ProductDetails',
      component: () => import('../views/ProductDetails.vue')
    },
    {
      path: '/con',
      name: 'contractPage',
      component: () => import('../views/ContractPage.vue')
    },
    {
      path: '/conDetails',
      name: 'contractPage',
      component: () => import('../views/ContractDetailPage.vue')
    },
  ]
})

export default router
