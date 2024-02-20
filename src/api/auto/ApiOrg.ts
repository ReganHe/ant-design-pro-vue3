import * as base from './base';
import { Org } from './modal';

const s = 'ApiOrg.';

/**
 * 添加员工
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/add；
 */
export const addWorker = base.createRequest<Org.addWorker.Options, Org.addWorker.Returns['data']>(
  s + 'addWorker',
  (data) => ({ url: `/1.0/org_manage/worker/add`, method: 'POST', data })
);

/**
 * 按主键查询站点机构额外信息
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/get_org_extra_info/{id}；
 */
export const getOrgExtraInfoOne = base.createRequest<
  Org.getOrgExtraInfoOne.Options,
  Org.getOrgExtraInfoOne.Returns['data']
>(s + 'getOrgExtraInfoOne', ({ id, ...params }) => ({
  url: `/1.0/org_manage/org/get_org_extra_info/${id}`,
  method: 'GET',
  params,
}));

/**
 * 按主键查询站点机构信息
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/get_org_info/{id}；
 */
export const getOrgInfoOne = base.createRequest<
  Org.getOrgInfoOne.Options,
  Org.getOrgInfoOne.Returns['data']
>(s + 'getOrgInfoOne', ({ id, ...params }) => ({
  url: `/1.0/org_manage/org/get_org_info/${id}`,
  method: 'GET',
  params,
}));

/**
 * 站点机构分页查询
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/get_org_info_paged；
 */
export const getOrgInfoPaged = base.createRequest<
  Org.getOrgInfoPaged.Options,
  Org.getOrgInfoPaged.Returns['data']
>(s + 'getOrgInfoPaged', (params) => ({
  url: `/1.0/org_manage/org/get_org_info_paged`,
  method: 'GET',
  params,
}));

/**
 * 查询机构下员工列表
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/get_org_workers；
 */
export const getOrgWorkers = base.createRequest<
  Org.getOrgWorkers.Options,
  Org.getOrgWorkers.Returns['data']
>(s + 'getOrgWorkers', (params) => ({
  url: `/1.0/org_manage/worker/get_org_workers`,
  method: 'GET',
  params,
}));

/**
 * 查询用户站点列表
 *
 * **TAG:** 机构管理； &nbsp;&nbsp; **PATH:** /1.0/org/get_station_list；
 */
export const getStationList = base.createRequest<
  Org.getStationList.Options,
  Org.getStationList.Returns['data']
>(s + 'getStationList', (params) => ({ url: `/1.0/org/get_station_list`, method: 'GET', params }));

/**
 * 查询员工资质证书
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/attachment/get_list；
 */
export const getWorkerAttachmentList = base.createRequest<
  Org.getWorkerAttachmentList.Options,
  Org.getWorkerAttachmentList.Returns['data']
>(s + 'getWorkerAttachmentList', (params) => ({
  url: `/1.0/org_manage/worker/attachment/get_list`,
  method: 'GET',
  params,
}));

/**
 * 根据主键查询员工信息
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/get/{id}；
 */
export const getWorkerOne = base.createRequest<
  Org.getWorkerOne.Options,
  Org.getWorkerOne.Returns['data']
>(s + 'getWorkerOne', ({ id, ...params }) => ({
  url: `/1.0/org_manage/worker/get/${id}`,
  method: 'GET',
  params,
}));

/**
 * 查询员工列表
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/get_list；
 */
export const getWorkersList = base.createRequest<
  Org.getWorkersList.Options,
  Org.getWorkersList.Returns['data']
>(s + 'getWorkersList', (params) => ({
  url: `/1.0/org_manage/worker/get_list`,
  method: 'GET',
  params,
}));

/**
 * 修改站点基本信息
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/modify；
 */
export const modifyOrg = base.createRequest<Org.modifyOrg.Options, Org.modifyOrg.Returns['data']>(
  s + 'modifyOrg',
  (data) => ({ url: `/1.0/org_manage/org/modify`, method: 'PUT', data })
);

/**
 * 修改站点额外信息
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/org/modify_extra；
 */
export const modifyOrgExtraInfo = base.createRequest<
  Org.modifyOrgExtraInfo.Options,
  Org.modifyOrgExtraInfo.Returns['data']
>(s + 'modifyOrgExtraInfo', (data) => ({
  url: `/1.0/org_manage/org/modify_extra`,
  method: 'PUT',
  data,
}));

/**
 * 修改员工信息
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/modify；
 */
export const modifyWorker = base.createRequest<
  Org.modifyWorker.Options,
  Org.modifyWorker.Returns['data']
>(s + 'modifyWorker', (data) => ({ url: `/1.0/org_manage/worker/modify`, method: 'PUT', data }));

/**
 * 批量修改员工资质证书
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/attachment/modify_batch；
 */
export const modifyWorkerAttachmentBatch = base.createRequest<
  Org.modifyWorkerAttachmentBatch.Options,
  Org.modifyWorkerAttachmentBatch.Returns['data']
>(s + 'modifyWorkerAttachmentBatch', (data) => ({
  url: `/1.0/org_manage/worker/attachment/modify_batch`,
  method: 'PUT',
  data,
}));

/**
 * 删除员工
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/remove/{id}；
 */
export const removeWorker = base.createRequest<
  Org.removeWorker.Options,
  Org.removeWorker.Returns['data']
>(s + 'removeWorker', ({ id, ...params }) => ({
  url: `/1.0/org_manage/worker/remove/${id}`,
  method: 'DELETE',
  params,
}));

/**
 * 删除员工资质文件
 *
 * **TAG:** 站点管理服务； &nbsp;&nbsp; **PATH:** /1.0/org_manage/worker/attachment/remove/{id}；
 */
export const removeWorkerAttachment = base.createRequest<
  Org.removeWorkerAttachment.Options,
  Org.removeWorkerAttachment.Returns['data']
>(s + 'removeWorkerAttachment', ({ id, ...params }) => ({
  url: `/1.0/org_manage/worker/attachment/remove/${id}`,
  method: 'DELETE',
  params,
}));
