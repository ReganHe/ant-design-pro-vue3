import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import '@/style/global.less'
import 'virtual:svg-icons-register'
import setupDefaultSetting from '@/utils/setupDefaultSetting'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import '@/utils/default-passive-events'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')

setupDefaultSetting()

window.env = import.meta.env.MODE
