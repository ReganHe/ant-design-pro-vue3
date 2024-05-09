import * as base from './base'
import {User} from './modal'

const s = 'ApiUser.'

/**
 * 新增用户
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/add；
 */
export const addUser = base.createRequest<User.addUser.Options, User.addUser.Returns['data']>(s + 'addUser', (data) => ({url: `/gisc/user/add`, method: 'POST', data }))


/**
 * 获取用户头像
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/img/get_img；
 */
export const getImg = base.createBlobRequest<User.getImg.Options>(s + 'getImg', (params) => ({url: `/gisc/user/img/get_img`, method: 'GET', params }))


/**
 * 根据userId（非主键）查询用户机构以及机构下的站点
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/get_user_one_detail/{userId}；
 */
export const getUserByUserId = base.createRequest<User.getUserByUserId.Options, User.getUserByUserId.Returns['data']>(s + 'getUserByUserId', ({ userId, ...params}) => ({url: `/gisc/user/get_user_one_detail/${userId}`, method: 'GET', params }))


/**
 * 使用id查询用户
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/get_users_one/{id}；
 */
export const getUserOne = base.createRequest<User.getUserOne.Options, User.getUserOne.Returns['data']>(s + 'getUserOne', ({ id, ...params}) => ({url: `/gisc/user/get_users_one/${id}`, method: 'GET', params }))


/**
 * 查询用户列表
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/get_users_paged；
 */
export const getUsersPaged = base.createRequest<User.getUsersPaged.Options, User.getUsersPaged.Returns['data']>(s + 'getUsersPaged', (params) => ({url: `/gisc/user/get_users_paged`, method: 'GET', params }))


/**
 * 修改用户信息
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/modify；
 */
export const modifyUser = base.createRequest<User.modifyUser.Options, User.modifyUser.Returns['data']>(s + 'modifyUser', (data) => ({url: `/gisc/user/modify`, method: 'PUT', data }))


/**
 * 修改用户头像
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/modify_avatar；
 */
export const modifyUserAvatar = base.createRequest<User.modifyUserAvatar.Options, User.modifyUserAvatar.Returns['data']>(s + 'modifyUserAvatar', (data) => ({url: `/gisc/user/modify_avatar`, method: 'PUT', data }))


/**
 * 删除用户
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/remove/{id}；
 */
export const removeUser = base.createRequest<User.removeUser.Options, User.removeUser.Returns['data']>(s + 'removeUser', ({ id, ...params}) => ({url: `/gisc/user/remove/${id}`, method: 'DELETE', params }))


/**
 * 上传用户头像
 *
 * **TAG:** 用户管理服务； &nbsp;&nbsp; **PATH:** /gisc/user/img/upload；
 */
export const uploadImg = base.createRequest<User.uploadImg.Options, User.uploadImg.Returns['data']>(s + 'uploadImg', (data) => ({url: `/gisc/user/img/upload`, method: 'POST', data }))

