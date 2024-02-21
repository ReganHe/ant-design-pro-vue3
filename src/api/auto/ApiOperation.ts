import * as base from './base';
import { Operation } from './modal';

const s = 'ApiOperation.';

/**
 * 分页查询操作日志
 *
 * **TAG:** 日志服务； &nbsp;&nbsp; **PATH:** /1.0/operation/p/get_operation_paged；
 */
export const getOperationLogPaged = base.createRequest<
  Operation.getOperationLogPaged.Options,
  Operation.getOperationLogPaged.Returns['data']
>(s + 'getOperationLogPaged', (params) => ({
  url: `/1.0/operation/p/get_operation_paged`,
  method: 'GET',
  params,
}));
