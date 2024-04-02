<template>
  <div class="dic-item">
    <ca-common-table v-bind="{ ...table, emitRegister }" />
    <Modal v-model:open="form.visible" :title="form.title" width="400px" :footer="null"
      :after-close="() => resetForm({ form, callback: getList })">
      <ca-common-form v-bind="form" />
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { SelectItem } from '#/castor-antd';
import { getValues, removeValue } from '@/api/auto/ApiDict';
import useCommonTable from './hooks/useCommonTable';
import useCommonForm from './hooks/useCommonForm';
import { resetForm, setFormValue } from '@/hooks/component/useModal';
import { message, Modal } from 'ant-design-vue';

const props = defineProps({
  model: {
    type: Object,
    default: () => { },
  },
  operateType: {
    type: String,
    default: 'add',
  },
});
const emits = defineEmits(['update:component-data']);

const optionsMap: { [key: string]: Array<SelectItem> } = {
  status: [
    {
      label: '启用',
      value: '0',
    },
    {
      label: '禁用',
      value: '1',
    },
  ],
  type: [
    {
      value: '0',
      label: '自定义',
    },
    {
      value: '1',
      label: '系统预置',
    },
  ],
};

const table = useCommonTable({ optionsMap, props });
const form = useCommonForm({ optionsMap });

//#region table
const getList = async () => {
  console.log('CustomTable getList', props.model.id);
  table.loading = true;
  const res = await getValues({
    typeId: props.model.id,
    pageNum: (table.pagination || {}).current || 1,
    pageSize: (table.pagination || {}).pageSize || 10,
  });
  console.log('getValues', res);
  table.dataSource = (res.list || []).map((r) => {
    return {
      ...r,
      type: r.operation === '1' ? '1' : '0',
    };
  });
  (table.pagination || {}).total = res.totalNum;
  emits('update:component-data', table.dataSource);
  table.loading = false;
};

const handleAdd = () => {
  console.log('handleAdd');
  form.operateType = 'add';
  form.visible = true;
  setFormValue(form.model, { typeId: props.model.id });
};

const handleEdit = ({ index, row }) => {
  console.log('handleEdit', index, row);
  form.operateType = 'edit';
  form.visible = true;
  setFormValue(form.model, { ...row, typeId: props.model.id });
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
      await removeValue({ id: row.id });
      message.success('操作成功!', 1, getList);
    },
  });
};
//#endregion

const emitRegister = {
  handleEdit,
  handleDelete,
  handleAdd,
};

watch(
  () => props.model.id,
  (newVal, oldVal) => {
    console.log(`watch props.model.id: ${oldVal}->${newVal}`);
    if (newVal > 0) {
      getList();
    }
  }
);
</script>
