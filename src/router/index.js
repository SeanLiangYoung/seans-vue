import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import DashboardLayout from '@/views/layout/DashboardLayout'
import Layout from '@/views/layout/AppLayout'
// import config from '../config'

Vue.use(Router)

export const appRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/app',
    component: Layout,
    // redirect: '/app',
    children: [
      {
        path: '/index',
        component: () => import('@/views/app/index'),
        name: 'app',
        meta: { title: 'app', icon: 'app', noCache: true, affix: true }
      }
    ]
  }
  // { path: '*', redirect: '/404', hidden: true }
]

export const dashboardRouterMap = [
  {
    path: '/dashboard',
    component: DashboardLayout,
    redirect: 'noredirect',
    meta: { title: 'dashboard', icon: 'edit' },
    children: [
      // 不再在 dashboard 里面向运维提供系统注册的入口
      {
        path: '/index',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'dashboard' }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: appRouterMap,
  // base: subDirectory,
  // 使用 HTML5 的 History 路由模式
  mode: 'history'
})
