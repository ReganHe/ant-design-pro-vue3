<template>
  <a-layout :class="['layout', appStore.device]">
    <!-- SideMenu -->
    <a-drawer v-if="isMobile" placement="left" :class="`drawer-sider ${settingsStore.theme}`" :closable="false"
      :open="collapsedRef" @close="drawerClose" width="256px">
      <side-menu mode="inline" :menus="permissionStore.routes" :theme="settingsStore.theme" :collapsed="false"
        :collapsible="true" />
    </a-drawer>

    <side-menu v-else-if="settingsStore.layout !== 'topmenu'" mode="inline" :menus="permissionStore.routes"
      :theme="settingsStore.theme" :collapsed="collapsedRef" :collapsible="true" />
    <a-layout :class="[settingsStore.layout, `content-width-${settingsStore.contentWidth}`]"
      :style="{ paddingLeft: contentPaddingLeftRef, minHeight: '100vh' }">
      <!-- layout header -->
      <global-header :mode="settingsStore.layout" :menus="permissionStore.routes" :theme="settingsStore.theme"
        :collapsed="collapsedRef" @toggle="toggle" @refresh="onRefresh" />

      <!-- layout content -->
      <a-layout-content :style="{
        height: '100%',
        margin: '24px 24px 0',
        paddingTop: settingsStore.fixedHeader ? '64px' : '0'
      }">
        <multi-tab v-if="settingsStore.multiTab" />
        <transition name="page-transition">
          <section>
            <route-view v-if="showRouterRef" />
          </section>
        </transition>
      </a-layout-content>

      <!-- layout footer -->
      <a-layout-footer>
        <global-footer />
      </a-layout-footer>
      <setting-drawer />
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup name="BasicLayout">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { triggerWindowResizeEvent, isMobile } from '@/utils/device-type'
import emitter from '@/utils/emitter'
import RouteView from './RouteView.vue'
import MultiTab from '@/components/MultiTab/index.vue'
import SideMenu from '@/components/Menu/SideMenu.vue'
import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import SettingDrawer from '@/components/SettingDrawer/index.vue'
import { useSettingsStore } from '@/store/modules/settings'
import { useAppStore } from '@/store/modules/app'
import { usePermissionStore } from '@/store/modules/permission'

const settingsStore = useSettingsStore();
const appStore = useAppStore();
const permissionStore = usePermissionStore();

const showRouterRef = ref(true)
const collapsedRef = ref(!settingsStore.sidebar)
const contentPaddingLeftRef = computed(() => {
  if (!settingsStore.fixSiderbar || isMobile.value) {
    return '0'
  }
  if (settingsStore.sidebar) {
    return '256px'
  }
  return '80px'
})

watch(
  () => settingsStore.sidebar,
  (val) => {
    collapsedRef.value = !val
  }
)

onMounted(() => {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Edge') > -1) {
    nextTick(() => {
      collapsedRef.value = !collapsedRef.value
      setTimeout(() => {
        collapsedRef.value = !collapsedRef.value
      }, 16)
    })
  }
})

const toggle = () => {
  collapsedRef.value = !collapsedRef.value
  settingsStore.setValue('sidebar', !collapsedRef.value)
  triggerWindowResizeEvent()
}

const drawerClose = () => {
  collapsedRef.value = false
}

const onRefresh = () => {
  emitter.all.clear()
  showRouterRef.value = false
  nextTick(() => (showRouterRef.value = true))
}
</script>

<style lang="less">
/*
 * The following styles are auto-applied to elements with
 * transition="page-transition" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the page transition by editing
 * these styles.
 */
.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
