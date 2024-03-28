import { computed, reactive, shallowRef } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import DictItemTable from './../dict-item/index.vue'

export default function useCommonForm() {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'text',
        label: '字典编码',
        dataField: 'typeKey',
        columnSpan: 1,
        extendProps: {
          formItemStyle: {
            marginBottom: '12px'
          }
        }
      },
      {
        type: 'text',
        label: '字典名称',
        dataField: 'typeValue',
        columnSpan: 1,
        extendProps: {
          formItemStyle: {
            marginBottom: '12px'
          }
        }
      },
      {
        type: 'custom',
        label: '',
        dataField: 'dicItemValues',
        columnSpan: 2,
        extendProps: {
          componentKey: 'dictItemTable'
        }
      }
    ]
  })

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      await message.success('保存成功', 1)
      form.visible = false
    } finally {
      command.loading = false
    }
  }

  const handleCancel = () => {
    console.log('handleCancel')
    form.visible = false
  }

  const form = reactive<CommonForm>({
    loading: false,
    visible: false,
    title: '字典值',
    operateType: 'add',
    model: {
      id: -1,
      typeKey: null,
      typeValue: null,
      status: null,
      dicItems: []
    },
    fields,
    customComponents: {
      dictItemTable: shallowRef(DictItemTable)
    },
    elementProps: {
      labelCol: { style: { width: '80px' } },
      wrapperCol: { style: { flex: 1 } },
      style: { margin: '-24px -16px 0 -16px' }
    },
    emitRegister: {
      handleSave,
      handleCancel
    }
  })

  return form
}
