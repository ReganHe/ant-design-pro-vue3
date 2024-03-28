<template>
  <a-layout :class="['layout', appStore.device]">
    <!-- SideMenu -->
    <a-drawer v-if="isMobile" placement="left" :class="`drawer-sider ${settingsStore.theme}`" :closable="false"
      :open="collapsed" @close="drawerClose" width="256px">
      <side-menu mode="inline" :menus="permissionStore.routes" :theme="settingsStore.theme" :collapsed="false"
        :collapsible="true" @menuSelect="menuSelect" />
    </a-drawer>

    <side-menu v-else-if="settingsStore.layout !== 'topmenu'" mode="inline" :menus="permissionStore.routes"
      :theme="settingsStore.theme" :collapsed="collapsed" :collapsible="true" />
    <a-layout :class="[settingsStore.layout, `content-width-${settingsStore.contentWidth}`]"
      :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
      <!-- layout header -->
      <global-header :mode="settingsStore.layout" :menus="permissionStore.routes" :theme="settingsStore.theme"
        :collapsed="collapsed" @toggle="toggle" @refresh="onRefresh" />

      <!-- layout content -->
      <a-layout-content :style="{
        height: '100%',
        margin: '24px 24px 0',
        paddingTop: settingsStore.fixedHeader ? '64px' : '0'
      }">
        <multi-tab v-if="settingsStore.multiTab" />
        <transition name="page-transition">
          <section>
            <route-view v-if="showRouter" />
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
import { triggerWindowResizeEvent, isMobile } from '@/utils/device'
import RouteView from './RouteView.vue'
import MultiTab from '@/components/MultiTab/index.vue'
import SideMenu from '@/components/Menu/SideMenu.vue'
import GlobalHeader from '@/components/GlobalHeader/index.vue'
import GlobalFooter from '@/components/GlobalFooter/index.vue'
import SettingDrawer from '@/components/SettingDrawer/index.vue'
import { convertRoutes } from '@/router/generateAsyncRoutes'
import { filteRouterPermission } from '@/router/permission'
import { PERMISSION } from '@/store/mutation-types'
import cloneDeep from 'lodash.clonedeep'
import { useRouter } from 'vue-router'
import emitter from '@/utils/eventBus'
import { useSettingsStore } from '@/store/modules/settings'
import { useAppStore } from '@/store/modules/app'
import { usePermissionStore } from '@/store/modules/permission'

const settingsStore = useSettingsStore();
const appStore = useAppStore();
const permissionStore = usePermissionStore();

const router = useRouter()
const collapsed = ref(false)
const menus = ref([] as any[])

const contentPaddingLeft = computed(() => {
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
    collapsed.value = !val
  }
)


// created()
// bug:TODO:克隆时报警告[Vue warn]: Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.目前还不知道解决方案
const mainMenu = cloneDeep(router.getRoutes())
const orginRoutes = filteRouterPermission(mainMenu, localStorage.getItem(PERMISSION))
// 相对路径转绝对路径
// 系统菜单以/为第一级,/外面的都不显示在菜单中,但是可以跳转到该路由
const routes = convertRoutes(orginRoutes.find((item) => item.path === '/'))
menus.value = (routes && routes.children) || []
collapsed.value = !settingsStore.sidebar

onMounted(() => {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Edge') > -1) {
    nextTick(() => {
      collapsed.value = !collapsed.value
      setTimeout(() => {
        collapsed.value = !collapsed.value
      }, 16)
    })
  }
})

const toggle = () => {
  collapsed.value = !collapsed.value
  settingsStore.setValue('sidebar', !collapsed.value)
  triggerWindowResizeEvent()
}
const menuSelect = () => { }
const drawerClose = () => {
  collapsed.value = false
}

const showRouter = ref(true)
const onRefresh = () => {
  emitter.all.clear()
  showRouter.value = false
  nextTick(() => (showRouter.value = true))
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
