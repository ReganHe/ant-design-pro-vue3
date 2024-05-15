import * as base from './base'
import { GwsUser } from './modal'

const s = 'ApiGwsUser.'

/**
 * 新增应用用户
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/add；
 */
export const addUser = base.createRequest<GwsUser.addUser.Options, GwsUser.addUser.Returns['data']>(
  s + 'addUser',
  (data) => ({ url: `/mgr/application_user/add`, method: 'POST', data })
)

/**
 * 获取单个应用用户信息
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/get_one/{id}；
 */
export const findOneUser = base.createRequest<
  GwsUser.findOneUser.Options,
  GwsUser.findOneUser.Returns['data']
>(s + 'findOneUser', ({ id, ...params }) => ({
  url: `/mgr/application_user/get_one/${id}`,
  method: 'GET',
  params
}))

/**
 * 修改应用用户
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/modify；
 */
export const modifyUser = base.createRequest<
  GwsUser.modifyUser.Options,
  GwsUser.modifyUser.Returns['data']
>(s + 'modifyUser', (data) => ({ url: `/mgr/application_user/modify`, method: 'PUT', data }))

/**
 * 删除应用用户
 *
 * **TAG:** 12.应用用户管理服务； &nbsp;&nbsp; **PATH:** /mgr/application_user/remove/{id}；
 */
export const removeUser = base.createRequest<
  GwsUser.removeUser.Options,
  GwsUser.removeUser.Returns['data']
>(s + 'removeUser', ({ id, ...params }) => ({
  url: `/mgr/application_user/remove/${id}`,
  method: 'DELETE',
  params
}))
