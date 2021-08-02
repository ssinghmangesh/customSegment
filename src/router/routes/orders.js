export default [
  {
    path: '/apps/orders',
    name: 'apps-orders',
    component: () => import('@/views/apps/orders/index.vue'),
  },
  {
    path: '/apps/orders/add',
    name: 'add-orders-segment',
    component: () => import('@/views/apps/segments/add.vue'),
  },
]
