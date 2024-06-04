import { computed, reactive } from 'vue'
import { CommonQuery, QueryField } from '#/castor-antd'

export default function useCommonQuery({ optionsMap }) {
  const fields = computed<Array<QueryField>>(() => {
    return [
      {
        type: 'default',
        label: '关键字',
        dataField: 'queryKey',
        columnSpan: 1,
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '60px' } },
            wrapperCol: { style: { width: '100px' } }
          }
        }
      },
      {
        type: 'select',
        label: '状态',
        dataField: 'status',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['status']
        },
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '40px' } },
            wrapperCol: { style: { width: '80px' } }
          }
        }
      }
    ]
  })

  const query = reactive<CommonQuery>({
    loading: false,
    model: {
      queryKey: '',
      status: '0'
    },
    fields,
    commands: [
      {
        text: '查询',
        command: 'handleFilter',
        elementProps: {
          type: 'primary'
        },
        canKeyDown: true
      },
      {
        text: '重置',
        command: 'handleReset'
      }
    ],
    elementProps: {
      labelCol: { style: { width: '40px' } },
      wrapperCol: { style: { flex: 1 } }
    }
  })

  return query
}
