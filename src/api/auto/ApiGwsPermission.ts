import * as base from './base';
import { GwsPermission } from './modal';

const s = 'ApiGwsPermission.';

/**
 * 新增功能点
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/add；
 */
export const addPerm = base.createRequest<
  GwsPermission.addPerm.Options,
  GwsPermission.addPerm.Returns['data']
>(s + 'addPerm', (data) => ({ url: `/mgr/perm/add`, method: 'POST', data }));

/**
 * 获取单个功能点信息
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/get_one/{id}；
 */
export const findOnePerm = base.createRequest<
  GwsPermission.findOnePerm.Options,
  GwsPermission.findOnePerm.Returns['data']
>(s + 'findOnePerm', ({ id, ...params }) => ({
  url: `/mgr/perm/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 分页获取功能点（列表形式）
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/get_list_paged；
 */
export const findPermsPaged = base.createRequest<
  GwsPermission.findPermsPaged.Options,
  GwsPermission.findPermsPaged.Returns['data']
>(s + 'findPermsPaged', (params) => ({ url: `/mgr/perm/get_list_paged`, method: 'GET', params }));

/**
 * 获取所有功能点（树形式）
 *
 * 将功能点以设备分组的静态树形式展现
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/get_as_tree；
 */
export const findStaticMenu = base.createNoParamsRequest<
  GwsPermission.findStaticMenu.Returns['data']
>(s + 'findStaticMenu', () => ({ url: `/mgr/perm/get_as_tree`, method: 'GET' }));

/**
 * 修改功能点
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/modify；
 */
export const modifyPerm = base.createRequest<
  GwsPermission.modifyPerm.Options,
  GwsPermission.modifyPerm.Returns['data']
>(s + 'modifyPerm', (data) => ({ url: `/mgr/perm/modify`, method: 'PUT', data }));

/**
 * 删除功能点
 *
 * **TAG:** 06.功能点管理服务； &nbsp;&nbsp; **PATH:** /mgr/perm/remove/{id}；
 */
export const removePerm = base.createRequest<
  GwsPermission.removePerm.Options,
  GwsPermission.removePerm.Returns['data']
>(s + 'removePerm', ({ id, ...params }) => ({
  url: `/mgr/perm/remove/${id}`,
  method: 'DELETE',
  params,
}));
