export default [
  {
    path: '/apps/:type',
    name: 'apps-customer',
    component: () => import('@/views/apps/customers/index.vue'),
  },
  {
    path: '/apps/customers/add',
    name: 'add-customers-segment',
    component: () => import('@/views/apps/customers/add.vue'),
  },
  {
    path: '/sync',
    name: 'apps-sync',
    component: () => import('@/views/apps/sync/index.vue'),
  },
  {
    path: '/connect',
    name: 'connect-store',
    component: () => import('@/views/apps/ConnectStore/ConnectStore.vue'),
  },
  {
    path: '/integrations',
    name: 'integrations',
    component: () => import('@/views/apps/integrations/Integration.vue'),
  },
]
