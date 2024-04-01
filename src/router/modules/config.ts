import { BasicLayout } from '@/layouts'
import { RouteRecordRaw } from 'vue-router'

const config: RouteRecordRaw = {
  path: '/config',
  name: 'Config',
  component: BasicLayout,
  redirect: '/config/user',
  meta: {
    orderNo: 160,
    icon: 'StarOutlined',
    title: '系统配置'
  },
  children: [
    {
      path: '/config/organization',
      name: 'ConfigOrganization',
      component: () => import('@/views/config/organization/index.vue'),
      meta: {
        title: '机构管理'
      }
    },
    {
      path: '/config/user',
      name: 'ConfigUser',
      component: () => import('@/views/config/user/index.vue'),
      meta: {
        title: '用户管理'
      }
    },
    {
      path: '/config/role',
      name: 'ConfigRole',
      component: () => import('@/views/config/role/index.vue'),
      meta: {
        title: '角色管理'
      }
    },
    {
      path: '/config/dictionary',
      name: 'ConfigDictionary',
      component: () => import('@/views/config/dictionary/index.vue'),
      meta: {
        title: '数据字典管理'
      }
    }
  ]
}

export default config
