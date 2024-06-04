import * as base from './base'
import { SalesData } from './modal'

const s = 'ApiSalesData.'

/**
 * 接收销售系统推送数据
 *
 * **TAG:** 销售数据服务； &nbsp;&nbsp; **PATH:** /1.0/sales_data/add；
 */
export const addSales = base.createRequest<
  SalesData.addSales.Options,
  SalesData.addSales.Returns['data']
>(s + 'addSales', (data) => ({ url: `/1.0/sales_data/add`, method: 'POST', data }))

/**
 * 按时间拉取销售数据
 *
 * **TAG:** 销售数据服务； &nbsp;&nbsp; **PATH:** /1.0/sales_data/get_detail；
 */
export const getDaySalesData = base.createBlobRequest<SalesData.getDaySalesData.Options>(
  s + 'getDaySalesData',
  (params) => ({ url: `/1.0/sales_data/get_detail`, method: 'GET', params })
)

/**
 * 分页条件查询销售数据列表
 *
 * **TAG:** 销售数据服务； &nbsp;&nbsp; **PATH:** /1.0/sales_data/get_paged；
 */
export const getSalesPaged = base.createRequest<
  SalesData.getSalesPaged.Options,
  SalesData.getSalesPaged.Returns['data']
>(s + 'getSalesPaged', (params) => ({
  url: `/1.0/sales_data/get_paged`,
  method: 'GET',
  params
}))
