import { defHttp } from '@/utils/http/axios';
import {
  dicItem,
  attachmentItem,
  attachmentQuery,
  attachmentAddItem,
  stationByUserItem,
  AttachmentTagItem,
} from './model';

enum Api {
  dicUrl = '/1.0/dict/value/get_list_by_type_keys',
  companyUrl = '/1.0/mu/get_condition',
  attachmentUrl = '/1.0/attachment/get_station_attachments',
  addAttachmentsUrl = '/1.0/attachment/add_attachment',
  delAttachmentUrl = '/1.0/attachment/remove_attachment/',
  downAttachmentUrl = '/1.0/attachment/download_attachment',
  stationListUrl = '/1.0/org/get_station_list',
  getStationByUser = '/1.0/user/get_user_one_detail/',
  downTagAttachment = '/1.0/attachment/download_tag',
  exportWo = '/1.0/wo/export_excel',
  exportSec = '/1.0/sec/export_excel',
  exportSc = '/1.0/sc/export_excel',
  exportSale = '/1.0/sale/export_excel',
  exportPSI = '/1.0/report/export_excel',
}

/**
 * 获取字典数据
 */
export function getDicList(typeKeyList: Array<String>) {
  return defHttp.get<dicItem[]>({
    url: Api.dicUrl,
    params: {
      typeKeyList: typeKeyList,
    },
  });
}

/**
 * 条件查询厂家/单位
 * @name 厂家/单位名称
 * @type 厂家/单位类型  1-生产厂家 2-检验单位 3-维护保养单位 4-设计单位 5-安装单位
 */
export function getCompanyList(params) {
  return defHttp.get<any>({
    url: Api.companyUrl,
    params,
  });
}
/**
 * 分页查询站点附件列表
 */
export function getAttachments(params: attachmentQuery) {
  return defHttp.get<attachmentItem[]>({
    url: Api.attachmentUrl,
    params,
  });
}
/**
 * 附件批量提交
 */
export function addAttachments(data: attachmentAddItem) {
  return defHttp.post<attachmentItem[]>({
    url: Api.addAttachmentsUrl,
    data,
  });
}
/**
 * 附件删除
 */
export function removeAttachment(id: Number) {
  return defHttp.delete<attachmentItem[]>({
    url: Api.delAttachmentUrl + id,
  });
}
/**
 * 附件下载
 */
export function downAttachments(id: Number) {
  return defHttp.get<Blob>({
    url: Api.downAttachmentUrl,
    params: {
      id: id,
    },
    responseType: 'blob',
  });
}
/**
 * 获取当前用户站点
 */
export function getStationList(params?) {
  return defHttp.get<any>({
    url: Api.stationListUrl,
    params,
  });
}
/**
 * 根据userId查询用户机构以及机构下的站点
 */
export function getStationByUser(userId: number) {
  return defHttp.get<stationByUserItem>({
    url: Api.getStationByUser + userId,
  });
}
/** 附件打包下载 */
export function downTagAttachments(params: AttachmentTagItem) {
  return defHttp.get<Blob>({
    url: Api.downTagAttachment,
    params,
    responseType: 'blob',
  });
}
/**
 * 维修报告导出
 */
export function exportExcelWo(params) {
  return defHttp.get<Blob>({
    url: Api.exportWo,
    params,
    responseType: 'blob',
  });
}
/**
 * 特种设备检查导出
 */
export function exportExcelSec(params) {
  return defHttp.get<Blob>({
    url: Api.exportSec,
    params,
    responseType: 'blob',
  });
}
/**
 * 安全检查导出
 */
export function exportExcelSc(params) {
  return defHttp.get<Blob>({
    url: Api.exportSc,
    params,
    responseType: 'blob',
  });
}
/**
 * 年度销售日报表导出
 */
export function exportExcelSale(params) {
  return defHttp.get<Blob>({
    url: Api.exportSale,
    params,
    responseType: 'blob',
  });
}

/**
 * 站点进销存报表导出
 */
export function exportExcelPSI(params) {
  return defHttp.get<Blob>({
    url: Api.exportPSI,
    params,
    responseType: 'blob',
  });
}
