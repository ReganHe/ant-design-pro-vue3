import * as base from './base'
import {Gsb} from './modal'

const s = 'ApiGsb.'

/**
 * 新增常规物资台帐
 *
 * **TAG:** 常规物资台帐服务； &nbsp;&nbsp; **PATH:** /1.0/gsb/add；
 */
export const add = base.createRequest<Gsb.add.Options, Gsb.add.Returns['data']>(s + 'add', (data) => ({url: `/1.0/gsb/add`, method: 'POST', data }))


/**
 * 分页查询常规物资台帐
 *
 * **TAG:** 常规物资台帐服务； &nbsp;&nbsp; **PATH:** /1.0/gsb/get_paged；
 */
export const getPaged = base.createRequest<Gsb.getPaged.Options, Gsb.getPaged.Returns['data']>(s + 'getPaged', (params) => ({url: `/1.0/gsb/get_paged`, method: 'GET', params }))


/**
 * 删除常规物资台帐
 *
 * **TAG:** 常规物资台帐服务； &nbsp;&nbsp; **PATH:** /1.0/gsb/remove/{id}；
 */
export const remove = base.createRequest<Gsb.remove.Options, Gsb.remove.Returns['data']>(s + 'remove', ({ id, ...params}) => ({url: `/1.0/gsb/remove/${id}`, method: 'DELETE', params }))

