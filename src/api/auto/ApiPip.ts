import * as base from './base'
import { Pip } from './modal'

const s = 'ApiPip.'

/**
 * 新增压力管道
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/add；
 */
export const add = base.createRequest<Pip.add.Options, Pip.add.Returns['data']>(
  s + 'add',
  (data) => ({ url: `/1.0/pip/add`, method: 'POST', data })
)

/**
 * 废弃压力管道
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/discard；
 */
export const discard = base.createRequest<Pip.discard.Options, Pip.discard.Returns['data']>(
  s + 'discard',
  (data) => ({ url: `/1.0/pip/discard`, method: 'PUT', data })
)

/**
 * 编辑压力管道
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/edit；
 */
export const edit = base.createRequest<Pip.edit.Options, Pip.edit.Returns['data']>(
  s + 'edit',
  (data) => ({ url: `/1.0/pip/edit`, method: 'PUT', data })
)

/**
 * 主键查询压力管道明细
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/get_one；
 */
export const getOne = base.createRequest<Pip.getOne.Options, Pip.getOne.Returns['data']>(
  s + 'getOne',
  (params) => ({ url: `/1.0/pip/get_one`, method: 'GET', params })
)

/**
 * 分页查询设备列表
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/get_paged；
 */
export const getPaged = base.createRequest<Pip.getPaged.Options, Pip.getPaged.Returns['data']>(
  s + 'getPaged',
  (params) => ({ url: `/1.0/pip/get_paged`, method: 'GET', params })
)

/**
 * 查询所有管道长度
 *
 * **TAG:** 压力管道服务； &nbsp;&nbsp; **PATH:** /1.0/pip/get_length；
 */
export const getPipeLengthSum = base.createRequest<
  Pip.getPipeLengthSum.Options,
  Pip.getPipeLengthSum.Returns['data']
>(s + 'getPipeLengthSum', (params) => ({
  url: `/1.0/pip/get_length`,
  method: 'GET',
  params
}))
