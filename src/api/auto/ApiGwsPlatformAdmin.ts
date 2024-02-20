import * as base from './base';
import { GwsPlatformAdmin } from './modal';

const s = 'ApiGwsPlatformAdmin.';

/**
 * 新增平台管理员
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/add；
 */
export const addUser = base.createRequest<
  GwsPlatformAdmin.addUser.Options,
  GwsPlatformAdmin.addUser.Returns['data']
>(s + 'addUser', (data) => ({ url: `/mgr/platform_admin/add`, method: 'POST', data }));

/**
 * 获取单个平台管理员信息
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/get_one/{id}；
 */
export const findOneUser = base.createRequest<
  GwsPlatformAdmin.findOneUser.Options,
  GwsPlatformAdmin.findOneUser.Returns['data']
>(s + 'findOneUser', ({ id, ...params }) => ({
  url: `/mgr/platform_admin/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 分页获取平台管理员列表
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/get_list_paged；
 */
export const findUsersPaged = base.createRequest<
  GwsPlatformAdmin.findUsersPaged.Options,
  GwsPlatformAdmin.findUsersPaged.Returns['data']
>(s + 'findUsersPaged', (params) => ({
  url: `/mgr/platform_admin/get_list_paged`,
  method: 'GET',
  params,
}));

/**
 * 修改平台管理员
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/modify；
 */
export const modifyUser = base.createRequest<
  GwsPlatformAdmin.modifyUser.Options,
  GwsPlatformAdmin.modifyUser.Returns['data']
>(s + 'modifyUser', (data) => ({ url: `/mgr/platform_admin/modify`, method: 'PUT', data }));

/**
 * 删除平台管理员
 *
 * **TAG:** 09.平台管理员管理服务； &nbsp;&nbsp; **PATH:** /mgr/platform_admin/remove/{id}；
 */
export const removeUser = base.createRequest<
  GwsPlatformAdmin.removeUser.Options,
  GwsPlatformAdmin.removeUser.Returns['data']
>(s + 'removeUser', ({ id, ...params }) => ({
  url: `/mgr/platform_admin/remove/${id}`,
  method: 'DELETE',
  params,
}));
