<template>
  <SettingItem title="主题色">
    <div style="height: 20px">
      <a-tooltip class="setting-drawer-theme-color-colorBlock" v-for="(item, index) in colorList" :key="index">
        <template #title>{{ item.key }}</template>
        <a-tag :color="item.color" @click="changeColor(item.color, item.key)">
          <CheckOutlined v-if="item.color === settingsStore.color" />
        </a-tag>
      </a-tooltip>
      <!-- 自定义颜色 -->
      <a-popover title="自定义" overlayClassName="themeColorCustomColor" placement="bottomRight">

        <template #content>
          <ColorPicker @change="changeColor" format="hex" disableHistory disableAlpha />
        </template>
        <a-tag :color="isCustomColorRef ? settingsStore.color : ''" class="setting-drawer-theme-color-colorBlock">
          <CheckOutlined v-if="isCustomColorRef" />
        </a-tag>
      </a-popover>
    </div>
  </SettingItem>
</template>

<script lang="ts" setup name="ThemeColor">
import { computed } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import { CheckOutlined } from '@ant-design/icons-vue'
import { colorList } from '../settingConfig'
import SettingItem from './SettingItem.vue'
import ColorPicker from '@/components/ColorPicker/index.vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore();

const changeColor = (color: string, key: string) => {
  console.log('changeColor', color, settingsStore, key);
  const themeName = key ? key : (isCustomColorRef.value ? 'custom' : 'default');
  settingsStore.setValue('color', color);
  settingsStore.setValue('themeName', themeName);
  document.documentElement.setAttribute('data-theme', themeName)
  console.log('changeColor result', settingsStore.color)
  ConfigProvider.config({
    theme: {
      primaryColor: color
    }
  })
}

const isCustomColorRef = computed(() => {
  const colorArr = colorList.map((item) => item.color)
  return !colorArr.includes(settingsStore.color + '')
})
</script>

<style lang="less" scoped>
.setting-drawer-theme-color-colorBlock {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  float: left;
  cursor: pointer;
  margin-right: 8px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
  color: #fff;
  font-weight: 700;

  i {
    font-size: 14px;
  }
}
</style>
