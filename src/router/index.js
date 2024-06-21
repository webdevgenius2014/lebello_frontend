import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/helper/isAuthaticated'
import store from '@/store';  // Import the Vuex store

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
          meta: { requiresAuth: true } // Require authentication for admin dashboard
        },
        {
          path: 'users',
          name: 'AdminUsers',
          component: import('../views/Auth/Admin-Login.vue'),
          meta: { requiresAuth: true } // Require authentication for admin users page
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
const username='admin'
const password='password'
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication and if the user is authenticated
  const token = store;
  console.log("token",token.getters.token)
  if (to.meta.requiresAuth && !isAuthenticated(username,password )) {
    // If not authenticated, redirect to login page
    next('/admin');
  } else {
    // Continue to the route
    next();
  }
});

export default router
