import * as base from './base'
import { Spf } from './modal'

const s = 'ApiSpf.'

/**
 * 新增检测报告文件
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/add；
 */
export const add = base.createRequest<Spf.add.Options, Spf.add.Returns['data']>(
  s + 'add',
  (data) => ({ url: `/1.0/spf/add`, method: 'POST', data })
)

/**
 * 编辑检测报告文件
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/edit；
 */
export const edit = base.createRequest<Spf.edit.Options, Spf.edit.Returns['data']>(
  s + 'edit',
  (data) => ({ url: `/1.0/spf/edit`, method: 'PUT', data })
)

/**
 * 按年份查询安全检测计划表
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/get_by_year；
 */
export const getByYear = base.createRequest<Spf.getByYear.Options, Spf.getByYear.Returns['data']>(
  s + 'getByYear',
  (params) => ({ url: `/1.0/spf/get_by_year`, method: 'GET', params })
)

/**
 * 主键查询全检测计划文件
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/get_one；
 */
export const getOne = base.createRequest<Spf.getOne.Options, Spf.getOne.Returns['data']>(
  s + 'getOne',
  (params) => ({ url: `/1.0/spf/get_one`, method: 'GET', params })
)

/**
 * 分页查询全检测计划文件
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/get_paged；
 */
export const getPaged = base.createRequest<Spf.getPaged.Options, Spf.getPaged.Returns['data']>(
  s + 'getPaged',
  (params) => ({ url: `/1.0/spf/get_paged`, method: 'GET', params })
)

/**
 * 删除检测报告文件
 *
 * **TAG:** 安全检测计划文件服务； &nbsp;&nbsp; **PATH:** /1.0/spf/remove/{id}；
 */
export const remove = base.createRequest<Spf.remove.Options, Spf.remove.Returns['data']>(
  s + 'remove',
  ({ id, ...params }) => ({ url: `/1.0/spf/remove/${id}`, method: 'DELETE', params })
)
