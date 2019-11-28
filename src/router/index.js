import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// const originalPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export const permissionRouterMap = []

export const defaultRouterMap = []

export const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: defaultRouterMap,
  // base: publicPath,
  // mode: 'history'
  mode: 'hash'
})

export default router
