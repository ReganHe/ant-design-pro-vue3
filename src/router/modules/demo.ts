import { BasicLayout } from '@/layouts'
import { isDevMode } from '@/utils/env'
import { RouteRecordRaw } from 'vue-router'

const demo: RouteRecordRaw = {
  path: '/demo',
  component: BasicLayout,
  redirect: '/demo/common-table',
  name: 'Demo',
  meta: {
    orderNo: 0,
    icon: 'bx-analyse',
    title: 'Demo',
    hidden: !isDevMode()
  },
  children: [
    {
      path: '/demo/common-page',
      name: 'CommonPage',
      component: () => import('@/views/demo/common-page/index.vue'),
      meta: {
        title: '通用页面'
      }
    },
    {
      path: '/demo/common-table',
      name: 'CommonTable',
      redirect: '/demo/common-table/basic',
      meta: {
        title: '通用表格'
      },
      children: [
        {
          path: '/demo/common-table/basic',
          name: 'CommonTableBasic',
          component: () => import('@/views/demo/common-table/basic/index.vue'),
          meta: {
            title: '基础'
          }
        },
        {
          path: '/demo/common-table/index-column',
          name: 'CommonTableIndexColumn',
          component: () => import('@/views/demo/common-table/index-column/index.vue'),
          meta: {
            title: '序号列'
          }
        },
        {
          path: '/demo/common-table/selection',
          name: 'CommonTableSelection',
          component: () => import('@/views/demo/common-table/selection/index.vue'),
          meta: {
            title: '多选列'
          }
        },
        {
          path: '/demo/common-table/link-column',
          name: 'CommonTableLinkColumn',
          component: () => import('@/views/demo/common-table/link-column/index.vue'),
          meta: {
            title: '超链接列'
          }
        },
        {
          path: '/demo/common-table/status-column',
          name: 'CommonTableStatusColumn',
          component: () => import('@/views/demo/common-table/status-column/index.vue'),
          meta: {
            title: '状态列'
          }
        },
        {
          path: '/demo/common-table/row-commands',
          name: 'CommonTableRowCommands',
          component: () => import('@/views/demo/common-table/row-commands/index.vue'),
          meta: {
            title: '操作列'
          }
        },
        {
          path: '/demo/common-table/custom-component',
          name: 'CommonTableCustomComponent',
          component: () => import('@/views/demo/common-table/custom-component/index.vue'),
          meta: {
            title: '自定义组件列'
          }
        },
        {
          path: '/demo/common-table/pagination',
          name: 'CommonTablePagination',
          component: () => import('@/views/demo/common-table/pagination/index.vue'),
          meta: {
            title: '分页'
          }
        },
        {
          path: '/demo/common-table/sorter',
          name: 'CommonTableSorter',
          component: () => import('@/views/demo/common-table/sorter/index.vue'),
          meta: {
            title: '排序'
          }
        },
        {
          path: '/demo/common-table/add',
          name: 'CommonTableAdd',
          component: () => import('@/views/demo/common-table/add/index.vue'),
          meta: {
            title: '新增'
          }
        }
      ]
    },
    {
      path: '/demo/common-query',
      name: 'CommonQuery',
      redirect: '/demo/common-query/basic',
      meta: {
        title: '通用查询'
      },
      children: [
        {
          path: '/demo/common-query/basic',
          name: 'CommonQueryBasic',
          component: () => import('@/views/demo/common-query/basic/index.vue'),
          meta: {
            title: '基础'
          }
        },
        {
          path: '/demo/common-query/select',
          name: 'CommonQuerySelect',
          component: () => import('@/views/demo/common-query/select/index.vue'),
          meta: {
            title: '单选下拉框'
          }
        },
        {
          path: '/demo/common-query/date',
          name: 'CommonQueryDate',
          component: () => import('@/views/demo/common-query/date/index.vue'),
          meta: {
            title: '日期时间选择框'
          }
        },
        {
          path: '/demo/common-query/validator',
          name: 'CommonQueryValidator',
          component: () => import('@/views/demo/common-query/validator/index.vue'),
          meta: {
            title: '校验控制'
          }
        }
      ]
    },
    {
      path: '/demo/common-form',
      name: 'CommonForm',
      redirect: '/demo/common-form/basic',
      meta: {
        title: '通用表单'
      },
      children: [
        {
          path: '/demo/common-form/basic',
          name: 'CommonFormBasic',
          component: () => import('@/views/demo/common-form/basic/index.vue'),
          meta: {
            title: '基础表单'
          }
        },
        {
          path: '/demo/common-form/form-rule',
          name: 'CommonFormRule',
          component: () => import('@/views/demo/common-form/form-rule/index.vue'),
          meta: {
            title: '表单校验'
          }
        },
        {
          path: '/demo/common-form/item-rule',
          name: 'CommonFormItemRule',
          component: () => import('@/views/demo/common-form/item-rule/index.vue'),
          meta: {
            title: '单项校验'
          }
        },
        {
          path: '/demo/common-form/custom-component',
          name: 'CommonFormCustomComponent',
          component: () => import('@/views/demo/common-form/custom-component/index.vue'),
          meta: {
            title: '自定义组件'
          }
        },
        {
          path: '/demo/common-form/footer-status',
          name: 'CommonFormFooterStatus',
          component: () => import('@/views/demo/common-form/footer-status/index.vue'),
          meta: {
            title: '底部状态'
          }
        },
        {
          path: '/demo/common-form/loading',
          name: 'CommonFormLoading',
          component: () => import('@/views/demo/common-form/loading/index.vue'),
          meta: {
            title: '加载中'
          }
        }
      ]
    }
  ]
}

export default demo
