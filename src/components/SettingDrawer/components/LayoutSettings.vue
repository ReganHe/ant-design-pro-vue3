<template>
  <SettingItem title="布局设置">
    <a-list :split="false">
      <!-- 内容区域宽度 -->
      <a-list-item>
        <template #actions>
          <a-tooltip>
            <template #title>该设定仅 [顶部栏导航] 时有效</template>
            <a-select size="small" style="width: 80px" :value="contentWidth" @change="handleContentWidthChange" :disabled="layoutMode === 'sidemenu'">
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
          <a-switch size="small" :checked="fixedHeader" @change="handleFixedHeader" />
        </template>
        <a-list-item-meta>
          <template #title>固定 Header</template>
        </a-list-item-meta>
      </a-list-item>
      <!-- 下滑时隐藏 Header -->
      <a-list-item>
        <template #actions>
          <a-switch slot="actions" size="small" :disabled="!fixedHeader" :checked="autoHideHeader" @change="handleFixedHeaderHidden" />
        </template>
        <a-list-item-meta>
          <template #title>
            <a-tooltip placement="left">
              <template #title>固定 Header 时可配置</template>
              <div :style="{ opacity: !fixedHeader ? '0.5' : '1' }">下滑时隐藏 Header</div>
            </a-tooltip>
          </template>
        </a-list-item-meta>
      </a-list-item>
      <!-- 固定侧边菜单 -->
      <a-list-item>
        <template #actions>
          <a-switch slot="actions" size="small" :disabled="layoutMode === 'topmenu'" :checked="fixSiderbar" @change="handleFixSiderbar" />
        </template>
        <a-list-item-meta>
          <template #title>
            <!-- { textDecoration: layoutMode === 'topmenu' ? 'line-through' : 'unset' } -->
            <div :style="{ opacity: layoutMode === 'topmenu' ? '0.5' : '1' }">固定侧边菜单</div>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </SettingItem>
</template>
<script lang="ts" setup name="LayoutSettings">
import { systemConfig } from '@/store/reactiveState'
import { TOGGLE_CONTENT_WIDTH, TOGGLE_FIXED_HEADER, TOGGLE_FIXED_HEADER_HIDDEN, TOGGLE_FIXED_SIDERBAR } from '@/store/mutation-types'
import useSiteSettings from '@/store/useSiteSettings'
import SettingItem from './SettingItem.vue'

const { contentWidth, layoutMode, fixedHeader, autoHideHeader, fixSiderbar } = useSiteSettings()

const handleContentWidthChange = (type) => {
  systemConfig.commit(TOGGLE_CONTENT_WIDTH, type)
}

const handleFixedHeader = (fixed) => {
  systemConfig.commit(TOGGLE_FIXED_HEADER, fixed)
}

const handleFixedHeaderHidden = (autoHidden) => {
  systemConfig.commit(TOGGLE_FIXED_HEADER_HIDDEN, autoHidden)
}

const handleFixSiderbar = (fixed) => {
  if (systemConfig.state.layout === 'topmenu') {
    systemConfig.commit(TOGGLE_FIXED_SIDERBAR, false)
    return
  }
  systemConfig.commit(TOGGLE_FIXED_SIDERBAR, fixed)
}
</script>
<style lang="less"></style>
