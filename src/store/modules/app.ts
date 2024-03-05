import { defineStore } from 'pinia';
export const useAppStore = defineStore({
  id: 'settings',
  state: () => ({
    device: 'desktop',
    settings: {
      sidebar: true,
      theme: 'dark',
      layout: 'sidemenu', //sidemenu topmenu
      contentWidth: 'Fluid', //Fixed Fluid
      fixedHeader: false,
      fixSiderbar: false,
      autoHideHeader: false,
      color: '#1677ff', //主题颜色
      weak: false,
      gray: false,
      multiTab: false,
      showSettings: false,
      darkMode: false,
      lockScreen: false
    }

  }),
  getters: {

  },
  actions: {
    setDevice(device: string) {
      this.device = device;
    }
  }
});
