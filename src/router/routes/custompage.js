export default [
  {
    path: '/apps/custom-page1',
    name: 'custom-page1',
    component: () => import('@/views/apps/segments1/nimish.vue'),
  },
  {
    path: '/apps/custom-page2',
    name: 'custom-page2',
    component: () => import('@/views/apps/segments1/devashish.vue'),
  },
]
