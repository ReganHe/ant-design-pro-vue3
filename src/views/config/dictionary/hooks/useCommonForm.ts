import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import { modifyType } from '@/api/auto/ApiDict'

export default function useCommonForm({ optionsMap }) {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'text',
        label: '字典编码',
        dataField: 'typeKey',
        columnSpan: 1
      },
      {
        type: 'default',
        label: '字典名称',
        dataField: 'typeValue',
        columnSpan: 1,
        rules: [
          { required: true, message: '不能为空' },
          { max: 50, message: '最多输入50个字符' }
        ]
      },
      {
        type: 'select',
        label: '是否启用',
        dataField: 'status',
        columnSpan: 1,
        elementProps: {
          options: optionsMap['status']
        }
      }
    ]
  })

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      await modifyType(form.model)
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
    title: '数据字典',
    operateType: 'add',
    rowFieldsCount: 1,
    model: {
      id: -1,
      typeKey: null,
      typeValue: null,
      status: null
    },
    fields,
    commands: [
      {
        text: '取消',
        command: 'handleCancel'
      },
      {
        text: '确定',
        command: 'handleSave',
        loading: false,
        visibleValidator: ({ operateType }) => operateType !== 'view',
        elementProps: {
          type: 'primary'
        }
      }
    ],
    elementProps: {
      labelCol: { style: { width: '80px' } },
      wrapperCol: { style: { flex: 1 } },
      style: { margin: '-24px -24px 0 -24px' },
      layout: 'vertical'
    },
    extendProps: {
      footerStyle: {
        margin: '0 -24px'
      }
    },
    emitRegister: {
      handleSave,
      handleCancel
    }
  })

  return form
}
