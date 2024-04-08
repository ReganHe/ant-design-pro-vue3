import { defineStore } from 'pinia'
import { store } from '@/store'
import mockUserImg from '@/assets/user.png'
import * as userCustomService from '@/api/auto/ApiUserCustom'
import * as userService from '@/api/auto/ApiGwsUserInfo'
import * as accountService from '@/api/auto/ApiGwsAccount'
import { GwsUserInfo, UserCustom } from '@/api/auto/modal'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    token: localStorage.getItem('token') ?? '',
    avatar: mockUserImg,
    info: {} as UserCustom.getUserByUserId.ReturnsPropData,
    menuPerms: [] as GwsUserInfo.getCurrentLoginUserInfo.ReturnsPropDataPropMenuPerms,
    roles: [] as GwsUserInfo.getCurrentLoginUserInfo.ReturnsPropDataPropRoles,
    lastUpdateTime: 0
  }),
  getters: {
    getMenuPermList(): any[] {
      return this.menuPerms ?? []
    }
  },
  actions: {
    async login(params) {
      try {
        // 1. 获取正式令牌
        const refreshTokenRes = await accountService.accountLogin4Direct(params)
        // 2.获取访问令牌
        const accessTokenRes = await accountService.exchangeAccessToken({
          refreshToken: refreshTokenRes.token
        })
        // 3. 保存访问令牌
        this.token = accessTokenRes.token
        localStorage.setItem('token', accessTokenRes.token)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getCurrentUserInfo() {
      try {
        const userPermissionRes = await userService.getCurrentLoginUserInfo()
        if (!userPermissionRes) {
          throw Error('身份认证失败, 请重新登陆.')
        }

        if (!userPermissionRes.roles || userPermissionRes.roles.length <= 0) {
          throw Error('角色不能为空')
        }

        this.roles = userPermissionRes.roles
        this.menuPerms = userPermissionRes.menuPerms
        const userBasicRes = await userCustomService.getUserByUserId({ userId: userPermissionRes.id })
        if (!userBasicRes) {
          throw Error('获取用户基本信息失败, 请重新登陆.')
        }

        this.info = userBasicRes
        this.lastUpdateTime = new Date().getTime()
        return userPermissionRes
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout() {
      if (this.token) {
        try {
          await accountService.accountLogout()
        } catch {
          console.log('注销Token失败')
        }
      }
      this.resetToken()
    },
    resetToken() {
      this.info = {} as UserCustom.getUserByUserId.ReturnsPropData
      this.lastUpdateTime = new Date().getTime()
      this.token = ''
      this.roles = []
      localStorage.clear()
    }
  }
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store)
}
