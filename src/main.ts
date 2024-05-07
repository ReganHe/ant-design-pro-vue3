import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import setupDefaultSetting from '@/utils/default-setting'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { CaCommonQuery } from '@/components/CaCommonQuery'
import { CaCommonTable } from '@/components/CaCommonTable'
import { CaCommonForm } from '@/components/CaCommonForm'
import App from '@/App.vue'
import { router } from '@/router'
import { store } from '@/store'
import dayjsWrapper from '@/utils/dayjs'
import 'ant-design-vue/dist/reset.css'
import '@/style/global.scss'
import 'virtual:svg-icons-register'
import '@/utils/passive-events'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.component('SvgIcon', SvgIcon)
app.component('CaCommonQuery', CaCommonQuery)
app.component('CaCommonTable', CaCommonTable)
app.component('CaCommonForm', CaCommonForm)

/** 挂载全局变量 dayjs */
app.config.globalProperties.$dayjs = dayjsWrapper
console.log('app.config.globalProperties', app.config.globalProperties)

app.mount('#app')

setupDefaultSetting()
