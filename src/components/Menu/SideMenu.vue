<template>
  <a-layout-sider
    :class="['sider', isDesktop ? null : 'shadow', props.theme, settingsStore.fixSiderbar ? 'ant-fixed-sidemenu' : null]"
    width="256px" :collapsible="props.collapsible" v-model:collapsed="sideMenuCollapsedRef" :trigger="null">
    <logo />
    <Menu :collapsed="props.collapsed" :menus="props.menus" :theme="props.theme" :mode="props.mode" />
  </a-layout-sider>
</template>

<script lang="ts" setup name="SideMenu">
import { watch, ref, PropType } from 'vue'
import Logo from '@/components/tools/Logo.vue'
import Menu from './Menu.vue'
import { isDesktop } from '@/utils/device-type'
import { useSettingsStore } from '@/store/modules/settings'
import { RouteRecordRaw } from 'vue-router'
import { MenuMode, MenuTheme } from 'ant-design-vue'

const settingsStore = useSettingsStore();

const props = defineProps({
  mode: {
    type: String as PropType<MenuMode>,
    required: false,
    default: 'inline'
  },
  theme: {
    type: String as PropType<MenuTheme>,
    required: false,
    default: 'dark'
  },
  collapsible: {
    type: Boolean,
    required: false,
    default: false
  },
  collapsed: {
    type: Boolean,
    required: false,
    default: false
  },
  menus: {
    type: Array<RouteRecordRaw>,
    required: true
  }
})

const sideMenuCollapsedRef = ref(false)
watch(
  () => props.collapsed,
  (newVal) => {
    sideMenuCollapsedRef.value = newVal
  },
  {
    immediate: true
  }
)
</script>
