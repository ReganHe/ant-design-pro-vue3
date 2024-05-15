import * as base from './base'
import { Sec } from './modal'

const s = 'ApiSec.'

/**
 * 导出Excel
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/export_excel；
 */
export const exportExcel = base.createBlobRequest<Sec.exportExcel.Options>(s + 'exportExcel', (params) => ({ url: `/1.0/sec/export_excel`, method: 'GET', params }))

/**
 * 查询特种设备检查单明细
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/get_one；
 */
export const getOne = base.createRequest<Sec.getOne.Options, Sec.getOne.Returns['data']>(s + 'getOne', (params) => ({ url: `/1.0/sec/get_one`, method: 'GET', params }))

/**
 * 分页查询特种设备检查
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/get_paged；
 */
export const getPaged = base.createRequest<Sec.getPaged.Options, Sec.getPaged.Returns['data']>(s + 'getPaged', (params) => ({ url: `/1.0/sec/get_paged`, method: 'GET', params }))

/**
 * 初始化特种设备检查单
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/init_data；
 */
export const initData = base.createRequest<Sec.initData.Options, Sec.initData.Returns['data']>(s + 'initData', (params) => ({ url: `/1.0/sec/init_data`, method: 'GET', params }))

/**
 * 持久化特种设备检查单
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/persist；
 */
export const persist = base.createRequest<Sec.persist.Options, Sec.persist.Returns['data']>(s + 'persist', (data) => ({ url: `/1.0/sec/persist`, method: 'PUT', data }))

/**
 * 删除特种设备检查单
 *
 * **TAG:** 特种设备检查服务； &nbsp;&nbsp; **PATH:** /1.0/sec/remove/{id}；
 */
export const remove = base.createRequest<Sec.remove.Options, Sec.remove.Returns['data']>(s + 'remove', ({ id, ...params }) => ({ url: `/1.0/sec/remove/${id}`, method: 'DELETE', params }))
