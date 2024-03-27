import { BasicLayout, RouteView } from '@/layouts'
import { Router } from './types'

export const example: Router = {
  path: '/',
  name: 'index',
  component: BasicLayout,
  meta: { title: 'menu.home' },
  redirect: '/profile',
  children: [
    // profile
    {
      path: '/profile',
      component: RouteView,
      redirect: '/profile/center',
      name: 'profile',
      meta: { title: '个人页', icon: 'bx-analyse', keepAlive: true },
      hidden: true,
      children: [
        {
          path: '/profile/center',
          name: 'center',
          component: () => import('@/views/system/profile/index.vue'),
          meta: { title: '个人中心', keepAlive: true }
        }
      ]
    },
    // exception
    {
      path: '/exception',
      name: 'exception',
      component: RouteView,
      redirect: '/exception/403',
      meta: { title: '异常页', icon: 'bx-analyse' },
      children: [
        {
          path: '/exception/403',
          name: '403',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403.vue'),
          meta: { title: '403' }
        },
        {
          path: '/exception/404',
          name: '404',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404.vue'),
          meta: { title: '404' }
        },
        {
          path: '/exception/500',
          name: '500',
          component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500.vue'),
          meta: { title: '500' }
        }
      ]
    }
  ]
}
