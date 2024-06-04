import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import { addValue, modifyValue } from '@/api/auto/ApiDict'

export default function useCommonForm({ optionsMap }) {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'default',
        label: '子项编码',
        dataField: 'dicCode',
        columnSpan: 1,
        rules: [
          { required: true, message: '不能为空', trigger: 'blur' },
          { max: 50, message: '最多输入50个字符' }
        ]
      },
      {
        type: 'default',
        label: '子项字典名称',
        dataField: 'dicValue',
        columnSpan: 1,
        rules: [
          { required: true, message: '不能为空', trigger: 'change' },
          { max: 50, message: '最多输入50个字符' }
        ]
      },
      {
        type: 'select',
        label: '状态',
        dataField: 'status',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空', trigger: 'change' }],
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
      if (form.model.id < 0) {
        await addValue(form.model)
      } else {
        await modifyValue(form.model)
      }

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
    title: '数据字典子项',
    operateType: 'add',
    rowFieldsCount: 1,
    model: {
      id: -1,
      typeId: null,
      dicCode: null,
      dicValue: null,
      status: '0'
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
      labelCol: { style: { width: '120px' } },
      wrapperCol: { style: { flex: 1 } },
      layout: 'vertical'
    },
    emitRegister: {
      handleSave,
      handleCancel
    }
  })

  return form
}
