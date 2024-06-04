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
routeModuleList.sort((a, b) => (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0))

const asyncRoutes = routeModuleList

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: CONSTANT_ROUTES as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

// 路由守卫,鉴权
setupBeforeEach(router)
setupAfterEach(router)
export { router, asyncRoutes }
