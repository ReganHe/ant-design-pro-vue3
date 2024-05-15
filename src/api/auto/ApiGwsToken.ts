import * as base from './base'
import { GwsToken } from './modal'

const s = 'ApiGwsToken.'

/**
 * 交换正式令牌(Refresh Token)
 *
 * **TAG:** 01.账号预登录服务； &nbsp;&nbsp; **PATH:** /account/exchange_refresh_token；
 */
export const exchangeRefreshToken = base.createRequest<GwsToken.exchangeRefreshToken.Options, GwsToken.exchangeRefreshToken.Returns['data']>(s + 'exchangeRefreshToken', (data) => ({
  url: `/account/exchange_refresh_token`,
  method: 'POST',
  data
}))

/**
 * 预登录并签发临时令牌(Short Term Token)
 *
 * 前端接口调用
 *
 * **TAG:** 01.账号预登录服务； &nbsp;&nbsp; **PATH:** /account/pre_login；
 */
export const preLogin = base.createRequest<GwsToken.preLogin.Options, GwsToken.preLogin.Returns['data']>(s + 'preLogin', (data) => ({ url: `/account/pre_login`, method: 'POST', data }))
