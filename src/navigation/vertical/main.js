export default [
  {
    header: 'Segment',
  },
  {
    title: 'Customers',
    icon: 'UserIcon',
    route: 'apps-customers',
    path: '/apps/customers',
  },
  {
    title: 'Order',
    icon: 'ShoppingBagIcon',
    children: [
      {
        title: 'Orders',
        route: 'apps-orders',
        path: '/apps/orders',
      },
      {
        title: 'Discount',
        route: 'apps-orders',
        path: '/apps/discounts',
      },
      {
        title: 'Tax',
        route: 'apps-orders',
        path: '/apps/taxes',
      },
      {
        title: 'Draft Order',
        route: 'apps-orders',
        path: '/apps/draftorders',
      },
      // {
      //   title: 'Add Segment',
      //   route: 'add-orders-segment',
      // },
    ],
  },
  {
    title: 'Cart',
    icon: 'ShoppingCartIcon',
    route: 'apps-orders',
    path: '/apps/cart',
  },
  {
    title: 'Product',
    icon: 'PackageIcon',
    route: 'apps-orders',
    path: '/apps/product',
  },
  {
    title: 'Variants',
    icon: 'PackageIcon',
    route: 'apps-orders',
    path: '/apps/variantaggregate',
  },
  {
    title: 'Inventory',
    icon: 'PackageIcon',
    route: 'apps-orders',
    path: '/apps/inventoryitem',
  },
  {
    title: 'Visitors',
    icon: 'UserIcon',
    route: 'apps-orders',
    path: '/apps/visitors',
  },
  {
    title: 'Events',
    icon: 'UserIcon',
    route: 'apps-orders',
    path: '/apps/events',
  },
  {
    title: 'Notifications',
    icon: 'UserIcon',
    route: 'apps-orders',
    path: '/apps/notifications',
  },
]
