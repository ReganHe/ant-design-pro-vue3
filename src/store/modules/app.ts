import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    device: 'desktop'
  }),
  getters: {},
  actions: {
    setDevice(device: string) {
      this.device = device
    }
  }
})
