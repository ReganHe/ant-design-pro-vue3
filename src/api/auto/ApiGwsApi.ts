import * as base from './base';
import { GwsApi } from './modal';

const s = 'ApiGwsApi.';

/**
 * 新增数据接口
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/add；
 */
export const addApi = base.createRequest<GwsApi.addApi.Options, GwsApi.addApi.Returns['data']>(
  s + 'addApi',
  (data) => ({ url: `/mgr/api/add`, method: 'POST', data })
);

/**
 * 获取所有设备列表
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/get_list_paged；
 */
export const findApisPaged = base.createRequest<
  GwsApi.findApisPaged.Options,
  GwsApi.findApisPaged.Returns['data']
>(s + 'findApisPaged', (params) => ({ url: `/mgr/api/get_list_paged`, method: 'GET', params }));

/**
 * 获取单个数据接口信息
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/get_one/{id}；
 */
export const findOneApi = base.createRequest<
  GwsApi.findOneApi.Options,
  GwsApi.findOneApi.Returns['data']
>(s + 'findOneApi', ({ id, ...params }) => ({
  url: `/mgr/api/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 修改数据接口
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/modify；
 */
export const modifyApi = base.createRequest<
  GwsApi.modifyApi.Options,
  GwsApi.modifyApi.Returns['data']
>(s + 'modifyApi', (data) => ({ url: `/mgr/api/modify`, method: 'PUT', data }));

/**
 * 删除数据接口
 *
 * **TAG:** 08.数据接口管理服务； &nbsp;&nbsp; **PATH:** /mgr/api/remove/{id}；
 */
export const removeApi = base.createRequest<
  GwsApi.removeApi.Options,
  GwsApi.removeApi.Returns['data']
>(s + 'removeApi', ({ id, ...params }) => ({
  url: `/mgr/api/remove/${id}`,
  method: 'DELETE',
  params,
}));
