<template>
  <SettingItem title="其他设置">
    <div>
      <a-list :split="false">
        <!-- 内容区域宽度  -->
        <a-list-item>
          <template #actions>
            <a-switch size="small" :checked="settingsStore.weak" @change="onColorWeak" />
          </template>
          <a-list-item-meta>
            <template #title>色弱模式</template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item>
          <template #actions>
            <a-switch size="small" :checked="settingsStore.gray" @change="onGrayMode" />
          </template>
          <a-list-item-meta>
            <template #title>黑白模式</template>
          </a-list-item-meta>
        </a-list-item>
        <a-list-item>
          <template #actions>
            <a-switch size="small" :checked="settingsStore.multiTab" @change="onMultiTab" />
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
import { updateColorWeak, updateGrayMode } from '../settingConfig'
import SettingItem from './SettingItem.vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()

const onColorWeak = (checked) => {
  settingsStore.setValue('weak', checked)
  updateColorWeak(checked)
}

const onGrayMode = (checked) => {
  settingsStore.setValue('gray', checked)
  updateGrayMode(checked)
}

const onMultiTab = (checked) => {
  settingsStore.setValue('multiTab', checked)
}
</script>
<style lang="scss"></style>
