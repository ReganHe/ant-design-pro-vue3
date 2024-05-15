import * as base from './base'
import { Report } from './modal'

const s = 'ApiReport.'

/**
 * 导出Excel
 *
 * **TAG:** 进销存报表服务； &nbsp;&nbsp; **PATH:** /1.0/report/export_excel；
 */
export const exportExcel = base.createBlobRequest<Report.exportExcel.Options>(s + 'exportExcel', (params) => ({ url: `/1.0/report/export_excel`, method: 'GET', params }))

/**
 * 查询查询进出存报表
 *
 * **TAG:** 进销存报表服务； &nbsp;&nbsp; **PATH:** /1.0/report/get_sale_inventory_report；
 */
export const queryInventoryReport = base.createRequest<Report.queryInventoryReport.Options, Report.queryInventoryReport.Returns['data']>(s + 'queryInventoryReport', (params) => ({
  url: `/1.0/report/get_sale_inventory_report`,
  method: 'GET',
  params
}))

/**
 * 查询卸液记录报表
 *
 * **TAG:** 进销存报表服务； &nbsp;&nbsp; **PATH:** /1.0/report/get_sale_inventory_unload；
 */
export const queryInventoryUnload = base.createRequest<Report.queryInventoryUnload.Options, Report.queryInventoryUnload.Returns['data']>(s + 'queryInventoryUnload', (params) => ({
  url: `/1.0/report/get_sale_inventory_unload`,
  method: 'GET',
  params
}))

/**
 * 查询销售日报
 *
 * **TAG:** 进销存报表服务； &nbsp;&nbsp; **PATH:** /1.0/report/get_sale_report；
 */
export const querySaleReport = base.createRequest<Report.querySaleReport.Options, Report.querySaleReport.Returns['data']>(s + 'querySaleReport', (params) => ({
  url: `/1.0/report/get_sale_report`,
  method: 'GET',
  params
}))
