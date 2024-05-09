import * as base from './base'
import {Wo} from './modal'

const s = 'ApiWo.'

/**
 * 新增维修报告
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/add；
 */
export const add = base.createRequest<Wo.add.Options, Wo.add.Returns['data']>(s + 'add', (data) => ({url: `/1.0/wo/add`, method: 'POST', data }))


/**
 * 编辑维修报告
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/edit；
 */
export const edit = base.createRequest<Wo.edit.Options, Wo.edit.Returns['data']>(s + 'edit', (data) => ({url: `/1.0/wo/edit`, method: 'PUT', data }))


/**
 * 导出Excel
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/export_excel；
 */
export const exportExcel = base.createBlobRequest<Wo.exportExcel.Options>(s + 'exportExcel', (params) => ({url: `/1.0/wo/export_excel`, method: 'GET', params }))


/**
 * 主键查询维修报告详情
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/get_one；
 */
export const getOne = base.createRequest<Wo.getOne.Options, Wo.getOne.Returns['data']>(s + 'getOne', (params) => ({url: `/1.0/wo/get_one`, method: 'GET', params }))


/**
 * 分页查询维修报告
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/get_paged；
 */
export const getPaged = base.createRequest<Wo.getPaged.Options, Wo.getPaged.Returns['data']>(s + 'getPaged', (params) => ({url: `/1.0/wo/get_paged`, method: 'GET', params }))


/**
 * 删除维修报告
 *
 * **TAG:** 维修报告服务； &nbsp;&nbsp; **PATH:** /1.0/wo/remove/{id}；
 */
export const remove = base.createRequest<Wo.remove.Options, Wo.remove.Returns['data']>(s + 'remove', ({ id, ...params}) => ({url: `/1.0/wo/remove/${id}`, method: 'DELETE', params }))

