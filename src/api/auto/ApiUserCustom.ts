import * as base from './base'
import { UserCustom } from './modal'

const s = 'ApiUserCustom.'

/**
 * 根据userId（非主键）查询用户机构以及机构下的站点
 *
 * **TAG:** 用户服务； &nbsp;&nbsp; **PATH:** /1.0/user/get_user_one_detail/{userId}；
 */
export const getUserByUserId = base.createRequest<UserCustom.getUserByUserId.Options, UserCustom.getUserByUserId.Returns['data']>(s + 'getUserByUserId', ({ userId, ...params }) => ({
  url: `/1.0/user/get_user_one_detail/${userId}`,
  method: 'GET',
  params
}))

/**
 * 使用id查询用户
 *
 * **TAG:** 用户服务； &nbsp;&nbsp; **PATH:** /1.0/user/get_users_one/{id}；
 */
export const getUserOne = base.createRequest<UserCustom.getUserOne.Options, UserCustom.getUserOne.Returns['data']>(s + 'getUserOne', ({ id, ...params }) => ({
  url: `/1.0/user/get_users_one/${id}`,
  method: 'GET',
  params
}))
