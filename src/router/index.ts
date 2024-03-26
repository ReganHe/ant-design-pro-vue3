import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { setupBeforeEach, setupAfterEach } from './routerGuard'
import { CONSTANT_ROUTES } from './basicRoutes'

const modules = import.meta.glob('./modules/**/*.ts', { eager: true, import: 'default' })
const routeModuleList: RouteRecordRaw[] = []
Object.keys(modules).forEach((key) => {
  const routeModule = modules[key] || {}
  const moduleRoutes = Array.isArray(routeModule) ? [...routeModule] : [routeModule]
  routeModuleList.push(...moduleRoutes)
})

export const asyncRoutes = routeModuleList

export const router = createRouter({
  history: createWebHistory(),
  routes: CONSTANT_ROUTES as unknown as RouteRecordRaw[]
})

// 路由守卫,鉴权
setupBeforeEach(router)
setupAfterEach(router)
