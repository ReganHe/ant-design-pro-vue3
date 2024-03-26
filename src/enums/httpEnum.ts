/**
 * @description: Request result set
 */
export enum ResultEnum {
  SUCCESS = 0,
  /** 未携带令牌 */
  NO_TOKEN = -40108,
  /** 令牌不存在（当前用户在它处登录） */
  TOKEN_NOT_EXIST = -40104,
  /** 令牌过期 */
  TOKEN_TIMEOUT = -40105,
  /** 令牌错误 */
  TOKEN_ERROR = -40107,
}

/**
 * @description: request method
 */
export enum RequestEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

/**
 * @description:  contentTyp
 */
export enum ContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}
