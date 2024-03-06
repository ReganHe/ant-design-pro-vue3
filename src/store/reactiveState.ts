import { ref, reactive } from 'vue'
import ls from '@/utils/Storage'
import {
  SITE_SETTINGS,
  SET_SIDEBAR_TYPE,
  TOGGLE_DEVICE,
  TOGGLE_FIXED_HEADER,
  TOGGLE_CONTENT_WIDTH,
  TOGGLE_WEAK,
  TOGGLE_MULTI_TAB,
  SET_SETTING_DRAWER,
  TOGGLE_FIXED_SIDERBAR,
  TOGGLE_FIXED_HEADER_HIDDEN,
  TOGGLE_GRAY,
  CLOSE_SIDEBAR,
  SET_LOCK_SCREEN
} from '@/store/mutation-types'

export const globalLoading = ref(false)

export const systemConfig = {
  state: reactive({
    sidebar: true,
    device: 'desktop',
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
  }),
  commit: (field, type) => {
    const fun = {
      [SET_SIDEBAR_TYPE]: (type) => {
        systemConfig.state.sidebar = type
        cache({ [SET_SIDEBAR_TYPE]: type })
      },
      [CLOSE_SIDEBAR]: () => {
        cache({ [CLOSE_SIDEBAR]: true })
        systemConfig.state.sidebar = false
      },
      [TOGGLE_DEVICE]: (device) => {
        systemConfig.state.device = device
      },
      [TOGGLE_FIXED_HEADER]: (fixed) => {
        cache({ [TOGGLE_FIXED_HEADER]: fixed })
        systemConfig.state.fixedHeader = fixed
      },
      [TOGGLE_FIXED_SIDERBAR]: (fixed) => {
        cache({ [TOGGLE_FIXED_SIDERBAR]: fixed })
        systemConfig.state.fixSiderbar = fixed
      },
      [TOGGLE_FIXED_HEADER_HIDDEN]: (show) => {
        cache({ [TOGGLE_FIXED_HEADER_HIDDEN]: show })
        systemConfig.state.autoHideHeader = show
      },
      [TOGGLE_CONTENT_WIDTH]: (type) => {
        cache({ [TOGGLE_CONTENT_WIDTH]: type })
        systemConfig.state.contentWidth = type
      },
      [TOGGLE_WEAK]: (flag) => {
        cache({ [TOGGLE_WEAK]: flag })
        systemConfig.state.weak = flag
      },
      [TOGGLE_GRAY]: (flag) => {
        cache({ [TOGGLE_GRAY]: flag })
        systemConfig.state.gray = flag
      },
      [TOGGLE_MULTI_TAB]: (bool) => {
        cache({ [TOGGLE_MULTI_TAB]: bool })
        systemConfig.state.multiTab = bool
      },
      [SET_SETTING_DRAWER]: (type) => {
        systemConfig.state.showSettings = type
      },
      [SET_LOCK_SCREEN]: (flag) => {
        systemConfig.state.lockScreen = flag
        cache({ [SET_LOCK_SCREEN]: flag })
        document.getElementById('app')!.style.overflow = flag ? 'hidden' : 'visible'
      }
    }
    fun[field](type)
  }
}

function cache(o) {
  ls.setObj(SITE_SETTINGS, o)
}
