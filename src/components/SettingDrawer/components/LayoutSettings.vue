<template>
  <SettingItem title="布局设置">
    <a-list :split="false">
      <!-- 内容区域宽度 -->
      <a-list-item>
        <template #actions>
          <a-tooltip>
            <template #title>该设定仅 [顶部栏导航] 时有效</template>
            <a-select size="small" style="width: 80px" :value="settingsStore.contentWidth"
              @change="handleContentWidthChange" :disabled="settingsStore.layout === 'sidemenu'">
              <a-select-option value="Fluid">流式</a-select-option>
              <a-select-option value="Fixed">固定</a-select-option>
            </a-select>
          </a-tooltip>
        </template>
        <a-list-item-meta>
          <template #title>内容区域宽度</template>
        </a-list-item-meta>
      </a-list-item>
      <!-- 固定 Header -->
      <a-list-item>
        <template #actions>
          <a-switch size="small" :checked="settingsStore.fixedHeader" @change="handleFixedHeader" />
        </template>
        <a-list-item-meta>
          <template #title>固定 Header</template>
        </a-list-item-meta>
      </a-list-item>
      <!-- 下滑时隐藏 Header -->
      <a-list-item>
        <template #actions>
          <a-switch size="small" :disabled="!settingsStore.fixedHeader" :checked="settingsStore.autoHideHeader"
            @change="handleFixedHeaderHidden" />
        </template>
        <a-list-item-meta>
          <template #title>
            <a-tooltip placement="left">
              <template #title>固定 Header 时可配置</template>
              <div :style="{ opacity: !settingsStore.fixedHeader ? '0.5' : '1' }">下滑时隐藏 Header</div>
            </a-tooltip>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <!-- 固定侧边菜单 -->
      <a-list-item>
        <template #actions>
          <a-switch size="small" :disabled="settingsStore.layout === 'topmenu'" :checked="settingsStore.fixSiderbar"
            @change="handleFixSiderbar" />
        </template>
        <a-list-item-meta>
          <template #title>
            <!-- { textDecoration: layoutMode === 'topmenu' ? 'line-through' : 'unset' } -->
            <div :style="{ opacity: settingsStore.layout === 'topmenu' ? '0.5' : '1' }">固定侧边菜单</div>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </SettingItem>
</template>
<script lang="ts" setup name="LayoutSettings">
import SettingItem from './SettingItem.vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore();

const handleContentWidthChange = (type) => {
  settingsStore.setValue('contentWidth', type);
}

const handleFixedHeader = (fixed) => {
  settingsStore.setValue('fixedHeader', fixed);
}

const handleFixedHeaderHidden = (autoHidden) => {
  settingsStore.setValue('autoHideHeader', autoHidden);
}

const handleFixSiderbar = (fixed) => {
  if (settingsStore.layout === 'topmenu') {
    settingsStore.setValue('fixSiderbar', false);
    return
  }

  settingsStore.setValue('fixSiderbar', fixed);
}
</script>
<style lang="scss">
</style>
