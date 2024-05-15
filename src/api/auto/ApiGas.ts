import * as base from './base'
import { Gas } from './modal'

const s = 'ApiGas.'

/**
 * 分页条件查询用气列表
 *
 * **TAG:** 用气监控服务； &nbsp;&nbsp; **PATH:** /1.0/gas/get_gas_paged；
 */
export const getGasPaged = base.createRequest<Gas.getGasPaged.Options, Gas.getGasPaged.Returns['data']>(s + 'getGasPaged', (params) => ({ url: `/1.0/gas/get_gas_paged`, method: 'GET', params }))
