import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/* Layout */
import DashboardLayout from '@/views/layout/DashboardLayout'
import Layout from '@/views/layout/MainLayout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/register/index'),
    hidden: true
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
    path: '/dashboard',
    component: DashboardLayout,
    // redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/main',
    children: [
      {
        path: 'main',
        component: () => import('@/views/main/index'),
        name: 'Main',
        meta: { title: 'main', icon: 'main', noCache: true, affix: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  // base: subDirectory,
  // 使用 HTML5 的 History 路由模式
  mode: 'history'
})
