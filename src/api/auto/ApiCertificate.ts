import * as base from './base';
import { Certificate } from './modal';

const s = 'ApiCertificate.';

/**
 * 新增人员证书信息
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/add；
 */
export const addCertificate = base.createRequest<
  Certificate.addCertificate.Options,
  Certificate.addCertificate.Returns['data']
>(s + 'addCertificate', (data) => ({ url: `/1.0/certificate_manage/add`, method: 'POST', data }));

/**
 * 编辑人员证书信息
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/edit；
 */
export const editCertificate = base.createRequest<
  Certificate.editCertificate.Options,
  Certificate.editCertificate.Returns['data']
>(s + 'editCertificate', (data) => ({ url: `/1.0/certificate_manage/edit`, method: 'PUT', data }));

/**
 * 查询人员证书信息
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/get_info_one/{id}；
 */
export const getInfoOne = base.createRequest<
  Certificate.getInfoOne.Options,
  Certificate.getInfoOne.Returns['data']
>(s + 'getInfoOne', ({ id, ...params }) => ({
  url: `/1.0/certificate_manage/get_info_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 分页查询证书汇总
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/get_info_paged；
 */
export const getInfoPaged = base.createRequest<
  Certificate.getInfoPaged.Options,
  Certificate.getInfoPaged.Returns['data']
>(s + 'getInfoPaged', ({ ...params }) => ({
  url: `/1.0/certificate_manage/get_info_paged`,
  method: 'GET',
  params,
}));

/**
 * 证书到期汇总
 *
 * **TAG:** 资质证书管理； &nbsp;&nbsp; **PATH:** /1.0/certificate_manage/get_maturity_summary；
 */
export const getMaturitySummary = base.createRequest<
  Certificate.getMaturitySummary.Options,
  Certificate.getMaturitySummary.Returns['data']
>(s + 'getMaturitySummary', ({ ...params }) => ({
  url: `/1.0/certificate_manage/get_maturity_summary`,
  method: 'GET',
  params,
}));
