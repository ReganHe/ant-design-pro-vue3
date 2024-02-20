import * as base from './base';
import { GwsApplicationAdmin } from './modal';

const s = 'ApiGwsApplicationAdmin.';

/**
 * 新增应用管理员
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/add；
 */
export const addUser = base.createRequest<
  GwsApplicationAdmin.addUser.Options,
  GwsApplicationAdmin.addUser.Returns['data']
>(s + 'addUser', (data) => ({ url: `/mgr/application_admin/add`, method: 'POST', data }));

/**
 * 获取单个应用管理员信息
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/get_one/{id}；
 */
export const findOneUser = base.createRequest<
  GwsApplicationAdmin.findOneUser.Options,
  GwsApplicationAdmin.findOneUser.Returns['data']
>(s + 'findOneUser', ({ id, ...params }) => ({
  url: `/mgr/application_admin/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 分页获取应用管理员列表
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/get_list_paged；
 */
export const findUsersPaged = base.createRequest<
  GwsApplicationAdmin.findUsersPaged.Options,
  GwsApplicationAdmin.findUsersPaged.Returns['data']
>(s + 'findUsersPaged', (params) => ({
  url: `/mgr/application_admin/get_list_paged`,
  method: 'GET',
  params,
}));

/**
 * 修改应用管理员
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/modify；
 */
export const modifyUser = base.createRequest<
  GwsApplicationAdmin.modifyUser.Options,
  GwsApplicationAdmin.modifyUser.Returns['data']
>(s + 'modifyUser', (data) => ({ url: `/mgr/application_admin/modify`, method: 'PUT', data }));

/**
 * 删除应用管理员
 *
 * **TAG:** 10.应用管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_admin/remove/{id}；
 */
export const removeUser = base.createRequest<
  GwsApplicationAdmin.removeUser.Options,
  GwsApplicationAdmin.removeUser.Returns['data']
>(s + 'removeUser', ({ id, ...params }) => ({
  url: `/mgr/application_admin/remove/${id}`,
  method: 'DELETE',
  params,
}));
