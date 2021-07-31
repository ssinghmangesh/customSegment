export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/apps/Dashboard/Index.vue'),
  },
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
]
