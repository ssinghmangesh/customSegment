import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
// import { canNavigate } from '@/libs/acl/routeProtection'
// import { isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser } from '@/auth/utils'
import customreport from './routes/customreport'
import customers from './routes/customers'
import orders from './routes/orders'
import apps from './routes/apps'
import dashboard from './routes/dashboard'
import uiElements from './routes/ui-elements/index'
import pages from './routes/pages'
import chartsMaps from './routes/charts-maps'
import formsTable from './routes/forms-tables'
import others from './routes/others'
import notifications from './routes/notifications'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: { name: 'apps-orders' } },
    ...customers,
    ...orders,
    ...customreport,
    ...apps,
    ...dashboard,
    ...pages,
    ...chartsMaps,
    ...formsTable,
    ...uiElements,
    ...others,
    ...notifications,
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

/* eslint-disable */

router.beforeEach((to, _, next) => next())
  //   const isLoggedIn = isUserLoggedIn()

  //   if (!canNavigate(to)) {
  //     // Redirect to login if not logged in
  //     if (!isLoggedIn) return next({ name: 'auth-login' })

  //     // If logged in => not authorized
  //     return next({ name: 'misc-not-authorized' })
  //   }

  //   // Redirect if logged in
  //   if (to.meta.redirectIfLoggedIn && isLoggedIn) {
  //     const userData = getUserData()
  //     next(getHomeRouteForLoggedInUser(userData ? userData.role : null))
  //   }

  // return next()
// })

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
