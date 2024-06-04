/**
 * @description: 错误码
 */
export enum ResultEnum {
  SUCCESS = 0,
  /** 用户名或密码错误 */
  USER_INFO_ERROR = -40102,
  /** 令牌不存在（当前用户在它处登录） */
  TOKEN_NOT_EXIST = -40104,
  /** 令牌过期 */
  TOKEN_TIMEOUT = -40105,
  /** 令牌错误 */
  TOKEN_ERROR = -40107,
  /** 未携带令牌 */
  NO_TOKEN = -40108
}
