import * as base from './base'
import { Lu } from './modal'

const s = 'ApiLu.'

/**
 * 主键查询LNG加气站卸车记录
 *
 * **TAG:** LNG加气站卸车记录服务； &nbsp;&nbsp; **PATH:** /1.0/lu/get_one；
 */
export const getOne = base.createRequest<Lu.getOne.Options, Lu.getOne.Returns['data']>(
  s + 'getOne',
  (params) => ({ url: `/1.0/lu/get_one`, method: 'GET', params })
)

/**
 * 分页查询LNG加气站卸车记录
 *
 * **TAG:** LNG加气站卸车记录服务； &nbsp;&nbsp; **PATH:** /1.0/lu/get_paged；
 */
export const getPaged = base.createRequest<Lu.getPaged.Options, Lu.getPaged.Returns['data']>(
  s + 'getPaged',
  (params) => ({ url: `/1.0/lu/get_paged`, method: 'GET', params })
)

/**
 * 初始化LNG加气站卸车记录
 *
 * **TAG:** LNG加气站卸车记录服务； &nbsp;&nbsp; **PATH:** /1.0/lu/init_data；
 */
export const initDayInspectData = base.createRequest<
  Lu.initDayInspectData.Options,
  Lu.initDayInspectData.Returns['data']
>(s + 'initDayInspectData', (params) => ({
  url: `/1.0/lu/init_data`,
  method: 'GET',
  params
}))

/**
 * 持久化LNG加气站卸车记录
 *
 * **TAG:** LNG加气站卸车记录服务； &nbsp;&nbsp; **PATH:** /1.0/lu/persist；
 */
export const persist = base.createRequest<Lu.persist.Options, Lu.persist.Returns['data']>(
  s + 'persist',
  (data) => ({ url: `/1.0/lu/persist`, method: 'PUT', data })
)

/**
 * 删除LNG加气站卸车记录
 *
 * **TAG:** LNG加气站卸车记录服务； &nbsp;&nbsp; **PATH:** /1.0/lu/remove/{id}；
 */
export const remove = base.createRequest<Lu.remove.Options, Lu.remove.Returns['data']>(
  s + 'remove',
  ({ id, ...params }) => ({ url: `/1.0/lu/remove/${id}`, method: 'DELETE', params })
)
