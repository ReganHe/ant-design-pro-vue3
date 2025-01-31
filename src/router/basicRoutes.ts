import { RouteRecordRaw } from 'vue-router'
import { RouteView } from '@/layouts/index'

const BasicLayout = () => import('@/layouts/BasicLayout.vue')

export const CONSTANT_ROUTES: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    meta: { title: '系统', icon: 'bx-analyse', hidden: true },
    redirect: '/demo'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/system/login/index.vue'),
    meta: {
      title: '登录',
      icon: 'bx-analyse',
      hidden: true
    }
  },
  {
    path: '/profile',
    component: BasicLayout,
    redirect: '/profile/center',
    name: 'profile',
    meta: { title: '个人页', icon: 'bx-analyse', keepAlive: true, hidden: true },
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
    meta: { title: '异常页', icon: 'bx-analyse', hidden: true },
    children: [
      {
        path: '/exception/403',
        name: '403',
        component: () => import(/* webpackChunkName: "fail" */ '@/views/system/exception/403.vue'),
        meta: { title: '403' }
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

export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: () => import('@/views/system/exception/404.vue'),
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hidden: true
  }
}
