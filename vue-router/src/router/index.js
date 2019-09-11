import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/base/',
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },
  routes,
})

// eslint-disable-next-line
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to.matched)
  next()
})

// eslint-disable-next-line
router.afterEach((to, from) => {
  console.log('afterEach')
})

export default router
