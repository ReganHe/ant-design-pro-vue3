import * as base from './base'
import { Sale } from './modal'

const s = 'ApiSale.'

/**
 * 导出Excel
 *
 * **TAG:** 进销存服务； &nbsp;&nbsp; **PATH:** /1.0/sale/export_excel；
 */
export const exportExcel = base.createBlobRequest<Sale.exportExcel.Options>(s + 'exportExcel', (params) => ({ url: `/1.0/sale/export_excel`, method: 'GET', params }))

/**
 * 查询进销存报表
 *
 * **TAG:** 进销存服务； &nbsp;&nbsp; **PATH:** /1.0/sale/get_sale_inventory；
 */
export const querySaleInventory = base.createRequest<Sale.querySaleInventory.Options, Sale.querySaleInventory.Returns['data']>(s + 'querySaleInventory', (params) => ({
  url: `/1.0/sale/get_sale_inventory`,
  method: 'GET',
  params
}))
