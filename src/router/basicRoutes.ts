import { RouteRecordRaw } from 'vue-router'
import { Router } from './types'
import { BasicLayout, RouteView } from '@/layouts'

export const CONSTANT_ROUTES = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/profile',
    children: [
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
            component: () => import(/* webpackChunkName: "fail" */ '@/views/system/exception/403.vue'),
            meta: { title: '403' }
          },
          {
            path: '/exception/404',
            name: '404',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/system/exception/404.vue'),
            meta: { title: '404' }
          },
          {
            path: '/exception/500',
            name: '500',
            component: () => import(/* webpackChunkName: "fail" */ '@/views/system/exception/500.vue'),
            meta: { title: '500' }
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/system/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
] as Router[]

export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: () => import('@/views/system/exception/404.vue'),
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true
  }
}
