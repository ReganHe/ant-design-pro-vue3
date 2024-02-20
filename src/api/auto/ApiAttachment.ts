import * as base from './base';
import { Attachment } from './modal';

const s = 'ApiAttachment.';

/**
 * 附件批量提交
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/add_attachment；
 */
export const addAttachment = base.createRequest<
  Attachment.addAttachment.Options,
  Attachment.addAttachment.Returns['data']
>(s + 'addAttachment', (data) => ({ url: `/1.0/attachment/add_attachment`, method: 'POST', data }));

/**
 * 下载附件
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/download_attachment；
 */
export const downloadAttachment = base.createRequest<
  Attachment.downloadAttachment.Options,
  Attachment.downloadAttachment.Returns['data']
>(s + 'downloadAttachment', (params) => ({
  url: `/1.0/attachment/download_attachment`,
  method: 'GET',
  params,
}));

/**
 * 打包下载
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/download_tag；
 */
export const downloadTag = base.createRequest<
  Attachment.downloadTag.Options,
  Attachment.downloadTag.Returns['data']
>(s + 'downloadTag', (params) => ({ url: `/1.0/attachment/download_tag`, method: 'GET', params }));

/**
 * 更新附件
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/edit_attachment；
 */
export const editAttachment = base.createRequest<
  Attachment.editAttachment.Options,
  Attachment.editAttachment.Returns['data']
>(s + 'editAttachment', (data) => ({
  url: `/1.0/attachment/edit_attachment`,
  method: 'PUT',
  data,
}));

/**
 * 主键查询附件明细
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/get_attachment_by_id；
 */
export const getAttachmentById = base.createRequest<
  Attachment.getAttachmentById.Options,
  Attachment.getAttachmentById.Returns['data']
>(s + 'getAttachmentById', (params) => ({
  url: `/1.0/attachment/get_attachment_by_id`,
  method: 'GET',
  params,
}));

/**
 * 分页查询安全管理制度附件列表
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/get_safe_attachment_paged；
 */
export const getSafeAttachmentPaged = base.createRequest<
  Attachment.getSafeAttachmentPaged.Options,
  Attachment.getSafeAttachmentPaged.Returns['data']
>(s + 'getSafeAttachmentPaged', (params) => ({
  url: `/1.0/attachment/get_safe_attachment_paged`,
  method: 'GET',
  params,
}));

/**
 * 分页查询站点附件列表
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/get_station_attachments；
 */
export const getStationAttachments = base.createRequest<
  Attachment.getStationAttachments.Options,
  Attachment.getStationAttachments.Returns['data']
>(s + 'getStationAttachments', (params) => ({
  url: `/1.0/attachment/get_station_attachments`,
  method: 'GET',
  params,
}));

/**
 * 删除附件
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/remove_attachment/{id}；
 */
export const removeAttachment = base.createRequest<
  Attachment.removeAttachment.Options,
  Attachment.removeAttachment.Returns['data']
>(s + 'removeAttachment', ({ id, ...params }) => ({
  url: `/1.0/attachment/remove_attachment/${id}`,
  method: 'DELETE',
  params,
}));

/**
 * 上传附件
 *
 * **TAG:** 附件服务； &nbsp;&nbsp; **PATH:** /1.0/attachment/upload_file；
 */
export const uploadFile = base.createRequest<
  Attachment.uploadFile.Options,
  Attachment.uploadFile.Returns['data']
>(s + 'uploadFile', (data) => ({ url: `/1.0/attachment/upload_file`, method: 'POST', data }));
