export default [
  // {
  //   path: '/apps/custom-page1',
  //   name: 'custom-page1',
  //   component: () => import('@/views/apps/segments1/nimish.vue'),
  // },
  {
    path: '/apps/custom-report',
    name: 'custom-report',
    component: () => import('@/views/apps/segments1/devashish.vue'),
  },
  {
    path: '/apps/custom-report/:type',
    name: 'custom-report',
    component: () => import('@/views/apps/segments1/devashish.vue'),
  },
]
