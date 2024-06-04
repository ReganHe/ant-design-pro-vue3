import { computed, reactive, shallowRef } from 'vue'
import { CommonForm, FormField } from '#/castor-antd'
import { message } from 'ant-design-vue'
import CustomPermTree from '../components/CustomPermTree.vue'
import { saveRoleRefsMenuPermApi } from '@/api/auto/ApiGwsRole'

export default function useCommonForm() {
  const fields = computed<Array<FormField>>(() => {
    return [
      {
        type: 'custom',
        label: '',
        dataField: 'checkedPerms',
        columnSpan: 2,
        extendProps: {
          componentKey: 'customPermTree'
        }
      }
    ]
  })

  const handleSave = async ({ command }) => {
    console.log('handleSave', form.model, form.emitRegister)
    command.loading = true
    try {
      await form.emitRegister?.validate?.()
      await saveRoleRefsMenuPermApi({
        roleId: (form.model as any).roleId,
        menuIds: (form.model.checkedPerms.routeList || []).map((item) => {
          return item.slice(0, -1)
        }),
        permIds: (form.model.checkedPerms.funcPointList || []).map((item) => {
          return item.slice(0, -1)
        })
      })
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
    title: '角色权限配置',
    operateType: 'add',
    model: {
      roleId: null,
      checkedPerms: {
        routeList: [] as string[],
        noFuncLeafRouteIds: [] as string[],
        funcPointList: [] as string[]
      }
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
      wrapperCol: { style: { flex: 1 } }
    },
    emitRegister: {
      handleSave,
      handleCancel
    },
    customComponents: {
      customPermTree: shallowRef(CustomPermTree)
    }
  })

  return form
}
