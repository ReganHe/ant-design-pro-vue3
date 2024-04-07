<template>
  <div class="common-page">
    <div class="company-form-container">
      <ca-common-form v-bind="companyForm" />
    </div>
    <div class="common-table-container">
      <ca-common-table v-bind="{
        ...table,
        emitRegister,
        elementProps: { ...table.elementProps, onChange: onTableChange },
      }" />
    </div>
    <Modal v-model:open="form.visible" :title="form.title" width="400px" :footer="null"
      :after-close="() => resetForm({ form, callback: getList })">
      <ca-common-form v-bind="form" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { message, Modal } from 'ant-design-vue';
import { onBeforeMount, reactive, ref } from 'vue';
import { SelectItem } from '#/castor-antd';
import { resetForm, setFormValue } from '@/hooks/component/useModal';
import useCommonTable from './hooks/useCommonTable';
import useCommonForm from './hooks/useCommonForm';
import useCompanyForm from './hooks/useCompanyForm';
import { getOrgs, getOrgsPaged, removeOrg } from '@/api/auto/ApiGisc';
import { getValuesByKey } from '@/api/auto/ApiDict';

const optionsMap = reactive<Record<string, SelectItem[]>>({
  orgType: [],
});

const companyForm = useCompanyForm({ optionsMap });
const table = useCommonTable();
const form = useCommonForm();

//#region  basic
const getBasic = async () => {
  const res = await getValuesByKey({
    typeKey: 'OrgType',
  });
  optionsMap['orgType'] = res.map((r) => {
    return {
      value: r.id,
      label: r.dicValue,
    };
  });
};
//#endregion

//#region  table
const getList = async () => {
  console.log('getList', table.pagination);
  table.loading = true;
  const res = await getOrgsPaged({
    parentId: companyId.value,
    pageNum: (table.pagination || {}).current || 1,
    pageSize: (table.pagination || {}).pageSize || 10,
  });
  table.dataSource = res.list;
  (table.pagination || {}).total = res.totalNum;
  table.loading = false;
};

const onTableChange = (newPagination, filters, sorter, extra) => {
  console.log('onTableChange', newPagination, filters, sorter, extra);
  (table.pagination || {}).current = newPagination.current;
  (table.pagination || {}).pageSize = newPagination.pageSize;
  getList();
};

const handleAdd = () => {
  console.log('handleAdd');
  form.operateType = 'add';
  form.model.parentId = companyId.value;
  form.title = `新建站点`;
  form.visible = true;
};

const handleEdit = ({ index, row }) => {
  console.log('handleEdit', index, row);
  form.operateType = 'edit';
  form.title = `编辑站点 - ${row.orgCode}`;
  form.visible = true;
  setFormValue(form.model, row);
};

const handleDelete = ({ index, row }) => {
  console.log('handleDelete', index, row);
  Modal.confirm({
    type: 'warning',
    title: '提示',
    content: '此操作将永久删除该数据, 是否继续?',
    okText: '确定',
    cancelText: '取消',
    onCancel: () => {
      message.info('已取消删除');
    },
    onOk: async () => {
      await removeOrg({
        id: row.id,
      });
      message.success('删除成功!', 1, getList);
    },
  });
};
//#endregion

const emitRegister = {
  handleEdit,
  handleDelete,
  handleAdd,
};

const companyId = ref(-1);

onBeforeMount(async () => {
  await getBasic();
  const companyRes = await getOrgs({
    levelId: 2,
  });
  const companyInfo = (companyRes || [])[0] || {};
  companyId.value = companyInfo.id;
  companyForm.operateType = 'view';
  setFormValue(companyForm.model, companyInfo);
  getList();
});
</script>
<style lang="scss" scoped>
.common-page {
  .company-form-container {
    background: white;
    margin-bottom: 12px;
  }

  .common-table-container {
    background: white;
    padding: 12px;
  }
}
</style>
