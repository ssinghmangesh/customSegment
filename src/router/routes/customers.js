export default [
  {
    path: '/apps/customers',
    name: 'apps-customers',
    component: () => import('@/views/apps/customers/index.vue'),
  },
  {
    path: '/apps/customers/add',
    name: 'add-customers-segment',
    component: () => import('@/views/apps/customers/add.vue'),
  },
]
