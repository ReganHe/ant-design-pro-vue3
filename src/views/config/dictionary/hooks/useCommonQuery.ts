import { computed, reactive } from 'vue'
import { CommonQuery, QueryField } from '#/castor-antd'

export default function useCommonQuery() {
  const fields = computed<Array<QueryField>>(() => {
    return [
      {
        type: 'default',
        label: '字典编码',
        dataField: 'typeKey',
        columnSpan: 1,
        elementProps: {
          allowClear: true
        },
        extendProps: {
          formItemProps: {
            labelCol: { style: { width: '80px' } },
            wrapperCol: { style: { width: '180px' } }
          }
        }
      }
    ]
  })

  const query = reactive<CommonQuery>({
    loading: false,
    model: {
      typeKey: ''
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
