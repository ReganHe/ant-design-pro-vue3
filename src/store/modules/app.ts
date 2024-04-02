import { defineStore } from 'pinia'
import { store } from '@/store'

export const useAppStore = defineStore('app', {
  state: () => ({
    device: 'desktop',
    title: '',
    // show global message
    globalMessageShowing: false
  }),
  getters: {},
  actions: {
    setDevice(device: string) {
      this.device = device
    },
    setGlobalMessageShowing(globalMessageShowing: boolean): void {
      this.globalMessageShowing = globalMessageShowing
    }
  }
})

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
