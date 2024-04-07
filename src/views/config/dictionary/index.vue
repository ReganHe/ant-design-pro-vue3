<template>
  <div class="common-page">
    <div class="common-query-container">
      <ca-common-query v-bind="{ ...query, emitRegister }" />
    </div>
    <div class="common-table-container">
      <ca-common-table v-bind="{
        ...table,
        emitRegister,
        elementProps: { ...table.elementProps, onChange: onTableChange },
      }" />
    </div>
    <Drawer v-model:open="form.visible" :title="form.title" width="400px" placement="right"
      @after-open-change="onAfterOpenChange">
      <ca-common-form v-bind="form" />
    </Drawer>
    <Drawer v-model:open="dictItemForm.visible" :title="dictItemForm.title" width="800px" placement="right"
      @after-visible-change="onAfterDictItemFormVisibleChange">
      <ca-common-form v-bind="dictItemForm" />
    </Drawer>
  </div>
</template>

<script lang="ts" setup>
import { Drawer } from 'ant-design-vue';
import { reactive } from 'vue';
import { SelectItem } from '#/castor-antd';
import { resetForm, setFormValue } from '@/hooks/component/useModal';
import useCommonTable from './hooks/useCommonTable';
import useCommonQuery from './hooks/useCommonQuery';
import useCommonForm from './hooks/useCommonForm';
import { getTypes } from '@/api/auto/ApiDict';
import useDictItemForm from './hooks/useDictItemForm';

const optionsMap = reactive<Record<string, SelectItem[]>>({
  status: [
    {
      value: '0',
      label: '启用',
    },
    {
      value: '1',
      label: '禁用',
    },
  ],
  type: [
    {
      value: '0',
      label: '业务预置',
    },
    {
      value: '1',
      label: '系统预置',
    },
  ],
});

const query = useCommonQuery();
const table = useCommonTable(optionsMap);
const form = useCommonForm({ optionsMap });
const dictItemForm = useDictItemForm();

//#region query
const handleFilter = () => {
  console.log('handleFilter', query.model);
  (table.pagination || {}).current = 1;
  getList();
};

const handleReset = async () => {
  console.log('handleReset', query.model);
  await (emitRegister as any).resetFields();
  handleFilter();
};
//#endregion

//#region table
const getList = async () => {
  console.log('getList', table.pagination, query.model);
  table.loading = true;
  const res = await getTypes({
    typeKey: query.model.typeKey,
    pageNum: (table.pagination || {}).current || 1,
    pageSize: (table.pagination || {}).pageSize || 10,
  });
  table.dataSource = (res.list || []).map((r) => {
    return {
      ...r,
      type: r.operation === '1' ? '1' : '0',
    };
  });
  (table.pagination || {}).total = res.totalNum;
  table.loading = false;
};

const onTableChange = (newPagination, filters, sorter, extra) => {
  console.log('onTableChange', newPagination, filters, sorter, extra);
  (table.pagination || {}).current = newPagination.current;
  (table.pagination || {}).pageSize = newPagination.pageSize;
  getList();
};

const handleEdit = ({ index, row }) => {
  console.log('handleEdit', index, row);
  form.operateType = 'edit';
  form.visible = true;
  setFormValue(form.model, row);
};

const onAfterOpenChange = (visible) => {
  console.log('onAfterOpenChange', visible);
  if (visible === false) {
    resetForm({ form, callback: getList });
  }
};

const handleDictItemEdit = ({ row, index }) => {
  console.log('handleDictItemEdit', row, index);
  dictItemForm.operateType = 'edit';
  dictItemForm.visible = true;
  setFormValue(dictItemForm.model, row);
};

const onAfterDictItemFormVisibleChange = (visible) => {
  console.log('after-dict-item-form-visible-change', visible);
  if (visible === false) {
    resetForm({ form: dictItemForm, callback: getList });
  }
};
//#endregion

const emitRegister = {
  handleFilter,
  handleReset,
  handleDictItemEdit,
  handleEdit,
};

getList();
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
