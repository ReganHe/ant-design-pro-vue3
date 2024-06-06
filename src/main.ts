import { createApp } from 'vue'
import Antd from 'ant-design-vue'
// import Castor3UI from '@neweratech/castor3-ui'
import setupDefaultSetting from '@/utils/default-setting'
import SvgIcon from '@/components/SvgIcon/index.vue'
// import { CaCommonQuery } from '@/components/CaCommonQuery'
// import { CaCommonTable } from '@/components/CaCommonTable'
// import { CaCommonForm } from '@/components/CaCommonForm'
import CaCommonQuery from '@neweratech/castor3-ui/es/CaCommonQuery'
import CaCommonTable from '@neweratech/castor3-ui/es/CaCommonTable'
import CaCommonForm from '@neweratech/castor3-ui/es/CaCommonForm'
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
// app.use(Castor3UI)
app.use(router)
app.use(store)
app.component('SvgIcon', SvgIcon)
app.component('CaCommonQuery', CaCommonQuery)
app.component('CaCommonTable', CaCommonTable)
app.component('CaCommonForm', CaCommonForm)

/** 挂载全局变量 dayjs */
app.config.globalProperties.$dayjs = dayjsWrapper

app.mount('#app')

setupDefaultSetting()
