import { defineStore } from 'pinia'
import { theme } from 'ant-design-vue'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    const cachedState = JSON.parse(localStorage.getItem(`pinia-settings`.toUpperCase()) || '{}')
    return {
      //主题配置
      themeName: cachedState.themeName || 'default',
      color: cachedState.color || '#1677ff', //主题颜色
      theme: cachedState.theme || 'dark',
      darkMode: cachedState.darkMode || false,
      weak: cachedState.weak || false,
      gray: cachedState.gray || false,
      sidebar: cachedState.sidebar || true,
      layout: cachedState.layout || 'sidemenu', //sidemenu topmenu
      contentWidth: cachedState.contentWidth || 'Fluid', //Fixed Fluid
      fixedHeader: cachedState.fixedHeader || false,
      fixSiderbar: cachedState.fixSiderbar || false,
      autoHideHeader: cachedState.autoHideHeader || false,
      multiTab: cachedState.multiTab || false,
      showSettings: cachedState.showSettings || false,
      lockScreen: cachedState.lockScreen || false
    }
  },
  getters: {
    themeConfig: (state) => ({
      token: {
        colorPrimary: state.color,
        colorSuccess: '#1dc779',
        colorWarning: '#ffb302',
        colorError: '#cf4444',
        colorInfo: state.color,
        wireframe: true
      },
      algorithm: state.darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm
    })
  },
  actions: {
    /**
     * 深浅主题
     * @param theme 主题名称
     */
    setTheme(theme: string) {
      this.theme = theme
      // 开启深浅主题时关闭黑夜模式
      if (this.darkMode) {
        this.setDarkMode(false)
      }
      localStorage.setItem(`pinia-settings`.toUpperCase(), JSON.stringify(this.$state))
    },
    setDarkMode(isDark: boolean) {
      this.darkMode = isDark
      if (isDark) {
        this.theme = 'dark'
      }
      document.documentElement.setAttribute('data-dark', isDark ? 'dark' : 'light')
      localStorage.setItem(`pinia-settings`.toUpperCase(), JSON.stringify(this.$state))
    },
    /**
     * 颜色主题模式
     * @param themeName 主题名称
     */
    setThemeName(themeName: string) {
      console.log(themeName)
      this.themeName = themeName
      document.documentElement.setAttribute('data-theme', themeName)
      localStorage.setItem(`pinia-settings`.toUpperCase(), JSON.stringify(this.$state))
    },
    setValue(propertyName, propertyValue) {
      this[propertyName] = propertyValue
      localStorage.setItem(`pinia-settings`.toUpperCase(), JSON.stringify(this.$state))
    }
  }
})
