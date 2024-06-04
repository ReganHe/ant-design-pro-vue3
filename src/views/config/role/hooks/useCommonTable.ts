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
        type: 'default',
        label: '角色编码',
        dataField: 'code'
      },
      {
        type: 'default',
        label: '角色名称',
        dataField: 'name'
      },
      {
        type: 'status',
        label: '角色类型',
        dataField: 'type',
        extendProps: {
          options: optionsMap['type']
        }
      },
      {
        type: 'commands',
        label: '操作',
        dataField: 'commands',
        extendProps: {
          commands: [
            {
              text: '权限',
              command: 'handleSetPermission'
            }
          ]
        },
        elementProps: {
          width: '80px'
        }
      }
    ]
  })

  const table = reactive<CommonTable>({
    loading: false,
    title: '角色信息',
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
