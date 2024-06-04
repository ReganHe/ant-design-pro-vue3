import * as base from './base'
import { Mrp } from './modal'

const s = 'ApiMrp.'

/**
 * 新增中修计划
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/add；
 */
export const add = base.createRequest<Mrp.add.Options, Mrp.add.Returns['data']>(
  s + 'add',
  (data) => ({ url: `/1.0/mrp/add`, method: 'POST', data })
)

/**
 * 编辑中修计划
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/edit；
 */
export const edit = base.createRequest<Mrp.edit.Options, Mrp.edit.Returns['data']>(
  s + 'edit',
  (data) => ({ url: `/1.0/mrp/edit`, method: 'PUT', data })
)

/**
 * 主键查询中修计划详情
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/get_one；
 */
export const getOne = base.createRequest<Mrp.getOne.Options, Mrp.getOne.Returns['data']>(
  s + 'getOne',
  (params) => ({ url: `/1.0/mrp/get_one`, method: 'GET', params })
)

/**
 * 分页查询中修计划
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/get_paged；
 */
export const getPaged = base.createRequest<Mrp.getPaged.Options, Mrp.getPaged.Returns['data']>(
  s + 'getPaged',
  (params) => ({ url: `/1.0/mrp/get_paged`, method: 'GET', params })
)

/**
 * 终止中修计划
 *
 * **TAG:** 中修计划服务； &nbsp;&nbsp; **PATH:** /1.0/mrp/stop；
 */
export const stop = base.createRequest<Mrp.stop.Options, Mrp.stop.Returns['data']>(
  s + 'stop',
  (data) => ({ url: `/1.0/mrp/stop`, method: 'PUT', data })
)
