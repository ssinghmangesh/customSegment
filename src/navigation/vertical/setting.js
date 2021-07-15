export default [
  {
    header: 'Settings',
  },
  {
    title: 'User',
    icon: 'UserIcon',
    children: [
      {
        title: 'List',
        route: 'apps-users-list',
      },
      {
        title: 'View',
        route: { name: 'apps-users-view' },
      },
      {
        title: 'Edit',
        route: { name: 'apps-users-edit' },
      },
    ],
  },
  {
    title: 'Sync',
    icon: 'RefreshCwIcon',
    route: 'apps-sync',
  },
  {
    title: 'Connect Store',
    icon: 'LinkIcon',
    route: 'connect-store',
  },
]
