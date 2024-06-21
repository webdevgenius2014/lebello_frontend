import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/helper/isAuthaticated'
import store from '@/store';  

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/forntend-views/Index-main.vue')
    },
    {
      path: '/productDetail',
      name: 'ProductDetail',
      component: () => import('../views/forntend-views/ProductDetails.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/forntend-views/CategoryPage.vue')
    },
    {
      path: '/contract',
      name: 'contract',
      component: () => import('../views/forntend-views/ContractPage.vue')
    },
    {
      path: '/contractDetails',
      name: 'contractDetails',
      component: () => import('../views/forntend-views/ContractDetailPage.vue')
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: () => import('../views/forntend-views/ContactUsPage.vue')
    },
    {
      path: '/contractDesign',
      name: 'contractDesign',
      component: () => import('../views/forntend-views/ContractDesign.vue')
    },
    {
      path: '/dealers',
      name: 'dealers',
      component: () => import('../views/forntend-views/DealersPage.vue')
    },
    {
      path: '/libraryandtools',
      name: 'library_and_tools',
      component: () => import('../views/forntend-views/library_and_tools.vue')
    },
   
    {
      path: '/admin',
      component: import('../views/Auth/Admin-Login.vue'),
      children: [
        {
          path: '/AdminDashboard',
          name: 'AdminDashboard',
          component: import('../views/forntend-views/ProductDetails.vue'),
          meta: { requiresAuth: true } 
        },
        {
          path: 'users',
          name: 'AdminUsers',
          component: import('../views/Auth/Admin-Login.vue'),
          meta: { requiresAuth: true } 
        },
        {
          path: 'products',
          name: 'AdminProducts',
          component: import('../views/Auth/Admin-Login.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = store.getters.token;
//   console.log("token",token.getters.token)
//   if (to.meta.requiresAuth && !isAuthenticated(process.env.USERNAME ,process.env.PASSWORD )) {
//     next('/admin');
//   } else {
//     next();
//   }
// });

export default router
