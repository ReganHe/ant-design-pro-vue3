import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import { resetPassword } from '@/api/auto/ApiGwsUserInfo'

export default function useCommonForm() {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'default',
        label: '登录密码',
        dataField: 'resetPassword',
        columnSpan: 1,
        rules: [
          { required: true, message: '不能为空' },
          { min: 9, max: 64, message: '至少9位至多64位字符' },
          {
            validator: (rule, value) => {
              console.log('validator', rule)
              if (value && !value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/)) {
                return Promise.reject('密码必须包含数字、大写字母、小写字母')
              } else {
                return Promise.resolve()
              }
            },
            trigger: 'blur'
          }
        ],
        elementProps: {
          placeHolder: '请输入新密码'
        }
      }
    ]
  })

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      await resetPassword(form.model)
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
    title: '重置密码',
    operateType: 'add',
    rowFieldsCount: 1,
    model: {
      id: undefined,
      resetPassword: undefined
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
        elementProps: {
          type: 'primary'
        }
      }
    ],
    elementProps: {
      layout: 'vertical',
      labelCol: { style: { width: '80px' } },
      wrapperCol: { style: { flex: 1 } }
    },
    emitRegister: {
      handleSave,
      handleCancel
    }
  })

  return form
}
