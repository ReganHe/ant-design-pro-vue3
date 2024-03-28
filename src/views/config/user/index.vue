<template>
  <div class="config-user">
    <div class="config-user-tree">
      <OrgTree :companyInfo="pageModel.companyInfo" @select="handleOrgSelect" />
    </div>
    <div class="config-user-list">
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
    </div>
    <Modal v-model:open="form.visible" :title="form.title" width="500px" :footer="null"
      :after-close="() => resetForm({ form, callback: getList })">
      <ca-common-form v-bind="form" />
    </Modal>
    <Modal v-model:open="resetPwdForm.visible" :title="resetPwdForm.title" width="500px" :footer="null"
      :after-close="() => resetForm({ form: resetPwdForm, callback: null })">
      <ca-common-form v-bind="resetPwdForm" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { message, Modal } from 'ant-design-vue';
import { onBeforeMount, reactive } from 'vue';
import { SelectItem } from '#/castor-antd';
import { resetForm, setFormValue } from '@/hooks/component/useModal';
import useCommonTable from './hooks/useCommonTable';
import useCommonQuery from './hooks/useCommonQuery';
import useCommonForm from './hooks/useCommonForm';
import OrgTree from './components/OrgTree.vue';
import { getOrgs } from '@/api/auto/ApiGisc';
import { getUsersPaged, removeUser } from '@/api/auto/ApiUser';
import { findUserCenterApplication } from '@/api/auto/ApiGwsApplication';
import useResetPwdForm from './hooks/useResetPwdForm';
import { getLockedUserIdsByApplicationId, unlock } from '@/api/auto/ApiGwsUserInfo';
import { getAppEnvConfig } from '@/utils/env';

const optionsMap = reactive<Record<string, SelectItem[]>>({
  status: [
    {
      value: '0',
      label: '已启用',
    },
    {
      value: '1',
      label: '未启用',
    },
  ],
});

const pageModel = reactive({
  currentOrgId: undefined,
  currentOrgLevel: undefined,
  currentOrgPath: undefined,
  companyInfo: {} as any,
  roles: [] as any,
  devices: [] as any,
  lockedUserIds: [] as number[],
});

const query = useCommonQuery({ optionsMap });
const table = useCommonTable({ optionsMap, pageModel });
const form = useCommonForm();
const resetPwdForm = useResetPwdForm();

//#region basic
const getCompanyInfo = async () => {
  const companyRes = await getOrgs({
    levelId: 2,
  });
  pageModel.companyInfo = companyRes[0];
  pageModel.currentOrgId = pageModel.companyInfo.id;
  pageModel.currentOrgLevel = pageModel.companyInfo.level;
  pageModel.currentOrgPath = pageModel.companyInfo.path;
};

const getAppInfo = async () => {
  const apps = await findUserCenterApplication();
  console.log('getAppInfo', apps);
  const currentApp = apps.find((r) => r.applicationCode === 'pes');
  pageModel.roles = currentApp?.roles;
  pageModel.devices = currentApp?.devices;
};

const getLockedUsers = async () => {
  const { VITE_GLOB_APP_ID } = getAppEnvConfig();
  pageModel.lockedUserIds = await getLockedUserIdsByApplicationId({
    applicationId: parseInt(VITE_GLOB_APP_ID),
  });
};

//#endregion

//#region tree
const handleOrgSelect = (selectedNode) => {
  pageModel.currentOrgId = selectedNode.key;
  pageModel.currentOrgLevel = selectedNode.level;
  pageModel.currentOrgPath = selectedNode.path;
  getList();
};

//#endregion
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

//#region  table
const getList = async () => {
  console.log('getList', table.pagination, query.model);
  table.loading = true;
  const res = await getUsersPaged({
    orgId: pageModel.currentOrgId,
    queryKey: query.model.queryKey,
    status: query.model.status,
    pageNum: (table.pagination || {}).current ?? 1,
    pageSize: (table.pagination || {}).pageSize ?? 10,
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
  form.visible = true;
  setFormValue(form.model, {
    orgId: pageModel.currentOrgId,
    path: pageModel.currentOrgPath,
    roleIds: pageModel.roles
      .filter(
        (r) => r.code === (pageModel.currentOrgLevel === 'CP' ? 'company-admin' : 'site-admin')
      )
      .map((r) => r.id),
    deviceIds: pageModel.devices.map((r) => r.id),
  });
};

const handleEdit = ({ index, row }) => {
  console.log('handleEdit', index, row);
  form.operateType = 'edit';
  form.visible = true;
  setFormValue(form.model, {
    ...row,
    status: row.status === '0',
    orgId: pageModel.currentOrgId,
    path: pageModel.currentOrgPath,
    roleIds: pageModel.roles
      .filter(
        (r) => r.code === (pageModel.currentOrgLevel === 'CP' ? 'company-admin' : 'site-admin')
      )
      .map((r) => r.id),
    deviceIds: pageModel.devices.map((r) => r.id),
  });
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
      await removeUser({
        id: row.id,
      });
      message.success('删除成功!', 1, getList);
    },
  });
};

const handleResetPwd = ({ index, row }) => {
  console.log('handleResetPwd', index, row);
  resetPwdForm.operateType = 'add';
  resetPwdForm.visible = true;
  setFormValue(resetPwdForm.model, { id: row.userId });
};

const handleUnlock = async ({ index, row }) => {
  console.log('handleUnlock', index, row);
  await unlock({
    userId: row.userId,
  });
  message.success('操作成功!', 1, async () => {
    await getLockedUsers();
    getList();
  });
};

//#endregion
const emitRegister = {
  handleFilter,
  handleReset,
  handleAdd,
  handleEdit,
  handleDelete,
  handleResetPwd,
  handleUnlock,
};

onBeforeMount(async () => {
  await Promise.all([getCompanyInfo(), getAppInfo(), getLockedUsers()]);
  getList();
});
</script>
<style lang="scss" scoped>
.config-user {
  margin: 12px;
  height: calc(100% - 24px);
  display: flex;
  flex-direction: row;

  .config-user-tree {
    width: 200px;
    height: 100%;
    background: white;
    padding: 12px 18px 12px 6px;
  }

  .config-user-list {
    height: 100%;
    overflow: hidden;
    flex: 1;
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    .common-query-container {
      background: white;
      padding: 12px;
    }

    .common-table-container {
      flex: 1;
      background: white;
      margin-top: 12px;
      padding: 2px 12px 0 12px;
    }
  }
}
</style>
