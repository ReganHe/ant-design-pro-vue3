import { computed, reactive } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import { getOrgs, modifyOrg } from '@/api/auto/ApiGisc'
import { setFormValue } from '@/hooks/component/useModal'

export default function useCommonForm({ optionsMap }) {
  const fields = computed<Array<FormField>>(() => {
    return form.operateType === 'edit'
      ? [
          {
            type: 'groupTitle',
            label: '',
            dataField: '',
            columnSpan: 2,
            extendProps: {
              groupTitle: form.model.orgName,
              formItemStyle: {
                marginTop: '6px',
                marginBottom: '6px'
              }
            }
          },
          {
            type: 'text',
            label: '机构编号',
            dataField: 'orgCode',
            columnSpan: 1
          },
          {
            type: 'default',
            label: '机构名称',
            dataField: 'orgName',
            columnSpan: 1,
            rules: [{ required: true, message: '不能为空' }]
          },
          {
            type: 'default',
            label: '机构简称',
            dataField: 'orgShortName',
            columnSpan: 1,
            rules: [{ required: true, message: '不能为空' }]
          },
          {
            type: 'select',
            label: '机构类型',
            dataField: 'typeId',
            columnSpan: 1,
            rules: [{ required: true, message: '不能为空' }],
            elementProps: {
              options: optionsMap['orgType']
            }
          },
          {
            type: 'default',
            label: '所在地址',
            dataField: 'orgAdress',
            columnSpan: 1
          },
          {
            type: 'default',
            label: '备注',
            dataField: 'remark',
            columnSpan: 1
          }
        ]
      : [
          {
            type: 'groupTitle',
            label: '',
            dataField: '',
            columnSpan: 2,
            extendProps: {
              groupTitle: form.model.orgName,
              groupCommands: [
                {
                  text: '编辑',
                  command: 'handleEdit'
                }
              ],
              formItemStyle: {
                marginTop: '6px',
                marginBottom: '6px'
              }
            }
          },
          {
            type: 'text',
            label: '机构编号',
            dataField: 'orgCode',
            columnSpan: 1,
            extendProps: {
              formItemStyle: {
                marginBottom: 0
              }
            }
          },
          {
            type: 'text',
            label: '机构名称',
            dataField: 'orgName',
            columnSpan: 1,
            extendProps: {
              formItemStyle: {
                marginBottom: 0
              }
            }
          },
          {
            type: 'text',
            label: '机构简称',
            dataField: 'orgShortName',
            columnSpan: 1,
            extendProps: {
              formItemStyle: {
                marginBottom: 0
              }
            }
          },
          {
            type: 'text',
            label: '机构类型',
            dataField: 'typeName',
            columnSpan: 1,
            extendProps: {
              formItemStyle: {
                marginBottom: 0
              }
            }
          },
          {
            type: 'text',
            label: '所在地址',
            dataField: 'orgAdress',
            columnSpan: 1,
            extendProps: {
              formItemStyle: {
                marginBottom: '6px'
              }
            }
          },
          {
            type: 'text',
            label: '备注',
            dataField: 'remark',
            columnSpan: 1,
            extendProps: {
              formItemStyle: {
                marginBottom: '6px'
              }
            }
          }
        ]
  })

  const handleEdit = () => {
    console.log('handleEdit', form.model)
    form.operateType = 'edit'
  }

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      const { ...data } = form.model
      await modifyOrg({ ...data, levelId: 2 })
      await message.success('保存成功', 1)
    } finally {
      command.loading = false
      form.operateType = 'view'
    }
  }

  const handleCancel = async () => {
    console.log('handleCancel')
    const companyRes = await getOrgs({
      levelId: 2
    })
    const companyInfo = (companyRes || [])[0] || {}
    setFormValue(form.model, companyInfo)
    form.operateType = 'view'
  }

  const form = reactive<CommonForm>({
    loading: false,
    visible: true,
    title: '表单示例',
    operateType: 'view',
    model: {
      id: -1,
      orgCode: '',
      orgName: '',
      orgShortName: '',
      typeId: null,
      typeName: '',
      orgAdress: ''
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
      labelCol: { style: { width: '100px' } },
      wrapperCol: { style: { flex: 1 } }
    },
    emitRegister: {
      handleEdit,
      handleSave,
      handleCancel
    }
  })

  return form
}
