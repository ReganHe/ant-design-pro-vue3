import * as base from './base';
import { GwsDevice } from './modal';

const s = 'ApiGwsDevice.';

/**
 * 新增设备
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/add；
 */
export const addDevice = base.createRequest<
  GwsDevice.addDevice.Options,
  GwsDevice.addDevice.Returns['data']
>(s + 'addDevice', (data) => ({ url: `/mgr/device/add`, method: 'POST', data }));

/**
 * 获取所有设备列表
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/get_list；
 */
export const findAllDevices = base.createRequest<
  GwsDevice.findAllDevices.Options,
  GwsDevice.findAllDevices.Returns['data']
>(s + 'findAllDevices', (params) => ({ url: `/mgr/device/get_list`, method: 'GET', params }));

/**
 * 获取单个设备信息
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/get_one/{id}；
 */
export const findOneDevice = base.createRequest<
  GwsDevice.findOneDevice.Options,
  GwsDevice.findOneDevice.Returns['data']
>(s + 'findOneDevice', ({ id, ...params }) => ({
  url: `/mgr/device/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 修改设备
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/modify；
 */
export const modifyDevice = base.createRequest<
  GwsDevice.modifyDevice.Options,
  GwsDevice.modifyDevice.Returns['data']
>(s + 'modifyDevice', (data) => ({ url: `/mgr/device/modify`, method: 'PUT', data }));

/**
 * 删除设备
 *
 * **TAG:** 12.设备管理服务； &nbsp;&nbsp; **PATH:** /mgr/device/remove/{id}；
 */
export const removeDevice = base.createRequest<
  GwsDevice.removeDevice.Options,
  GwsDevice.removeDevice.Returns['data']
>(s + 'removeDevice', ({ id, ...params }) => ({
  url: `/mgr/device/remove/${id}`,
  method: 'DELETE',
  params,
}));
