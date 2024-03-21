<template>
  <a-config-provider :locale="zhCN" :theme="{
    token: {
      colorPrimary: settingsStore.color,
      borderRadius: 2
    }
  }">
    <!-- algorithm: theme.darkAlgorithm,夜间主题 -->
    <router-view />
  </a-config-provider>
  <LockScreen />
</template>

<script lang="ts" setup name="App">
import { onErrorCaptured, h } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { setDeviceType } from '@/utils/device'
import LockScreen from '@/components/LockScreen/index.vue'
import emitter from '@/utils/eventBus'
import { useRouter } from 'vue-router'
import { Modal } from 'ant-design-vue'
import { useSettingsStore } from '@/store/modules/settings';

const settingsStore = useSettingsStore();

window.onresize = setDeviceType
setDeviceType()

const router = useRouter()
emitter.once('axios_goto_login', () => {
  router.push({ name: 'login' })
})

//全局错误处理
onErrorCaptured((err, instance, info) => {
  if (window.env !== 'localhost') {
    // debugger
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
