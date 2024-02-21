import * as base from './base';
import { VehicleManage } from './modal';

const s = 'ApiVehicleManage.';

/**
 * 新增外部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/external/add；
 */
export const addExternal = base.createRequest<
  VehicleManage.addExternal.Options,
  VehicleManage.addExternal.Returns['data']
>(s + 'addExternal', (data) => ({ url: `/1.0/vehicle_manage/external/add`, method: 'POST', data }));

/**
 * 新增内部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/internal/add；
 */
export const addInternal = base.createRequest<
  VehicleManage.addInternal.Options,
  VehicleManage.addInternal.Returns['data']
>(s + 'addInternal', (data) => ({ url: `/1.0/vehicle_manage/internal/add`, method: 'POST', data }));

/**
 * 编辑外部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/external/edit；
 */
export const editExternal = base.createRequest<
  VehicleManage.editExternal.Options,
  VehicleManage.editExternal.Returns['data']
>(s + 'editExternal', (data) => ({
  url: `/1.0/vehicle_manage/external/edit`,
  method: 'PUT',
  data,
}));

/**
 * 编辑内部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/internal/edit；
 */
export const editInternal = base.createRequest<
  VehicleManage.editInternal.Options,
  VehicleManage.editInternal.Returns['data']
>(s + 'editInternal', (data) => ({
  url: `/1.0/vehicle_manage/internal/edit`,
  method: 'PUT',
  data,
}));

/**
 * 主键查询外部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/external/get_one/{id}；
 */
export const getExternalOne = base.createRequest<
  VehicleManage.getExternalOne.Options,
  VehicleManage.getExternalOne.Returns['data']
>(s + 'getExternalOne', ({ id, ...params }) => ({
  url: `/1.0/vehicle_manage/external/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 分页查询外部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/external/get_paged；
 */
export const getExternalPaged = base.createRequest<
  VehicleManage.getExternalPaged.Options,
  VehicleManage.getExternalPaged.Returns['data']
>(s + 'getExternalPaged', (params) => ({
  url: `/1.0/vehicle_manage/external/get_paged`,
  method: 'GET',
  params,
}));

/**
 * 主键查询内部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/internal/get_one/{id}；
 */
export const getInternalOne = base.createRequest<
  VehicleManage.getInternalOne.Options,
  VehicleManage.getInternalOne.Returns['data']
>(s + 'getInternalOne', ({ id, ...params }) => ({
  url: `/1.0/vehicle_manage/internal/get_one/${id}`,
  method: 'GET',
  params,
}));

/**
 * 分页查询内部车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/internal/get_paged；
 */
export const getInternalPaged = base.createRequest<
  VehicleManage.getInternalPaged.Options,
  VehicleManage.getInternalPaged.Returns['data']
>(s + 'getInternalPaged', (params) => ({
  url: `/1.0/vehicle_manage/internal/get_paged`,
  method: 'GET',
  params,
}));

/**
 * 删除车辆信息记录
 *
 * **TAG:** 车辆信息管理； &nbsp;&nbsp; **PATH:** /1.0/vehicle_manage/remove/{id}；
 */
export const remove = base.createRequest<
  VehicleManage.remove.Options,
  VehicleManage.remove.Returns['data']
>(s + 'remove', ({ id, ...params }) => ({
  url: `/1.0/vehicle_manage/remove/${id}`,
  method: 'DELETE',
  params,
}));
