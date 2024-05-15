import * as base from './base'
import { Home } from './modal'

const s = 'ApiHome.'

/**
 * 首页查询各站点统计进销存情况
 *
 * **TAG:** 首页服务； &nbsp;&nbsp; **PATH:** /1.0/home/get_sales_inventory；
 */
export const getSalesInventoryByStation = base.createRequest<Home.getSalesInventoryByStation.Options, Home.getSalesInventoryByStation.Returns['data']>(s + 'getSalesInventoryByStation', (params) => ({
  url: `/1.0/home/get_sales_inventory`,
  method: 'GET',
  params
}))
