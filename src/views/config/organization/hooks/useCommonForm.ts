import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import { addOrg, modifyOrg } from '@/api/auto/ApiGisc'

export default function useCommonForm() {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'default',
        label: '站点名称',
        dataField: 'orgName',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }]
      },
      {
        type: 'default',
        label: '站点简称',
        dataField: 'orgShortName',
        columnSpan: 1,
        rules: [{ required: true, message: '不能为空' }]
      }
    ]
  })

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      if (form.model.id < 0) {
        await addOrg({
          orgName: form.model.orgName,
          orgShortName: form.model.orgShortName,
          parentId: form.model.parentId,
          levelId: 3
        })
      } else {
        await modifyOrg({
          id: form.model.id,
          orgName: form.model.orgName,
          orgShortName: form.model.orgShortName,
          parentId: form.model.parentId,
          levelId: 3
        })
      }
      await message.success('保存成功', 1)
      form.visible = false
    } finally {
      command.loading = false
    }
  }

  const handleCancel = async () => {
    console.log('handleCancel')
    form.visible = false
  }

  const form = reactive<CommonForm>({
    loading: false,
    visible: false,
    title: '站点信息',
    operateType: 'add',
    rowFieldsCount: 1,
    model: {
      id: -1,
      parentId: null,
      orgCode: '',
      orgName: '',
      orgShortName: ''
    },
    fields,
    commands: [
      {
        text: '取消',
        command: 'handleCancel',
        visibleValidator: ({ operateType }) => operateType !== 'view'
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
      labelCol: { style: { width: '100px' } },
      wrapperCol: { style: { flex: 1 } }
    },
    emitRegister: {
      handleSave,
      handleCancel
    }
  })

  return form
}
