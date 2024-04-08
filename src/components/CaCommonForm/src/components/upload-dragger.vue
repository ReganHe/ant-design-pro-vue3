<template>
  <UploadDragger name="uploadFile" :class="{
    'custom-upload':
      operateType === 'view' || (disableValidator && disableValidator({ model, operateType })),
  }" v-model:file-list="model[dataField]" :action="uploadUrl" :headers="headers" :before-upload="handleBeforeUpload"
    @change="handleChange" @remove="handleRemove" @download="handleDownload" v-bind="elementProps" :disabled="operateType === 'view' || (disableValidator && disableValidator({ model, operateType }))
      " :style="{ width: '100%', ...elementProps.style }">
    <span v-if="(operateType === 'view' ||
      (disableValidator && disableValidator({ model, operateType }))) &&
      model[dataField] &&
      model[dataField].length === 0
      " class="float-left" :style="{ color: elementProps.style && elementProps.style.color }">暂无附件</span>
    <div v-if="!(operateType === 'view' || (disableValidator && disableValidator({ model, operateType })))
      " class="flex mx-4 items-center">
      <p class="ant-upload-drag-icon" style="margin-bottom: 0">
        <inbox-outlined />
      </p>
      <div class="pl-2">
        <p class="ant-upload-text text-left" style="font-size: 14px; margin: 0">点击或将文件拖拽到这里上传</p>
        <p class="ant-upload-hint text-left" style="font-size: 14px">
          {{ extendProps.tips }}
        </p>
      </div>
    </div>
    <template #itemRender="{ file, actions }">
      <div v-loading="file.status === 'uploading'" class="mt-2 p-1 flex justify-between items-center file-item">
        <span :style="file.status === 'error' ? 'color: red' : ''">{{ file.name }}</span>
        <div>
          <Button v-if="file.id" type="link" @click="actions.download">下载</Button>
          <Button v-if="!(
            operateType === 'view' ||
            (disableValidator && disableValidator({ model, operateType }))
          )
            " type="link" @click="actions.remove" danger>删除</Button>
        </div>
      </div>
      <Progress v-if="file.status === 'uploading'" style="width: calc(100% - 24px)"
        :percent="parseFloat(file?.percent.toFixed(2))" size="small" :strokeWidth="1" />
    </template>
  </UploadDragger>
</template>
<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { Button, UploadDragger, Upload, Progress } from 'ant-design-vue';
import type { UploadChangeParam, UploadFile } from 'ant-design-vue';
import { InboxOutlined } from '@ant-design/icons-vue';

import { BlobResp } from '#/axios';
import { FormFieldExtendProps } from '#/castor-antd';
import { getAppEnvConfig } from '@/utils/env';
import { downloadByData } from '@/utils/download';
import { useUserStore } from '@/store/modules/user';
import { useMessage } from '@/hooks/web/useMessage';
import * as attachmentService from '@/api/auto/ApiAttachment'

const props = defineProps({
  operateType: {
    type: String,
    default: 'add',
  },
  model: {
    type: Object,
    default: () => { },
  },
  disableValidator: {
    type: Function,
    default: undefined,
  },
  elementProps: {
    type: Object,
    default: () => { },
  },
  extendProps: {
    type: Object as PropType<FormFieldExtendProps>,
    default: () => { },
  },
  dataField: {
    type: String,
    default: '',
  },
});
const { createMessage: msg, createConfirm: confirm } = useMessage();
const model = computed(() => props.model);
//#region file-upload

const { VITE_GLOB_API_URL } = getAppEnvConfig();
const uploadUrl = VITE_GLOB_API_URL + '/1.0/attachment/upload_file';
const userStore = useUserStore();
const headers: any = {
  authorization: userStore.token,
};

const handleBeforeUpload = (file) => {
  // 文件上传上限设置
  const size = file.size / 1024 / 1024;
  if (size > 100) {
    msg.warning('文件大小超过上限，请重新选择！');
    return Upload.LIST_IGNORE;
  } else {
    return true;
  }
};

const handleChange = (info: UploadChangeParam) => {
  const { file } = info;
  if (file.response && file.status !== 'removed') {
    if (file.response.status === -40000) {
      msg.error('文件超过大小限制，请重新上传');
      model.value[props.dataField] = model.value[props.dataField].filter(
        (item: UploadFile) => item.uid !== file.uid
      );
    } else if (file.response.status === 0) {
      msg.success('文件上传成功！');
      file.fileName = file.name;
      file.url = file.response.data;
    }
  }
};

const handleRemove = (file) => {
  return new Promise<any>((resolve) => {
    if (file.id) {
      confirm({
        iconType: 'warning',
        title: '提示',
        content: '是否确认删除此附件？',
        onOk: async () => {
          attachmentService.removeAttachment(file.id).then(() => {
            msg.success('附件删除成功！');
            model.value[props.dataField] = model.value[props.dataField].filter(
              (item: UploadFile) => item.uid !== file.uid
            );
            resolve(true);
          });
        },
        onCancel: () => {
          msg.info('已取消删除');
          resolve(false);
        },
      });
    } else {
      resolve(true);
      msg.success('附件删除成功！');
    }
  });
};

const handleDownload = (file) => {
  const key = 'down';
  msg.loading({ content: '文件下载中，请稍后...', key, duration: 0 });
  attachmentService.downloadAttachment(file.id).then((res: BlobResp) => {
    msg.success({ content: '下载已准备好！', key });
    downloadByData(res, file.fileName || file.name, res.type);
  });
};
//#endregion
</script>

<style lang="scss" scoped>
:deep(.custom-upload) {
  background: transparent !important;
  border: none !important;

  .ant-upload-btn {
    padding: 0 !important;
  }
}

.file-item {
  background-color: #f9fafd;
  border-radius: 4px;
}

.file-item:hover {
  background-color: #f5f6fc;
}
</style>
