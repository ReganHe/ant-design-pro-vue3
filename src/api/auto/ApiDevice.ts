import * as base from './base'
import {Device} from './modal'

const s = 'ApiDevice.'

/**
 * 新增常规设备
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/add；
 */
export const add = base.createRequest<Device.add.Options, Device.add.Returns['data']>(s + 'add', (data) => ({url: `/1.0/device/add`, method: 'POST', data }))


/**
 * 编辑常规设备
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/edit；
 */
export const edit = base.createRequest<Device.edit.Options, Device.edit.Returns['data']>(s + 'edit', (data) => ({url: `/1.0/device/edit`, method: 'PUT', data }))


/**
 * 主键查询常规设备详情
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/get_one；
 */
export const getOne = base.createRequest<Device.getOne.Options, Device.getOne.Returns['data']>(s + 'getOne', (params) => ({url: `/1.0/device/get_one`, method: 'GET', params }))


/**
 * 分页查询设备列表
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/get_paged；
 */
export const getPaged = base.createRequest<Device.getPaged.Options, Device.getPaged.Returns['data']>(s + 'getPaged', (params) => ({url: `/1.0/device/get_paged`, method: 'GET', params }))


/**
 * 删除常规设备
 *
 * **TAG:** 常规设备服务； &nbsp;&nbsp; **PATH:** /1.0/device/remove/{id}；
 */
export const remove = base.createRequest<Device.remove.Options, Device.remove.Returns['data']>(s + 'remove', ({ id, ...params}) => ({url: `/1.0/device/remove/${id}`, method: 'DELETE', params }))

