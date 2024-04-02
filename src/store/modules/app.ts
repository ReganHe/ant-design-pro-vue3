/**
 * 应用程序状态管理模块
 */
import { defineStore } from 'pinia'
import { store } from '@/store'

/**
 * 应用程序状态管理钩子
 * @returns {AppStore} 应用程序状态管理实例
 */
export const useAppStore = defineStore('app', {
  state: () => ({
    /**
     * 设备类型
     * @type {string}
     */
    device: 'desktop',
    /**
     * 标题
     * @type {string}
     */
    title: '',
    // show global message
    globalMessageShowing: false
  }),
  getters: {},
  actions: {
    /**
     * 设置设备类型
     * @param {string} device - 设备类型
     */
    setDevice(device: string) {
      this.device = device
    },
    /**
     * 设置是否显示全局消息
     * @param {boolean} globalMessageShowing - 是否显示全局消息
     */
    setGlobalMessageShowing(globalMessageShowing: boolean): void {
      this.globalMessageShowing = globalMessageShowing
    }
  }
})

/**
 * 在 setup 外部使用应用程序状态管理钩子
 * @returns {AppStore} 应用程序状态管理实例
 */
export function useAppStoreWithOut() {
  return useAppStore(store)
}
