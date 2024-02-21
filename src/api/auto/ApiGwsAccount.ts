import * as base from './base';
import { GwsAccount } from './modal';

const s = 'ApiGwsAccount.';

/**
 * 登录并签发令牌(Refresh Token)
 *
 * API接口调用
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/login_direct；
 */
export const accountLogin4Direct = base.createRequest<
  GwsAccount.accountLogin4Direct.Options,
  GwsAccount.accountLogin4Direct.Returns['data']
>(s + 'accountLogin4Direct', (data) => ({ url: `/account/login_direct`, method: 'POST', data }));

/**
 * 登录并签发令牌(Refresh Token)
 *
 * 前端接口调用
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/login；
 */
export const accountLogin4Frontend = base.createRequest<
  GwsAccount.accountLogin4Frontend.Options,
  GwsAccount.accountLogin4Frontend.Returns['data']
>(s + 'accountLogin4Frontend', (data) => ({ url: `/account/login`, method: 'POST', data }));

/**
 * 退出登录
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/logout；
 */
export const accountLogout = base.createNoParamsRequest<GwsAccount.accountLogout.Returns['data']>(
  s + 'accountLogout',
  () => ({ url: `/account/logout`, method: 'DELETE' })
);

/**
 * 获取验证码
 *
 * 1 - 普通类型，2 - 中文类型，3 - 算术类型
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/captcha/{type}；
 */
export const captcha = base.createRequest<
  GwsAccount.captcha.Options,
  GwsAccount.captcha.Returns['data']
>(s + 'captcha', ({ type, ...params }) => ({
  url: `/account/captcha/${type}`,
  method: 'GET',
  params,
}));

/**
 * 交换访问令牌
 *
 * **TAG:** 02.账号服务； &nbsp;&nbsp; **PATH:** /account/exchange_access_token；
 */
export const exchangeAccessToken = base.createRequest<
  GwsAccount.exchangeAccessToken.Options,
  GwsAccount.exchangeAccessToken.Returns['data']
>(s + 'exchangeAccessToken', (data) => ({
  url: `/account/exchange_access_token`,
  method: 'POST',
  data,
}));
