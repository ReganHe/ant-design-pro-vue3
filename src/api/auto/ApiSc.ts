import * as base from './base';
import { Sc } from './modal';

const s = 'ApiSc.';

/**
 * 持久化安全检查（日）
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/day_persist；
 */
export const dayPersist = base.createRequest<Sc.dayPersist.Options, Sc.dayPersist.Returns['data']>(
  s + 'dayPersist',
  (data) => ({ url: `/1.0/sc/day_persist`, method: 'PUT', data })
);

/**
 * 删除安全检查单（日）
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/day_remove/{id}；
 */
export const dayRemove = base.createRequest<Sc.dayRemove.Options, Sc.dayRemove.Returns['data']>(
  s + 'dayRemove',
  ({ id, ...params }) => ({ url: `/1.0/sc/day_remove/${id}`, method: 'DELETE', params })
);

/**
 * 导出Excel
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/export_excel；
 */
export const exportExcel = base.createRequest<
  Sc.exportExcel.Options,
  Sc.exportExcel.Returns['data']
>(s + 'exportExcel', (params) => ({ url: `/1.0/sc/export_excel`, method: 'GET', params }));

/**
 * 查询安全检查（日）详细
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_day_one；
 */
export const getDayOne = base.createRequest<Sc.getDayOne.Options, Sc.getDayOne.Returns['data']>(
  s + 'getDayOne',
  (params) => ({ url: `/1.0/sc/get_day_one`, method: 'GET', params })
);

/**
 * 分页查询安全检查（日）
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_day_paged；
 */
export const getDayPaged = base.createRequest<
  Sc.getDayPaged.Options,
  Sc.getDayPaged.Returns['data']
>(s + 'getDayPaged', (params) => ({ url: `/1.0/sc/get_day_paged`, method: 'GET', params }));

/**
 * 查询安全检查（月）详细
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_month_one；
 */
export const getMonthOne = base.createRequest<
  Sc.getMonthOne.Options,
  Sc.getMonthOne.Returns['data']
>(s + 'getMonthOne', (params) => ({ url: `/1.0/sc/get_month_one`, method: 'GET', params }));

/**
 * 分页查询安全检查（月）
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/get_month_paged；
 */
export const getMonthPaged = base.createRequest<
  Sc.getMonthPaged.Options,
  Sc.getMonthPaged.Returns['data']
>(s + 'getMonthPaged', (params) => ({ url: `/1.0/sc/get_month_paged`, method: 'GET', params }));

/**
 * 初始化安全检查（日）检查单
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/init_day_inspect；
 */
export const initDayInspectData = base.createRequest<
  Sc.initDayInspectData.Options,
  Sc.initDayInspectData.Returns['data']
>(s + 'initDayInspectData', (params) => ({
  url: `/1.0/sc/init_day_inspect`,
  method: 'GET',
  params,
}));

/**
 * 初始化安全检查（月）检查单
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/init_month_inspect；
 */
export const initMonthInspectData = base.createRequest<
  Sc.initMonthInspectData.Options,
  Sc.initMonthInspectData.Returns['data']
>(s + 'initMonthInspectData', (params) => ({
  url: `/1.0/sc/init_month_inspect`,
  method: 'GET',
  params,
}));

/**
 * 持久化安全检查（月）
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/month_persist；
 */
export const monthPersist = base.createRequest<
  Sc.monthPersist.Options,
  Sc.monthPersist.Returns['data']
>(s + 'monthPersist', (data) => ({ url: `/1.0/sc/month_persist`, method: 'PUT', data }));

/**
 * 删除安全检查单（月）
 *
 * **TAG:** 安全检查服务； &nbsp;&nbsp; **PATH:** /1.0/sc/month_remove/{id}；
 */
export const monthRemove = base.createRequest<
  Sc.monthRemove.Options,
  Sc.monthRemove.Returns['data']
>(s + 'monthRemove', ({ id, ...params }) => ({
  url: `/1.0/sc/month_remove/${id}`,
  method: 'DELETE',
  params,
}));
