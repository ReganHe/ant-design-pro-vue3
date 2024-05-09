import * as base from './base'
import {Sp} from './modal'

const s = 'ApiSp.'

/**
 * 按年份查询安全检测计划表
 *
 * **TAG:** 安全检测计划表服务； &nbsp;&nbsp; **PATH:** /1.0/sp/get_by_year；
 */
export const getByYear = base.createRequest<Sp.getByYear.Options, Sp.getByYear.Returns['data']>(s + 'getByYear', (params) => ({url: `/1.0/sp/get_by_year`, method: 'GET', params }))


/**
 * 持久化安全检查计划
 *
 * **TAG:** 安全检测计划表服务； &nbsp;&nbsp; **PATH:** /1.0/sp/persist；
 */
export const persist = base.createRequest<Sp.persist.Options, Sp.persist.Returns['data']>(s + 'persist', (data) => ({url: `/1.0/sp/persist`, method: 'PUT', data }))


/**
 * 移除计划中的站点
 *
 * **TAG:** 安全检测计划表服务； &nbsp;&nbsp; **PATH:** /1.0/sp/remove_station；
 */
export const removeStation = base.createRequest<Sp.removeStation.Options, Sp.removeStation.Returns['data']>(s + 'removeStation', (data) => ({url: `/1.0/sp/remove_station`, method: 'PUT', data }))

