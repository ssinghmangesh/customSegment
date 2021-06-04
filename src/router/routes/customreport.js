export default [
  // {
  //   path: '/apps/custom-page1',
  //   name: 'custom-page1',
  //   component: () => import('@/views/apps/custompage/nimish.vue'),
  // },
  {
    path: '/apps/custom-report',
    name: 'custom-report',
    component: () => import('@/views/apps/custompage/devashish.vue'),
  },
  {
    path: '/apps/custom-report/:type',
    name: 'custom-report',
    component: () => import('@/views/apps/custompage/devashish.vue'),
  },
]
