export default [
  {
    path: '/apps/custom-page1',
    name: 'custom-page1',
    component: () => import('@/views/apps/custompage/nimish.vue'),
  },
  {
    path: '/apps/custom-page2',
    name: 'custom-page2',
    component: () => import('@/views/apps/custompage/devashish.vue'),
  },
]
