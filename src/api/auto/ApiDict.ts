import * as base from './base'
import { Dict } from './modal'

const s = 'ApiDict.'

/**
 * 新增数据字典类型
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/add；
 */
export const addType = base.createRequest<Dict.addType.Options, Dict.addType.Returns['data']>(s + 'addType', (data) => ({ url: `/1.0/dict/type/add`, method: 'POST', data }))

/**
 * 新增数据字典子项
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/add；
 */
export const addValue = base.createRequest<Dict.addValue.Options, Dict.addValue.Returns['data']>(s + 'addValue', (data) => ({ url: `/1.0/dict/value/add`, method: 'POST', data }))

/**
 * 查询数据字典类型
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/get_list_paged；
 */
export const getTypes = base.createRequest<Dict.getTypes.Options, Dict.getTypes.Returns['data']>(s + 'getTypes', (params) => ({ url: `/1.0/dict/type/get_list_paged`, method: 'GET', params }))

/**
 * 查询数据字典子项
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/get_list_paged；
 */
export const getValues = base.createRequest<Dict.getValues.Options, Dict.getValues.Returns['data']>(s + 'getValues', (params) => ({ url: `/1.0/dict/value/get_list_paged`, method: 'GET', params }))

/**
 * 使用字典编码查询所有字典子项值
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/get_list_bytypekey；
 */
export const getValuesByKey = base.createRequest<Dict.getValuesByKey.Options, Dict.getValuesByKey.Returns['data']>(s + 'getValuesByKey', (params) => ({
  url: `/1.0/dict/value/get_list_bytypekey`,
  method: 'GET',
  params
}))

/**
 * 使用字典编码集合查询所有字典子项值
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/get_list_by_type_keys；
 */
export const getValuesByKeys = base.createRequest<Dict.getValuesByKeys.Options, Dict.getValuesByKeys.Returns['data']>(s + 'getValuesByKeys', (params) => ({
  url: `/1.0/dict/value/get_list_by_type_keys`,
  method: 'GET',
  params
}))

/**
 * 修改数据字典类型
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/modify；
 */
export const modifyType = base.createRequest<Dict.modifyType.Options, Dict.modifyType.Returns['data']>(s + 'modifyType', (data) => ({ url: `/1.0/dict/type/modify`, method: 'PUT', data }))

/**
 * 修改数据字典子项
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/modify；
 */
export const modifyValue = base.createRequest<Dict.modifyValue.Options, Dict.modifyValue.Returns['data']>(s + 'modifyValue', (data) => ({ url: `/1.0/dict/value/modify`, method: 'PUT', data }))

/**
 * 删除数据字典类型
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/type/remove/{id}；
 */
export const removeType = base.createRequest<Dict.removeType.Options, Dict.removeType.Returns['data']>(s + 'removeType', ({ id, ...params }) => ({
  url: `/1.0/dict/type/remove/${id}`,
  method: 'DELETE',
  params
}))

/**
 * 删除数据字典子项
 *
 * **TAG:** 字典服务； &nbsp;&nbsp; **PATH:** /1.0/dict/value/remove/{id}；
 */
export const removeValue = base.createRequest<Dict.removeValue.Options, Dict.removeValue.Returns['data']>(s + 'removeValue', ({ id, ...params }) => ({
  url: `/1.0/dict/value/remove/${id}`,
  method: 'DELETE',
  params
}))
