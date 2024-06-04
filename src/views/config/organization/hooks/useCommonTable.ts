import { computed, reactive } from 'vue'
import { CommonTable, TableField } from '#/castor-antd'

export default function useCommonTable() {
  const columns = computed<Array<TableField>>(() => {
    return [
      {
        type: 'index',
        label: '序号',
        dataField: 'index',
        elementProps: {
          width: '60px '
        }
      },
      {
        type: 'default',
        label: '站点编号',
        dataField: 'orgCode',
        elementProps: {
          align: 'center'
        }
      },
      {
        type: 'default',
        label: '站点名称',
        dataField: 'orgName'
      },
      {
        type: 'default',
        label: '站点简称',
        dataField: 'orgShortName'
      },
      {
        type: 'commands',
        label: '操作',
        dataField: 'commands',
        elementProps: {
          fixed: 'right',
          width: '120px'
        },
        extendProps: {
          commands: [
            {
              text: '编辑',
              command: 'handleEdit',
              disableValidator: ({ row }) => row.id === 2,
              visibleValidator: ({ row }) => row.id >= 2
            },
            {
              text: '删除',
              command: 'handleDelete',
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
    title: '下级站点',
    dataSource: [] as Array<Object>,
    columns,
    addCommand: {
      text: '新建站点',
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
