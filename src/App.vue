<template>
  <a-config-provider :locale="zhCN" :theme="settingsStore.themeConfig">
    <!-- algorithm: theme.darkAlgorithm,夜间主题 -->
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup name="App">
import { onErrorCaptured, h, onMounted } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { setDeviceType } from '@/utils/device-type'
import { Modal } from 'ant-design-vue'
import { useSettingsStore } from '@/store/modules/settings'

const settingsStore = useSettingsStore()

window.onresize = setDeviceType
setDeviceType()

// 初始化的时候
onMounted(() => {
  // 设置主题
  const themeName = settingsStore.themeName
  document.documentElement.setAttribute('data-theme', themeName)
  // 设置dark
  document.documentElement.setAttribute('data-dark', settingsStore.darkMode ? 'dark' : 'light')
})

//全局错误处理
onErrorCaptured((err, instance, info) => {
  if (!import.meta.env.DEV) {
    console.log(err, instance, info)
    Modal.error({
      title: 'System Error',
      content: h('pre', err.stack),
      class: 'errorCapturedModal',
      width: '60%'
    })
  }
})
</script>
