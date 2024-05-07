<template>
  <SettingItem title="整体风格设置">
    <div class="setting-drawer-index-blockChecbox">
      <a-tooltip>
        <template #title>暗色菜单风格</template>
        <div class="setting-drawer-index-item" @click="handleMenuTheme('dark')">
          <img src="../icons/darkMenu.svg" alt="dark" />
          <div class="setting-drawer-index-selectIcon" v-if="settingsStore.theme === 'dark' && !settingsStore.darkMode">
            <CheckOutlined />
          </div>
        </div>
      </a-tooltip>

      <a-tooltip>

        <template #title>亮色菜单风格</template>
        <div class="setting-drawer-index-item" @click="handleMenuTheme('light')">
          <img src="../icons/lightMenu.svg" alt="light" />
          <div class="setting-drawer-index-selectIcon" v-if="settingsStore.theme === 'light'">
            <CheckOutlined />
          </div>
        </div>
      </a-tooltip>

      <a-tooltip>

        <template #title>黑夜模式</template>
        <div class="setting-drawer-index-item" @click="handleDarkMode(true)">
          <img src="../icons/darkTheme.svg" alt="dark theme" />
          <div class="setting-drawer-index-selectIcon" v-if="settingsStore.darkMode">
            <CheckOutlined />
          </div>
        </div>
      </a-tooltip>
    </div>
  </SettingItem>
</template>

<script lang="ts" setup name="GlobalStyle">
import { CheckOutlined } from '@ant-design/icons-vue'
import SettingItem from './SettingItem.vue'
import { useSettingsStore } from '@/store/modules/settings';

const settingsStore = useSettingsStore();

const handleMenuTheme = (theme) => {
  settingsStore.setTheme(theme);
}

const handleDarkMode = (isDark) => {
  settingsStore.setDarkMode(isDark);
}
</script>

<style lang="scss" scoped>
</style>
