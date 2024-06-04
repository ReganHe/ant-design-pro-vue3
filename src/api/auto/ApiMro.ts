import * as base from './base'
import { Mro } from './modal'

const s = 'ApiMro.'

/**
 * 新增中修工单
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/add；
 */
export const add = base.createRequest<Mro.add.Options, Mro.add.Returns['data']>(
  s + 'add',
  (data) => ({ url: `/1.0/mro/add`, method: 'POST', data })
)

/**
 * 手动触发中修派单
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/auto；
 */
export const automaticDispatch = base.createRequest<
  Mro.automaticDispatch.Options,
  Mro.automaticDispatch.Returns['data']
>(s + 'automaticDispatch', (params) => ({
  url: `/1.0/mro/auto`,
  method: 'GET',
  params
}))

/**
 * 编辑中修工单
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/edit；
 */
export const edit = base.createRequest<Mro.edit.Options, Mro.edit.Returns['data']>(
  s + 'edit',
  (data) => ({ url: `/1.0/mro/edit`, method: 'PUT', data })
)

/**
 * 主键查询中修工单详情
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/get_one；
 */
export const getOne = base.createRequest<Mro.getOne.Options, Mro.getOne.Returns['data']>(
  s + 'getOne',
  (params) => ({ url: `/1.0/mro/get_one`, method: 'GET', params })
)

/**
 * 分页查询中修工单
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/get_paged；
 */
export const getPaged = base.createRequest<Mro.getPaged.Options, Mro.getPaged.Returns['data']>(
  s + 'getPaged',
  (params) => ({ url: `/1.0/mro/get_paged`, method: 'GET', params })
)

/**
 * 删除中修工单
 *
 * **TAG:** 中修工单服务； &nbsp;&nbsp; **PATH:** /1.0/mro/remove/{id}；
 */
export const remove = base.createRequest<Mro.remove.Options, Mro.remove.Returns['data']>(
  s + 'remove',
  ({ id, ...params }) => ({ url: `/1.0/mro/remove/${id}`, method: 'DELETE', params })
)
