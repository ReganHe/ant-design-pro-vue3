import * as base from './base'
import { Mu } from './modal'

const s = 'ApiMu.'

/**
 * 条件查询厂家/单位
 *
 * **TAG:** 厂家/单位服务； &nbsp;&nbsp; **PATH:** /1.0/mu/get_condition；
 */
export const getByCondition = base.createRequest<Mu.getByCondition.Options, Mu.getByCondition.Returns['data']>(s + 'getByCondition', (params) => ({
  url: `/1.0/mu/get_condition`,
  method: 'GET',
  params
}))
