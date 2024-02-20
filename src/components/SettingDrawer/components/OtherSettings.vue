<template>
  <SettingItem title="其他设置">
    <div>
      <a-list :split="false">
        <!-- 内容区域宽度  -->
        <a-list-item>
          <template #actions>
            <a-switch size="small" :checked="colorWeak" @change="onColorWeak" />
          </template>
          <a-list-item-meta>
            <template #title>色弱模式</template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item>
          <template #actions>
            <a-switch size="small" :checked="grayMode" @change="onGrayMode" />
          </template>
          <a-list-item-meta>
            <template #title>黑白模式</template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item>
          <template #actions>
            <a-switch size="small" :checked="multiTab" @change="onMultiTab" />
          </template>
          <a-list-item-meta>
            <template #title>多页签模式</template>
          </a-list-item-meta>
        </a-list-item>
      </a-list>
    </div>
  </SettingItem>
</template>
<script lang="ts" setup name="OtherSettings">
import { systemConfig } from '@/store/reactiveState'
import { TOGGLE_WEAK, TOGGLE_GRAY, TOGGLE_MULTI_TAB } from '@/store/mutation-types'
import useSiteSettings from '@/store/useSiteSettings'
import { updateColorWeak, updateGrayMode } from '../settingConfig'
import SettingItem from './SettingItem.vue'

const { colorWeak, grayMode, multiTab } = useSiteSettings()

const onColorWeak = (checked) => {
  systemConfig.commit(TOGGLE_WEAK, checked)
  updateColorWeak(checked)
}

const onGrayMode = (checked) => {
  systemConfig.commit(TOGGLE_GRAY, checked)
  updateGrayMode(checked)
}

const onMultiTab = (checked) => {
  systemConfig.commit(TOGGLE_MULTI_TAB, checked)
}
</script>
<style lang="less">
</style>
