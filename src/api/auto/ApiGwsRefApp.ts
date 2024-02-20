import * as base from './base';
import { GwsRefApp } from './modal';

const s = 'ApiGwsRefApp.';

/**
 * 添加应用与应用管理员的关联
 *
 * **TAG:** 11.应用与应用管理员关联配置服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/ref_app/add；
 */
export const addRefApplication = base.createRequest<
  GwsRefApp.addRefApplication.Options,
  GwsRefApp.addRefApplication.Returns['data']
>(s + 'addRefApplication', (data) => ({
  url: `/mgr/application_admin/ref_app/add`,
  method: 'POST',
  data,
}));

/**
 * 分页获取与应用关联的应用管理员列表
 *
 * **TAG:** 11.应用与应用管理员关联配置服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/ref_app/get_list_paged；
 */
export const findRefApplicationsPaged = base.createRequest<
  GwsRefApp.findRefApplicationsPaged.Options,
  GwsRefApp.findRefApplicationsPaged.Returns['data']
>(s + 'findRefApplicationsPaged', (params) => ({
  url: `/mgr/application_admin/ref_app/get_list_paged`,
  method: 'GET',
  params,
}));

/**
 * 删除应用与应用管理员的关联
 *
 * **TAG:** 11.应用与应用管理员关联配置服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/ref_app/remove/{id}；
 */
export const removeRefApplication = base.createRequest<
  GwsRefApp.removeRefApplication.Options,
  GwsRefApp.removeRefApplication.Returns['data']
>(s + 'removeRefApplication', ({ id, ...params }) => ({
  url: `/mgr/application_admin/ref_app/remove/${id}`,
  method: 'DELETE',
  params,
}));
