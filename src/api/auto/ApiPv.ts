import * as base from './base'
import {Pv} from './modal'

const s = 'ApiPv.'

/**
 * 新增压力容器
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/add；
 */
export const add = base.createRequest<Pv.add.Options, Pv.add.Returns['data']>(s + 'add', (data) => ({url: `/1.0/pv/add`, method: 'POST', data }))


/**
 * 废弃压力容器
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/discard；
 */
export const discard = base.createRequest<Pv.discard.Options, Pv.discard.Returns['data']>(s + 'discard', (data) => ({url: `/1.0/pv/discard`, method: 'PUT', data }))


/**
 * 编辑压力容器
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/edit；
 */
export const edit = base.createRequest<Pv.edit.Options, Pv.edit.Returns['data']>(s + 'edit', (data) => ({url: `/1.0/pv/edit`, method: 'PUT', data }))


/**
 * 导出Excel
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/export_excel；
 */
export const exportExcel = base.createBlobRequest<Pv.exportExcel.Options>(s + 'exportExcel', (params) => ({url: `/1.0/pv/export_excel`, method: 'GET', params }))


/**
 * 查询站点或登陆用户站点下的压力容器
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_by_station；
 */
export const getByStation = base.createRequest<Pv.getByStation.Options, Pv.getByStation.Returns['data']>(s + 'getByStation', (params) => ({url: `/1.0/pv/get_by_station`, method: 'GET', params }))


/**
 * 查询站点或登陆用户站点下的储罐
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_by_type_station；
 */
export const getByTypeStation = base.createRequest<Pv.getByTypeStation.Options, Pv.getByTypeStation.Returns['data']>(s + 'getByTypeStation', (params) => ({url: `/1.0/pv/get_by_type_station`, method: 'GET', params }))


/**
 * 主键查询常规设备详情
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_one；
 */
export const getOne = base.createRequest<Pv.getOne.Options, Pv.getOne.Returns['data']>(s + 'getOne', (params) => ({url: `/1.0/pv/get_one`, method: 'GET', params }))


/**
 * 分页查询设备列表
 *
 * **TAG:** 压力容器服务； &nbsp;&nbsp; **PATH:** /1.0/pv/get_paged；
 */
export const getPaged = base.createRequest<Pv.getPaged.Options, Pv.getPaged.Returns['data']>(s + 'getPaged', (params) => ({url: `/1.0/pv/get_paged`, method: 'GET', params }))

