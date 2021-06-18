export default [
  {
    path: '/:type/notifications',
    name: 'notification',
    component: () => import('@/views/notifications'),
  },
]
