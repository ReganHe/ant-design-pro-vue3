<template>
  <a-layout-sider
    :class="['sider', isDesktop ? null : 'shadow', props.theme, settingsStore.fixSiderbar ? 'ant-fixed-sidemenu' : null]"
    width="256px" :collapsible="props.collapsible" v-model:collapsed="sideMenuCollapsedRef" :trigger="null">
    <logo />
    <Menu :collapsed="props.collapsed" :menu="props.menus" :theme="props.theme" :mode="props.mode" @select="onSelect" />
  </a-layout-sider>
</template>

<script lang="ts" setup name="SideMenu">
import { watch, ref } from 'vue'
import Logo from '@/components/tools/Logo.vue'
import Menu from './Menu.vue'
import { isDesktop } from '@/utils/device'
import { useSettingsStore } from '@/store/modules/settings'
import { RouteRecordRaw } from 'vue-router'

const settingsStore = useSettingsStore();

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'inline'
  },
  theme: {
    type: String,
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

const emit = defineEmits(['menuSelect'])
const onSelect = (obj) => {
  emit('menuSelect', obj)
}
</script>
