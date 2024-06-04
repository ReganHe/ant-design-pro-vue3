import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { store } from '@/store'
import { asyncRoutes } from '@/router'
import { CONSTANT_ROUTES } from '@/router/basicRoutes'
import { RoleEnum } from '@/enums/roleEnum'

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    routes: [] as Array<RouteRecordRaw>,
    addRoutes: [] as Array<RouteRecordRaw>
  }),
  actions: {
    /**
     * Use meta.role to determine if the current user has permission
     * @param roles
     * @param route
     */
    hasPermission(menuUrls, route) {
      return menuUrls.some((menuUrl) => menuUrl.indexOf(route.path) > -1)
    },
    /**
     * Filter asynchronous routing tables by recursion
     * @param routes asyncRoutes
     * @param menuUrls
     */
    filterAsyncRoutes(routes, menuUrls) {
      const routeList = [] as Array<RouteRecordRaw>
      routes.forEach((route) => {
        const tempRoute = { ...route }
        if (this.hasPermission(menuUrls, tempRoute)) {
          if (tempRoute.children) {
            tempRoute.children = this.filterAsyncRoutes(tempRoute.children, menuUrls)
          }
          routeList.push(tempRoute)
        }
      })

      return routeList
    },
    /**
     * 生成过滤后的路由集合
     * @param roleCodes 角色编码集合
     * @param menuUrls 权限菜单集合
     * @returns 过滤后的路由集合
     */
    generateRoutes(roleCodes: string[], menuUrls: string[]): Promise<RouteRecordRaw[]> {
      return new Promise((resolve) => {
        let accessedRoutes = [] as Array<RouteRecordRaw>
        if (roleCodes.includes(RoleEnum.APPLICATION_ADMIN)) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = this.filterAsyncRoutes(asyncRoutes, menuUrls)
        }
        this.addRoutes = accessedRoutes
        this.routes = CONSTANT_ROUTES.concat(accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
})

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
