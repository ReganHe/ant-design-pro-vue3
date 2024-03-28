import { computed, reactive } from 'vue'
import { CommonTable, TableField } from '#/castor-antd'

export default function useCommonTable(optionsMap) {
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
        type: 'link',
        label: '字典编码',
        dataField: 'typeKey',
        elementProps: {
          width: '100px',
          align: 'center'
        },
        extendProps: {
          linkCommand: 'handleDictItemEdit'
        }
      },
      {
        type: 'default',
        label: '字典名称',
        dataField: 'typeValue',
        elementProps: {
          width: '180px',
          align: 'center'
        }
      },
      {
        type: 'status',
        label: '状态',
        dataField: 'status',
        extendProps: {
          options: optionsMap['status']
        },
        elementProps: {
          align: 'center',
          width: '80px'
        }
      },
      {
        type: 'status',
        label: '类型',
        dataField: 'type',
        extendProps: {
          options: optionsMap['type']
        },
        elementProps: {
          fixed: 'right',
          align: 'center',
          width: '80px'
        }
      },
      {
        type: 'commands',
        label: '操作',
        dataField: 'commands',
        elementProps: {
          fixed: 'right',
          align: 'center',
          width: '60px'
        },
        extendProps: {
          commands: [
            {
              text: '编辑',
              command: 'handleEdit',
              disableValidator: ({ row }) => row.type === '1'
            }
          ]
        }
      }
    ]
  })

  const table = reactive<CommonTable>({
    loading: false,
    title: '数据字典列表',
    dataSource: [] as Array<Object>,
    columns,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    },
    elementProps: {}
  })

  return table
}
