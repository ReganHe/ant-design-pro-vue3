<template>
  <div class="setting-drawer">
    <a-drawer width="320" placement="right" @close="onClose" :closable="isMobile" :open="settingsStore.showSettings">
      <div class="setting-drawer-index-content">
        <!-- 整体风格设置 -->
        <GlobalStyle />
        <!-- 主题色 -->
        <ThemeColor />
        <!-- 导航模式 -->
        <NavigationMode />
        <!-- 布局设置 -->
        <LayoutSettings />
        <!-- 其他设置 -->
        <OtherSettings />
      </div>
      <template #handle>
        <div class="setting-drawer-index-handle" v-if="settingsStore.showSettings" @click="onClose">
          <CloseOutlined style="color: #fff" />
        </div>
      </template>
    </a-drawer>
  </div>
</template>

<script lang="ts" setup name="SettingDrawer">
import { CloseOutlined } from '@ant-design/icons-vue'
import GlobalStyle from './components/GlobalStyle.vue'
import ThemeColor from './components/ThemeColor.vue'
import NavigationMode from './components/NavigationMode.vue'
import LayoutSettings from './components/LayoutSettings.vue'
import OtherSettings from './components/OtherSettings.vue'
import { isMobile } from '@/utils/device-type'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore();

const onClose = () => {
  settingsStore.setValue('showSettings', false)
}

</script>

<style lang="less" scoped>
@import '../../style/index.less';

.setting-drawer-index-content {
  ::v-deep(.setting-drawer-index-blockChecbox) {
    display: flex;

    .setting-drawer-index-item {
      margin-right: 16px;
      position: relative;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 48px;
      }

      .setting-drawer-index-selectIcon {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding-top: 15px;
        padding-left: 24px;
        height: 100%;
        color: @primary-color;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }
}

.setting-drawer-index-handle {
  position: absolute;
  top: 240px;
  background: @primary-color;
  width: 48px;
  height: 48px;
  right: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;
  text-align: center;
  font-size: 16px;
  border-radius: 4px 0 0 4px;

  i {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}
</style>
