import * as base from './base'
import {Sg} from './modal'

const s = 'ApiSg.'

/**
 * 获取日结信息
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/get_day_end；
 */
export const dayEnd = base.createRequest<Sg.dayEnd.Options, Sg.dayEnd.Returns['data']>(s + 'dayEnd', (params) => ({url: `/1.0/sg/get_day_end`, method: 'GET', params }))


/**
 * 主键查询交接班记录
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/get_one；
 */
export const getOne = base.createRequest<Sg.getOne.Options, Sg.getOne.Returns['data']>(s + 'getOne', (params) => ({url: `/1.0/sg/get_one`, method: 'GET', params }))


/**
 * 分页查询交接班记录
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/get_paged；
 */
export const getPaged = base.createRequest<Sg.getPaged.Options, Sg.getPaged.Returns['data']>(s + 'getPaged', (params) => ({url: `/1.0/sg/get_paged`, method: 'GET', params }))


/**
 * 刷新本班情况
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/get_sales_info；
 */
export const getSecurityGroupsInfo = base.createRequest<Sg.getSecurityGroupsInfo.Options, Sg.getSecurityGroupsInfo.Returns['data']>(s + 'getSecurityGroupsInfo', (params) => ({url: `/1.0/sg/get_sales_info`, method: 'GET', params }))


/**
 * 获取交接班时硬件上传数据
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/get_shifts_data；
 */
export const getShiftsDataInfo = base.createRequest<Sg.getShiftsDataInfo.Options, Sg.getShiftsDataInfo.Returns['data']>(s + 'getShiftsDataInfo', (params) => ({url: `/1.0/sg/get_shifts_data`, method: 'GET', params }))


/**
 * 持久化交接班
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/persist；
 */
export const persist = base.createRequest<Sg.persist.Options, Sg.persist.Returns['data']>(s + 'persist', (data) => ({url: `/1.0/sg/persist`, method: 'PUT', data }))


/**
 * 持久化交接班（多槽罐）
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/persist_multiple_vessel；
 */
export const persistMultipleVessel = base.createRequest<Sg.persistMultipleVessel.Options, Sg.persistMultipleVessel.Returns['data']>(s + 'persistMultipleVessel', (data) => ({url: `/1.0/sg/persist_multiple_vessel`, method: 'PUT', data }))


/**
 * 删除交接班记录
 *
 * **TAG:** 交接班服务； &nbsp;&nbsp; **PATH:** /1.0/sg/remove/{id}；
 */
export const remove = base.createRequest<Sg.remove.Options, Sg.remove.Returns['data']>(s + 'remove', ({ id, ...params}) => ({url: `/1.0/sg/remove/${id}`, method: 'DELETE', params }))

