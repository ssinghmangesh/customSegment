export default [
  {
    path: '/apps/:type',
    name: 'apps-customer',
    component: () => import('@/views/apps/segments/index.vue'),
  },
  {
    path: '/apps/segments/add',
    name: 'add-customers-segment',
    component: () => import('@/views/apps/segments/add.vue'),
  },
  {
    path: '/sync',
    name: 'apps-sync',
    component: () => import('@/views/apps/sync/index.vue'),
  },
  {
    path: '/connect',
    name: 'connect-store',
    component: () => import('@/views/apps/onboarding/index.vue'),
  },
  {
    path: '/integrations',
    name: 'integrations',
    component: () => import('@/views/apps/integrations/Integration.vue'),
  },
]
