import { ConfigProvider } from 'ant-design-vue'
import { updateColorWeak, updateGrayMode } from '@/components/SettingDrawer/settingConfig'
import { useSettingsStore } from '@/store/modules/settings'

export default () => {
  const settingsStore = useSettingsStore()
  // 只要设置了黑暗主题,就不设置亮暗颜色了,统一默认暗色
  if (settingsStore.darkMode) {
    return
  }

  // 有主题色就设置主题色
  if (settingsStore.color) {
    ConfigProvider.config({
      theme: {
        primaryColor: settingsStore.color
      }
    })
  }

  // 黑白模式
  if (settingsStore.gray) {
    updateGrayMode(true)
  }

  // 色弱模式
  if (settingsStore.weak) {
    updateColorWeak(true)
  }
}
