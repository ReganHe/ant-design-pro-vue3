import { BasicLayout, RouteView } from '@/layouts'
import { Router } from './types'

export const example: Router = {
  path: '/',
  name: 'index',
  component: BasicLayout,
  meta: { title: 'menu.home' },
  redirect: '/account',
  children: [
    // account
    {
      path: '/account',
      component: RouteView,
      redirect: '/account/center',
      name: 'account',
      meta: { title: '个人页', icon: 'bx-analyse', keepAlive: true },
      children: [
        {
          path: '/account/center',
          name: 'center',
          component: () => import('@/views/account/index.vue'),
          meta: { title: '个人中心', keepAlive: true }
        }
      ]
    },
    // profile
    {
      path: '/profile',
      name: 'profile',
      component: RouteView,
      redirect: '/profile/basic',
      meta: { title: '详情页', icon: 'bx-analyse' },
      children: [
        {
          path: '/profile/basic',
          name: 'ProfileBasic',
          component: () => import('@/views/Home.vue'),
          meta: { title: '基础详情页' }
        },
        {
          path: '/profile/advanced',
          name: 'ProfileAdvanced',
          component: () => import('@/views/Home.vue'),
          meta: { title: '高级详情页' }
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
