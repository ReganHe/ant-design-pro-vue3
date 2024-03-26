import NProgress from 'nprogress' // progress bar
import type { Router } from 'vue-router'
import { notification } from 'ant-design-vue'
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { usePermissionStore } from '@/store/modules/permission'
import { useUserStore } from '@/store/modules/user'
import { PAGE_NOT_FOUND_ROUTE } from './basicRoutes'

const permissionStore = usePermissionStore()
const userStore = useUserStore()

NProgress.configure({ showSpinner: false }) // NProgress Configuration
/** 不进行拦截的路由名称集合 */
const whiteList = ['/login']

export const setupBeforeEach = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    console.log('router.beforeEach', to, from)
    NProgress.start() // 加载进度条
    const token = localStorage.getItem('token') || ''
    if (token) {
      /* has token */
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
      } else {
        // determine whether the user has obtained his permission roles through getInfo
        const hasRoles = userStore.roles && userStore.roles.length > 0
        if (hasRoles) {
          if (to.matched && to.matched.length) {
            next()
          } else {
            next({ path: '/404' })
            NProgress.done()
          }
        } else {
          try {
            const { roles, menuPerms } = await userStore.getCurrentUserInfo()
            const roleCodes = (roles || []).map((r) => r.code)
            const menuUrls = (menuPerms || []).map((r) => r.menuUrl)
            // generate accessible routes map based on roles
            const accessRoutes = await permissionStore.generateRoutes({ roleCodes, menuUrls })
            // dynamically add accessible routes
            accessRoutes.forEach((route) => {
              router.addRoute(route)
            })
            router.addRoute(PAGE_NOT_FOUND_ROUTE)
            // hack method to ensure that addRoutes is complete
            // set the replace: true, so the navigation will not leave a history record
            // next({ ...to, replace: true })
            next({ path: '/profile/center' })
          } catch (error) {
            // remove token and go to login page to re-login
            await userStore.resetToken()
            next(`/login?redirect=${to.path}`)
            NProgress.done()
          }
        }
      }
    } else {
      if (whiteList.includes(to.path)) {
        // 在免登录白名单，直接进入
        next()
      } else {
        next({ path: '/login', query: { redirect: to.fullPath } })
        NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
      }
    }
  })

  // 路由懒加载失败时的提示
  router.onError((error) => {
    if (window.env === 'development') {
      notification.error({
        message: 'Dynamic import error',
        description: error.stack
      })
    } else {
      router.push({ name: 'error', params: { errorMsg: error.stack } })
    }
  })
}

export const setupAfterEach = (router: Router) => {
  router.afterEach(() => {
    NProgress.done() // finish progress bar
  })
}
