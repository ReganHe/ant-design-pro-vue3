import * as base from './base';
import { Cf } from './modal';

const s = 'ApiCf.';

/**
 * 主键查询加液及充装检查记录
 *
 * **TAG:** 加液及充装检查记录； &nbsp;&nbsp; **PATH:** /1.0/cf/get_one；
 */
export const getOne = base.createRequest<Cf.getOne.Options, Cf.getOne.Returns['data']>(
  s + 'getOne',
  (params) => ({ url: `/1.0/cf/get_one`, method: 'GET', params })
);

/**
 * 主键查询加液及充装检查记录明细
 *
 * **TAG:** 加液及充装检查记录； &nbsp;&nbsp; **PATH:** /1.0/cf/get_one_record；
 */
export const getOneRecord = base.createRequest<
  Cf.getOneRecord.Options,
  Cf.getOneRecord.Returns['data']
>(s + 'getOneRecord', (params) => ({ url: `/1.0/cf/get_one_record`, method: 'GET', params }));

/**
 * 分页查询加液及充装检查记录
 *
 * **TAG:** 加液及充装检查记录； &nbsp;&nbsp; **PATH:** /1.0/cf/get_paged；
 */
export const getPaged = base.createRequest<Cf.getPaged.Options, Cf.getPaged.Returns['data']>(
  s + 'getPaged',
  (params) => ({ url: `/1.0/cf/get_paged`, method: 'GET', params })
);

/**
 * 持久化加液及充装检查记录
 *
 * **TAG:** 加液及充装检查记录； &nbsp;&nbsp; **PATH:** /1.0/cf/persist；
 */
export const persist = base.createRequest<Cf.persist.Options, Cf.persist.Returns['data']>(
  s + 'persist',
  (data) => ({ url: `/1.0/cf/persist`, method: 'PUT', data })
);

/**
 * 删除加液及充装检查记录
 *
 * **TAG:** 加液及充装检查记录； &nbsp;&nbsp; **PATH:** /1.0/cf/remove/{id}；
 */
export const remove = base.createRequest<Cf.remove.Options, Cf.remove.Returns['data']>(
  s + 'remove',
  ({ id, ...params }) => ({ url: `/1.0/cf/remove/${id}`, method: 'DELETE', params })
);
