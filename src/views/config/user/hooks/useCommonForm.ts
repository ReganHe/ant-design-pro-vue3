import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import { addUser, modifyUser } from '@/api/auto/ApiUser'

export default function useCommonForm() {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'default',
        label: '用户账号',
        dataField: 'loginName',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }]
      },
      {
        type: 'default',
        label: '登录密码',
        dataField: 'password',
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
        visibleValidator: () => form.operateType === 'add'
      },
      {
        type: 'default',
        label: '用户名称',
        dataField: 'userName',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }]
      },
      {
        type: 'switch',
        label: '是否启用',
        dataField: 'status',
        columnSpan: 1
      },
      {
        type: 'textArea',
        label: '备注',
        dataField: 'remark',
        columnSpan: 1
      }
    ]
  })

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      if (form.model.id < 0) {
        const { ...data } = form.model
        await addUser({ ...data, status: form.model.status ? '0' : '1' })
      } else {
        await modifyUser({ ...form.model, status: form.model.status ? '0' : '1' })
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
    title: '用户信息',
    operateType: 'add',
    rowFieldsCount: 1,
    model: {
      id: -1,
      loginName: undefined,
      password: undefined,
      userName: undefined,
      status: false,
      remark: '',
      orgId: undefined,
      roleIds: [],
      deviceIds: []
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
