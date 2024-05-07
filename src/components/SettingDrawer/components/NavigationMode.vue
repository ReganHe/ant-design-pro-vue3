<template>
  <SettingItem title="导航模式">
    <div class="setting-drawer-index-blockChecbox">
      <a-tooltip>
        <template #title>侧边栏导航</template>
        <div class="setting-drawer-index-item" @click="handleLayout('sidemenu')">
          <img src="../icons/sideMenu.svg" alt="sidemenu" />
          <div class="setting-drawer-index-selectIcon" v-if="settingsStore.layout === 'sidemenu'">
            <CheckOutlined />
          </div>
        </div>
      </a-tooltip>

      <a-tooltip>

        <template #title>顶部栏导航</template>
        <div class="setting-drawer-index-item" @click="handleLayout('topmenu')">
          <img src="../icons/topMenu.svg" alt="topmenu" />
          <div class="setting-drawer-index-selectIcon" v-if="settingsStore.layout !== 'sidemenu'">
            <CheckOutlined />
          </div>
        </div>
      </a-tooltip>
    </div>
  </SettingItem>
</template>

<script lang="ts" setup name="NavigationMode">
import { CheckOutlined } from '@ant-design/icons-vue'
import SettingItem from './SettingItem.vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore();

const handleLayout = (mode) => {
  settingsStore.setValue('layout', mode);
  if (mode === 'sidemenu') {
    settingsStore.setValue('contentWidth', 'Fluid');
  }
  // 因为顶部菜单不能固定左侧菜单栏，所以强制关闭
  handleFixSiderbar(false)
}

const handleFixSiderbar = (fixed) => {
  if (settingsStore.layout === 'topmenu') {
    settingsStore.setValue('fixSiderbar', false);
    return
  }

  settingsStore.setValue('fixSiderbar', fixed);
}
</script>

<style lang="scss" scoped>
</style>
