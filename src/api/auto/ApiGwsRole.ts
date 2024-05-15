import * as base from './base'
import { GwsRole } from './modal'

const s = 'ApiGwsRole.'

/**
 * 新增角色
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/add；
 */
export const addRole = base.createRequest<GwsRole.addRole.Options, GwsRole.addRole.Returns['data']>(s + 'addRole', (data) => ({ url: `/mgr/role/add`, method: 'POST', data }))

/**
 * 分页获取所有数据接口
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_api_list_paged；
 */
export const findAllApisPaged = base.createRequest<GwsRole.findAllApisPaged.Options, GwsRole.findAllApisPaged.Returns['data']>(s + 'findAllApisPaged', (params) => ({
  url: `/mgr/role/get_api_list_paged`,
  method: 'GET',
  params
}))

/**
 * 获取角色已配置的所有菜单&功能点&数据接口
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_refs_menu_perm_api_list/{id}；
 */
export const findAllRoleRefsMenuPermApi = base.createRequest<GwsRole.findAllRoleRefsMenuPermApi.Options, GwsRole.findAllRoleRefsMenuPermApi.Returns['data']>(
  s + 'findAllRoleRefsMenuPermApi',
  ({ id, ...params }) => ({ url: `/mgr/role/get_refs_menu_perm_api_list/${id}`, method: 'GET', params })
)

/**
 * 获取单个角色信息
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_one/{id}；
 */
export const findOneRole = base.createRequest<GwsRole.findOneRole.Options, GwsRole.findOneRole.Returns['data']>(s + 'findOneRole', ({ id, ...params }) => ({
  url: `/mgr/role/get_one/${id}`,
  method: 'GET',
  params
}))

/**
 * 分页获取角色
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_list_paged；
 */
export const findRolesPaged = base.createRequest<GwsRole.findRolesPaged.Options, GwsRole.findRolesPaged.Returns['data']>(s + 'findRolesPaged', (params) => ({
  url: `/mgr/role/get_list_paged`,
  method: 'GET',
  params
}))

/**
 * 获取所有功能点（树形式）
 *
 * 将功能点以设备分组的静态树形式展现
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/get_as_tree；
 */
export const findStaticMenu = base.createNoParamsRequest<GwsRole.findStaticMenu.Returns['data']>(s + 'findStaticMenu', () => ({ url: `/mgr/role/get_as_tree`, method: 'GET' }))

/**
 * 修改角色
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/modify；
 */
export const modifyRole = base.createRequest<GwsRole.modifyRole.Options, GwsRole.modifyRole.Returns['data']>(s + 'modifyRole', (data) => ({ url: `/mgr/role/modify`, method: 'PUT', data }))

/**
 * 删除角色
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/remove/{id}；
 */
export const removeRole = base.createRequest<GwsRole.removeRole.Options, GwsRole.removeRole.Returns['data']>(s + 'removeRole', ({ id, ...params }) => ({
  url: `/mgr/role/remove/${id}`,
  method: 'DELETE',
  params
}))

/**
 * 新增/更新角色配置的所有菜单&功能点&数据接口
 *
 * **TAG:** 07.角色管理服务； &nbsp;&nbsp; **PATH:** /mgr/role/save_refs_menu_perm_api；
 */
export const saveRoleRefsMenuPermApi = base.createRequest<GwsRole.saveRoleRefsMenuPermApi.Options, GwsRole.saveRoleRefsMenuPermApi.Returns['data']>(s + 'saveRoleRefsMenuPermApi', (data) => ({
  url: `/mgr/role/save_refs_menu_perm_api`,
  method: 'POST',
  data
}))
