import { DeviceTypeEnum } from '@/enums/appEnum'
import { useAppStore } from '@/store/modules/app'
import { useBreakpoints, breakpointsAntDesign } from '@vueuse/core'
// { "xs": 480, "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1600 }
const breakpoints = useBreakpoints(breakpointsAntDesign)
export const isMobile = breakpoints.smaller('sm')
export const isTablet = breakpoints.between('sm', 'xl')
export const isDesktop = breakpoints.greater('xl')

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event: any = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

// clear:解决window.onresize会触发两次
let clear
export const setDeviceType = () => {
  const appStore = useAppStore()
  if (clear) {
    clearTimeout(clear)
  }
  clear = setTimeout(function () {
    if (isMobile.value) {
      appStore.setDevice(DeviceTypeEnum.MOBILE)
    }
    if (isTablet.value) {
      appStore.setDevice(DeviceTypeEnum.TABLET)
    }
    if (isDesktop.value) {
      appStore.setDevice(DeviceTypeEnum.DESKTOP)
    }
  })
}
