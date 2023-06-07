import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ShoppingCartPage',
      name: 'ShoppingCartPage',
      component: () => import('../pages/ShoppingCartPage.vue')
    },
    {
      path: '/ProductPage',
      name: 'ProductPage',
      component: () => import('../pages/ProductPage.vue')
    },
    {
      path: '/ProductPage/:ProductId',
      name: 'ProductDetailPage',
      component: () => import('../pages/ProductDetailPage.vue')
    },
    {
      path: '/:PathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import('../pages/NotFoundPage.vue')
    },
  ]
})

export default router
