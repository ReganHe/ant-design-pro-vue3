import * as base from './base';
import { Gisc } from './modal';

const s = 'ApiGisc.';

/**
 * 新增组织机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/add；
 */
export const addOrg = base.createRequest<Gisc.addOrg.Options, Gisc.addOrg.Returns['data']>(
  s + 'addOrg',
  (data) => ({ url: `/gisc/org/add`, method: 'POST', data })
);

/**
 * 权限查询机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/get_user_org；
 */
export const getOrgByUser = base.createRequest<
  Gisc.getOrgByUser.Options,
  Gisc.getOrgByUser.Returns['data']
>(s + 'getOrgByUser', (params) => ({ url: `/gisc/org/get_user_org`, method: 'GET', params }));

/**
 * 使用id查询组织机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/get_one/{id}；
 */
export const getOrgOne = base.createRequest<Gisc.getOrgOne.Options, Gisc.getOrgOne.Returns['data']>(
  s + 'getOrgOne',
  ({ id, ...params }) => ({ url: `/gisc/org/get_one/${id}`, method: 'GET', params })
);

/**
 * 查询组织机构树
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/get_list_tree；
 */
export const getOrgTree = base.createRequest<
  Gisc.getOrgTree.Options,
  Gisc.getOrgTree.Returns['data']
>(s + 'getOrgTree', (params) => ({ url: `/gisc/org/get_list_tree`, method: 'GET', params }));

/**
 * 查询组织机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/get_list；
 */
export const getOrgs = base.createRequest<Gisc.getOrgs.Options, Gisc.getOrgs.Returns['data']>(
  s + 'getOrgs',
  (params) => ({ url: `/gisc/org/get_list`, method: 'GET', params })
);

/**
 * 分页查询组织机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/get_list_paged；
 */
export const getOrgsPaged = base.createRequest<
  Gisc.getOrgsPaged.Options,
  Gisc.getOrgsPaged.Returns['data']
>(s + 'getOrgsPaged', (params) => ({ url: `/gisc/org/get_list_paged`, method: 'GET', params }));

/**
 * 修改组织机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/modify；
 */
export const modifyOrg = base.createRequest<Gisc.modifyOrg.Options, Gisc.modifyOrg.Returns['data']>(
  s + 'modifyOrg',
  (data) => ({ url: `/gisc/org/modify`, method: 'PUT', data })
);

/**
 * 删除组织机构
 *
 * **TAG:** 组织机构管理服务； &nbsp;&nbsp; **PATH:** /gisc/org/remove/{id}；
 */
export const removeOrg = base.createRequest<Gisc.removeOrg.Options, Gisc.removeOrg.Returns['data']>(
  s + 'removeOrg',
  ({ id, ...params }) => ({ url: `/gisc/org/remove/${id}`, method: 'DELETE', params })
);
