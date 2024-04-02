import { computed, reactive } from 'vue'
import { CommonTable, TableField } from '#/castor-antd'

export default function useCommonTable({ optionsMap, pageModel }) {
  const columns = computed<Array<TableField>>(() => {
    return [
      {
        type: 'index',
        label: '序号',
        dataField: 'index',
        elementProps: {
          width: '50px'
        }
      },
      {
        type: 'default',
        label: '用户账号',
        dataField: 'loginName',
        elementProps: {
          width: '160px'
        }
      },
      {
        type: 'default',
        label: '用户名称',
        dataField: 'userName'
      },
      {
        type: 'default',
        label: '所属站点',
        dataField: 'orgName'
      },
      {
        type: 'status',
        label: '状态',
        dataField: 'status',
        extendProps: {
          options: optionsMap['status']
        },
        elementProps: {
          width: '70px',
          fixed: 'right',
          align: 'center'
        }
      },
      {
        type: 'commands',
        label: '操作',
        dataField: 'commands',
        extendProps: {
          commands: [
            {
              text: '编辑',
              command: 'handleEdit'
            },
            {
              text: '解锁',
              command: 'handleUnlock',
              disableValidator: ({ row }) => !pageModel.lockedUserIds.includes(row.userId)
            },
            {
              text: '重置密码',
              command: 'handleResetPwd'
            },
            {
              text: '删除',
              command: 'handleDelete',
              elementProps: {
                danger: true
              }
            }
          ]
        },
        elementProps: {
          fixed: 'right',
          width: '220px',
          align: 'center'
        }
      }
    ]
  })

  const table = reactive<CommonTable>({
    loading: false,
    title: '用户信息',
    dataSource: [] as Array<Object>,
    columns,
    addCommand: {
      text: '新建用户',
      command: 'handleAdd',
      visibleValidator: () => true,
      disableValidator: () => {}
    },
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    },
    elementProps: {}
  })

  return table
}
