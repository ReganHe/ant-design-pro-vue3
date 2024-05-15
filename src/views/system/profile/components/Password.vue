<template>
  <div class="common-form-container">
    <ca-common-form v-bind="form" />
  </div>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { modifyPassword } from '@/api/auto/ApiGwsUserInfo'

const fields = computed<Array<FormField>>(() => {
  return [
    {
      type: 'default',
      label: '原始密码',
      dataField: 'oldPassword',
      columnSpan: 1,
      rules: [{ required: true, message: '不能为空' }]
    },
    {
      type: 'default',
      label: '新密码',
      dataField: 'newPassword',
      columnSpan: 1,
      rules: [
        { required: true, message: '不能为空' },
        { min: 9, max: 64, message: '至少9位至多64位字符' },
        {
          validator: (rule, value) => {
            console.log('validator', rule, value)
            if (value && !value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/)) {
              return Promise.reject('密码必须同时包含数字、大写字母、小写字母')
            } else {
              return Promise.resolve()
            }
          },
          trigger: 'blur'
        },
        {
          validator: (rule, value) => {
            console.log('validator', rule, value)
            if (form.model.checkPassword !== '') {
              form.emitRegister?.validate?.('checkPassword')
            }
            return Promise.resolve()
          },
          trigger: 'blur'
        }
      ]
    },
    {
      type: 'default',
      label: '确认密码',
      dataField: 'checkPassword',
      columnSpan: 1,
      rules: [
        { required: true, message: '不能为空' },
        { min: 9, max: 64, message: '至少9位至多64位字符' },
        {
          validator: (rule, value) => {
            console.log('validator', rule, value)
            if (value !== form.model.newPassword) {
              return Promise.reject('两次输入密码不一致!')
            } else {
              return Promise.resolve()
            }
          },
          trigger: 'blur'
        }
      ]
    }
  ]
})

const handleSave = async ({ command }) => {
  console.log('handleSave', form.model)
  command.loading = true
  try {
    await form.emitRegister?.validate?.()
    await modifyPassword({
      originalPassword: form.model.oldPassword,
      newPassword: form.model.newPassword
    })
    await message.success('保存成功', 1)
    form.emitRegister?.resetFields?.()
  } finally {
    command.loading = false
  }
}

const handleReset = () => {
  console.log('handleReset')
  form.emitRegister?.resetFields?.()
}

const form = reactive<CommonForm>({
  loading: false,
  operateType: 'add',
  model: {
    id: -1,
    oldPassword: undefined,
    newPassword: undefined,
    checkPassword: undefined
  },
  fields,
  rowFieldsCount: 1,
  commands: [
    {
      text: '重置',
      command: 'handleReset'
    },
    {
      text: '确定',
      command: 'handleSave',
      loading: false,
      elementProps: {
        type: 'primary',
        style: {
          fontWeight: 'bold'
        }
      }
    }
  ],
  elementProps: {
    labelCol: { style: { width: '80px' } },
    wrapperCol: { style: { flex: 1 } },
    style: {
      margin: '0 12px 12px 12px',
      width: '360px'
    }
  },
  extendProps: {
    contentStyle: { overflow: 'auto', flex: 1, marginTop: '12px' },
    footerStyle: {
      display: 'block',
      padding: '12px 0 0 0'
    }
  },
  emitRegister: {
    handleSave,
    handleReset
  }
})
</script>

<style lang="scss" scoped>
.common-form-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
