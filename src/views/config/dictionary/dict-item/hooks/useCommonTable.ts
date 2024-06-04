import { computed, reactive } from 'vue'
import { CommonTable, TableField } from '#/castor-antd'

export default function useCommonTable({ optionsMap, props }) {
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
        label: '子项编码',
        dataField: 'dicCode',
        elementProps: {
          width: '100px'
        }
      },
      {
        type: 'default',
        label: '子项名称',
        dataField: 'dicValue',
        elementProps: {
          width: '120px'
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
          fixed: 'right',
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
          width: '80px'
        },
        extendProps: {
          commands: [
            {
              text: '编辑',
              command: 'handleEdit',
              disableValidator: ({ row }) => row.type === '1'
            },
            {
              text: '删除',
              command: 'handleDelete',
              disableValidator: ({ row }) => row.type === '1',
              elementProps: {
                danger: true
              }
            }
          ]
        }
      }
    ]
  })

  const table = reactive<CommonTable>({
    loading: false,
    title: '字典值列表',
    dataSource: props.model.dicItemValues,
    columns,
    pagination: false,
    addCommand: {
      text: '新增子项',
      command: 'handleAdd',
      visibleValidator: () => true,
      disableValidator: () => {}
    }
  })

  return table
}
