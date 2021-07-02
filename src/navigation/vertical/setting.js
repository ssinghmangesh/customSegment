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
        route: { name: 'apps-users-view', params: { id: localStorage.getItem('userId') || 21 } },
      },
      {
        title: 'Edit',
        route: { name: 'apps-users-edit', params: { id: localStorage.getItem('userId') || 21 } },
      },
    ],
  },
  {
    title: 'Sync',
    icon: 'RefreshCwIcon',
    route: 'apps-sync',
  },
]
