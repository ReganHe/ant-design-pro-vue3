<template>
  <transition name="showHeader">
    <div v-if="visible" class="header-animat">
      <a-layout-header
        v-if="visible"
        :class="[
          settingsStore.fixedHeader && 'ant-header-fixedHeader',
          settingsStore.sidebar ? 'ant-header-side-opened' : 'ant-header-side-closed'
        ]"
        :style="{ padding: '0' }"
      >
        <div v-if="props.mode === 'sidemenu'" class="header">
          <span @click="toggle">
            <template v-if="appStore.device === 'mobile'">
              <MenuFoldOutlined v-if="props.collapsed" class="trigger header-action" />
              <MenuUnfoldOutlined v-else class="trigger header-action" />
            </template>
            <template v-else>
              <MenuUnfoldOutlined v-if="props.collapsed" class="trigger header-action" />
              <MenuFoldOutlined v-else class="trigger header-action" />
            </template>
          </span>
          <Breadcrumb />
          <!-- <ReloadOutlined class="trigger header-action" style="" @click="refreshPage" /> -->
          <user-menu :theme="props.theme" />
        </div>
        <div v-else :class="['top-nav-header-index', props.theme]">
          <div class="header-index-wide">
            <div class="header-index-left">
              <logo class="top-nav-header" :show-title="appStore.device !== 'mobile'" />
              <s-menu
                v-if="appStore.device !== 'mobile'"
                mode="horizontal"
                :menus="props.menus"
                :theme="props.theme"
              />
              <span v-else @click="toggle">
                <MenuFoldOutlined v-if="!props.collapsed" class="trigger" />
                <MenuUnfoldOutlined v-else class="trigger" />
              </span>
            </div>
            <user-menu class="header-index-right" :theme="props.theme" />
          </div>
        </div>
      </a-layout-header>
    </div>
  </transition>
</template>

<script lang="ts" setup name="GlobalHeader">
import UserMenu from '../tools/UserMenu/index.vue'
import SMenu from '../Menu/Menu.vue'
import Logo from '../tools/Logo.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import { ref, onMounted, onBeforeUnmount, PropType } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useSettingsStore } from '@/store/modules/settings'
import { useAppStore } from '@/store/modules/app'
import { RouteRecordRaw } from 'vue-router'
import { MenuTheme } from 'ant-design-vue'

const settingsStore = useSettingsStore()
const appStore = useAppStore()
const visible = ref<boolean>(true)
const oldScrollTop = ref<number>(0)
const ticking = ref<boolean>(false)

const props = defineProps({
  mode: {
    type: String,
    // sidemenu, topmenu
    default: 'sidemenu'
  },
  menus: {
    type: Array<RouteRecordRaw>,
    required: true
  },
  theme: {
    type: String as PropType<MenuTheme>,
    required: false,
    default: 'dark'
  },
  collapsed: {
    type: Boolean,
    required: false,
    default: false
  }
})

// 下滑时隐藏 Header
const handleScroll = () => {
  if (!settingsStore.autoHideHeader) {
    return
  }

  const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
  if (!ticking.value) {
    ticking.value = true
    requestAnimationFrame(() => {
      if (oldScrollTop.value > scrollTop) {
        visible.value = true
      } else if (scrollTop > 200 && visible.value) {
        visible.value = false
      } else if (scrollTop < 200 && !visible.value) {
        visible.value = true
      }
      oldScrollTop.value = scrollTop
      ticking.value = false
    })
  }
}

const emit = defineEmits(['toggle', 'refresh'])
const toggle = () => {
  emit('toggle')
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  document.body.removeEventListener('scroll', handleScroll, true)
})
</script>

<style lang="scss">
@import '../../style/index.scss';

.header-animat {
  position: relative;
  z-index: $ant-global-header-zindex;
}

.showHeader-enter-active {
  transition: all 0.25s ease;
}

.showHeader-leave-active {
  transition: all 0.5s ease;
}

.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}

.header-animat {
  .header {
    .trigger.header-action {
      height: 100%;
      padding: 0 16px;
      font-size: 16px;
    }
  }
}
</style>
