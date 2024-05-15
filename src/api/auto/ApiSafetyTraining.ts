import * as base from './base'
import { SafetyTraining } from './modal'

const s = 'ApiSafetyTraining.'

/**
 * 新增安全培训记录
 *
 * **TAG:** 安全学习培训服务； &nbsp;&nbsp; **PATH:** /1.0/safety_training/add；
 */
export const add = base.createRequest<SafetyTraining.add.Options, SafetyTraining.add.Returns['data']>(s + 'add', (data) => ({ url: `/1.0/safety_training/add`, method: 'POST', data }))

/**
 * 编辑安全培训记录
 *
 * **TAG:** 安全学习培训服务； &nbsp;&nbsp; **PATH:** /1.0/safety_training/edit；
 */
export const edit = base.createRequest<SafetyTraining.edit.Options, SafetyTraining.edit.Returns['data']>(s + 'edit', (data) => ({ url: `/1.0/safety_training/edit`, method: 'PUT', data }))

/**
 * 主键查询安全培训记录
 *
 * **TAG:** 安全学习培训服务； &nbsp;&nbsp; **PATH:** /1.0/safety_training/get_one/{id}；
 */
export const getOne = base.createRequest<SafetyTraining.getOne.Options, SafetyTraining.getOne.Returns['data']>(s + 'getOne', ({ id, ...params }) => ({
  url: `/1.0/safety_training/get_one/${id}`,
  method: 'GET',
  params
}))

/**
 * 分页查询安全培训记录
 *
 * **TAG:** 安全学习培训服务； &nbsp;&nbsp; **PATH:** /1.0/safety_training/get_paged；
 */
export const getPaged = base.createRequest<SafetyTraining.getPaged.Options, SafetyTraining.getPaged.Returns['data']>(s + 'getPaged', (params) => ({
  url: `/1.0/safety_training/get_paged`,
  method: 'GET',
  params
}))

/**
 * 删除安全培训记录
 *
 * **TAG:** 安全学习培训服务； &nbsp;&nbsp; **PATH:** /1.0/safety_training/remove/{id}；
 */
export const remove = base.createRequest<SafetyTraining.remove.Options, SafetyTraining.remove.Returns['data']>(s + 'remove', ({ id, ...params }) => ({
  url: `/1.0/safety_training/remove/${id}`,
  method: 'DELETE',
  params
}))
