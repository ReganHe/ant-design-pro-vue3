import { defineStore } from 'pinia'
import { store } from '@/store'
import { asyncRoutes } from '@/router'
import { RouteRecordRaw } from 'vue-router'

export const usePermissionStore = defineStore({
  id: 'permission',
  state: () => ({
    addRoutes: [] as Array<Object>
  }),
  getters: {},
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
    generateRoutes(params): Promise<RouteRecordRaw[]> {
      const { roleCodes, menuUrls } = params
      return new Promise((resolve) => {
        let accessedRoutes = [] as Array<RouteRecordRaw>
        if (roleCodes.includes('applicationAdmin')) {
          accessedRoutes = asyncRoutes || []
        } else {
          accessedRoutes = this.filterAsyncRoutes(asyncRoutes, menuUrls)
        }
        this.addRoutes = accessedRoutes
        resolve(accessedRoutes)
      })
    }
  }
})

// Need to be used outside the setup
export function usePermissionStoreWithOut() {
  return usePermissionStore(store)
}
