import * as base from './base';
import { GwsUserInfo } from './modal';

const s = 'ApiGwsUserInfo.';

/**
 * 获取当前登录用户信息
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/get_current_login_user_info；
 */
export const getCurrentLoginUserInfo = base.createNoParamsRequest<
  GwsUserInfo.getCurrentLoginUserInfo.Returns['data']
>(s + 'getCurrentLoginUserInfo', () => ({
  url: `/account/get_current_login_user_info`,
  method: 'GET',
}));

/**
 * 获取锁定用户ID列表
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/{applicationId}/locked_user_ids；
 */
export const getLockedUserIdsByApplicationId = base.createRequest<
  GwsUserInfo.getLockedUserIdsByApplicationId.Options,
  GwsUserInfo.getLockedUserIdsByApplicationId.Returns['data']
>(s + 'getLockedUserIdsByApplicationId', ({ applicationId, ...params }) => ({
  url: `/account/${applicationId}/locked_user_ids`,
  method: 'GET',
  params,
}));

/**
 * 修改密码
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/modify_password；
 */
export const modifyPassword = base.createRequest<
  GwsUserInfo.modifyPassword.Options,
  GwsUserInfo.modifyPassword.Returns['data']
>(s + 'modifyPassword', (data) => ({ url: `/account/modify_password`, method: 'POST', data }));

/**
 * 重置密码
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/reset_password；
 */
export const resetPassword = base.createRequest<
  GwsUserInfo.resetPassword.Options,
  GwsUserInfo.resetPassword.Returns['data']
>(s + 'resetPassword', (data) => ({ url: `/account/reset_password`, method: 'POST', data }));

/**
 * 解锁用户
 *
 * **TAG:** 03.个人信息； &nbsp;&nbsp; **PATH:** /account/unlock_user/{userId}；
 */
export const unlock = base.createRequest<
  GwsUserInfo.unlock.Options,
  GwsUserInfo.unlock.Returns['data']
>(s + 'unlock', ({ userId, ...data }) => ({
  url: `/account/unlock_user/${userId}`,
  method: 'POST',
  data,
}));
