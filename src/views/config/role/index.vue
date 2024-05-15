<template>
  <div class="common-page">
    <div class="common-table-container">
      <ca-common-table
        v-bind="{
          ...table,
          emitRegister,
          elementProps: { ...table.elementProps, onChange: onTableChange }
        }"
      />
    </div>
    <Drawer v-model:open="form.visible" :title="form.title" width="400px" placement="right" @after-open-change="onAfterOpenChange">
      <ca-common-form v-bind="form" />
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
import { Drawer } from 'ant-design-vue'
import { reactive } from 'vue'
import { SelectItem } from '#/castor-antd'
import { resetForm, setFormValue } from '@/hooks/component/useModal'
import useCommonTable from './hooks/useCommonTable'
import useCommonForm from './hooks/useCommonForm'
import { findAllRoleRefsMenuPermApi, findRolesPaged } from '@/api/auto/ApiGwsRole'

const optionsMap = reactive<Record<string, SelectItem[]>>({
  type: [
    { value: '00', label: '系统预置' },
    { value: '01', label: '自定义' }
  ]
})

const table = useCommonTable(optionsMap)
const form = useCommonForm()

//#region  table
const getList = async () => {
  console.log('getList', table.pagination)
  table.loading = true
  const res = await findRolesPaged({
    page_num: (table.pagination || {}).current || 1,
    page_size: (table.pagination || {}).pageSize || 10
  })
  table.dataSource = res.list
  ;(table.pagination || {}).total = res.totalNum
  table.loading = false
}

const onTableChange = (newPagination, filters, sorter, extra) => {
  console.log('onTableChange', newPagination, filters, sorter, extra)
  ;(table.pagination || {}).current = newPagination.current
  ;(table.pagination || {}).pageSize = newPagination.pageSize
  getList()
}

const onAfterOpenChange = (visible) => {
  console.log('onAfterOpenChange', visible)
  if (visible === false) {
    resetForm({ form, callback: getList })
  }
}

const getRolePerms = async (roleId) => {
  const res = await findAllRoleRefsMenuPermApi({ id: roleId })
  return {
    routeList: res.menuVids ? res.menuVids : [],
    funcPointList: res.permVids ? res.permVids : []
  }
}

const handleSetPermission = async ({ index, row }) => {
  console.log('handleSetPermission', index, row)
  form.operateType = 'edit'
  form.visible = true
  const checkedPerms = await getRolePerms(row.id)
  setFormValue(form.model, {
    roleId: row.id,
    checkedPerms
  })
}
//#endregion

const emitRegister = {
  handleSetPermission
}

getList()
</script>
<style lang="scss" scoped>
.common-page {
  .common-query-container {
    background: white;
    margin-bottom: 12px;
    padding: 12px;
  }

  .common-table-container {
    background: white;
    padding: 12px;
  }
}
</style>
