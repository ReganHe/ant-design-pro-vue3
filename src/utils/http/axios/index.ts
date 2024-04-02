// axios配置  可自行根据项目进行更改，只需更改该文件即可，其他文件可以不动
// The axios configuration can be changed according to the project, just change the file, other files can be left unchanged

import type { AxiosResponse } from 'axios'
import qs from 'qs'

import type { ErrorMessageMode, RequestOptions, Result } from '#/axios'
import { useMessage } from '@/hooks/web/useMessage'
import { RequestEnum, ResultEnum, ContentTypeEnum } from '@/enums/httpEnum'
import { isString } from '@/utils/is'
import { setObjToUrlParams, deepMerge } from '@/utils'
import { useUserStore, useUserStoreWithOut } from '@/store/modules/user'
import { useAppStoreWithOut } from '@/store/modules/app'
import { VAxios } from './Axios'
import type { AxiosTransform, CreateAxiosOptions } from './axiosTransform'
import { joinTimestamp, formatRequestDate } from './helper'
import { getAppEnvConfig } from '@/utils/env'
import { Recordable } from '#/global'

const { VITE_GLOB_API_URL_PREFIX, VITE_GLOB_API_URL } = getAppEnvConfig()
const urlPrefix = VITE_GLOB_API_URL_PREFIX
const { createMessage, createErrorModal } = useMessage()
const appStore = useAppStoreWithOut()

/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 业务异常处理（系统码为200）
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { isTransformResponse, isReturnNativeResponse } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data
    }
    // 错误的时候返回
    if (!res.data) {
      throw new Error('请求出错，请稍后重试！')
    }

    const { status, data, message } = res.data
    if (status === ResultEnum.SUCCESS) {
      return data
    }
    // 返回blob格式，文件下载
    if (res.data instanceof Blob) {
      return {
        data: res.data,
        type: res.headers['content-type'],
        name: decodeURIComponent(res.headers['content-disposition'].substring(res.headers['content-disposition'].indexOf('=') + 1))
      }
    }
    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    let errMsg = ''
    switch (status) {
      case ResultEnum.NO_TOKEN:
      case ResultEnum.TOKEN_NOT_EXIST:
      case ResultEnum.TOKEN_TIMEOUT:
      case ResultEnum.TOKEN_ERROR:
        errMsg = status === ResultEnum.TOKEN_NOT_EXIST ? '当前用户已在它处登录' : message
        const userStore = useUserStoreWithOut()
        userStore.logout()
        break
      default:
        if (message) {
          errMsg = message
        }
    }

    showGlobalMessage(options.errorMessageMode, errMsg)
    throw new Error(errMsg || '请求出错，请稍后重试！')
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options
    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }

    const params = config.params || {}
    const data = config.data || false
    formatDate && data && !isString(data) && formatRequestDate(data)
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      config.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }

      // 清除空参数,字符串trim
      config.params = { ...removeEmptyProperty(params) }
      // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
      config.params = Object.assign(params || {}, joinTimestamp(joinTime, false))
    } else {
      formatDate && formatRequestDate(params)
      if (Reflect.has(config, 'data') && config.data && Object.keys(config.data).length > 0) {
        config.data = data
        config.params = params
      } else {
        // 非GET请求如果没有提供data，则将params视为data
        config.data = params
        config.params = undefined
      }
      if (joinParamsToUrl) {
        config.url = setObjToUrlParams(config.url as string, Object.assign({}, config.params, config.data))
      }
    }
    return config
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    const userStore = useUserStore()
    const token = userStore.token
    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // jwt token
      ;(config as Recordable).headers.Authorization = options.authenticationScheme ? `${options.authenticationScheme} ${token}` : token
    }
    return config
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res
  },

  /**
   * @description: 系统错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { response, code, message, config } = error || {}
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none'
    const msg: string = response?.data?.error?.message ?? ''
    const err: string = error?.toString?.() ?? ''
    let errMessage = ''

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = '接口请求超时，请刷新页面重试！'
      }
      if (err?.includes('Network Error')) {
        errMessage = '网络异常，请检查您的网络连接是否正常！'
      }

      if (errMessage) {
        showGlobalMessage(errorMessageMode, errMessage)
        return Promise.reject(error)
      }
    } catch (error) {
      throw new Error(error as unknown as string)
    }

    checkStatus(error?.response?.status, msg, errorMessageMode)
    return Promise.reject(error)
  }
}

/**
 * 清除空参数
 * @param obj
 */
function removeEmptyProperty(obj) {
  if (obj === null || obj === undefined || obj === '') {
    return {}
  }

  for (const prop in obj) {
    if (isString(obj[prop])) {
      obj[prop] = obj[prop].trim()
    }

    if (obj[prop] === '' || obj[prop] === undefined || obj[prop] === null) {
      delete obj[prop]
    }
  }
  return obj
}

function checkStatus(status: number, msg: string, errorMessageMode: ErrorMessageMode = 'message'): void {
  let errMessage = ''

  switch (status) {
    case 400:
      errMessage = `${msg}`
      break
    case 403:
      errMessage = '用户得到授权，但是访问是被禁止的！'
      break
    // 404请求不存在
    case 404:
      errMessage = '网络请求错误，未找到该资源！'
      break
    case 405:
      errMessage = '网络请求错误，请求方法未允许！'
      break
    case 408:
      errMessage = '网络请求超时！'
      break
    case 500:
      errMessage = '服务器错误，请联系管理员！'
      break
    case 501:
      errMessage = '网络未实现'
      break
    case 502:
      errMessage = '网络错误'
      break
    case 503:
      errMessage = '服务不可用，服务器暂时过载或维护!'
      break
    case 504:
      errMessage = '网络超时！'
      break
    case 505:
      errMessage = 'http版本不支持该请求！'
      break
    default:
  }

  if (errMessage) {
    showGlobalMessage(errorMessageMode, errMessage)
  }
}

/**
 * 弹出错误信息窗口
 * @param errorMessageMode
 * errorMessageMode=‘modal’，弹出modal错误弹窗，用于比较重要的错误;
 * errorMessageMode=‘message’，弹出message提示弹窗
 * errorMessageMode='none'，不弹出错误提示
 * @param errMsg 错误信息内容
 */
function showGlobalMessage(errorMessageMode, errMsg: string) {
  if (!appStore.globalMessageShowing) {
    appStore.setGlobalMessageShowing(true)
    if (errorMessageMode === 'modal') {
      createErrorModal({
        title: '错误提示',
        content: errMsg,
        onCancel: () => setTimeout(() => appStore.setGlobalMessageShowing(false), 1000),
        onOk: () => setTimeout(() => appStore.setGlobalMessageShowing(false), 1000)
      })
    } else if (errorMessageMode === 'message') {
      createMessage.error(errMsg, 1, () => setTimeout(() => appStore.setGlobalMessageShowing(false), 1000))
    }
  }
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new VAxios(
    deepMerge(
      {
        // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
        // authentication schemes，e.g: Bearer
        // authenticationScheme: 'Bearer',
        authenticationScheme: '',
        timeout: 100 * 1000,
        headers: { 'Content-Type': ContentTypeEnum.JSON },
        // 如果是form-data格式
        // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
        // 数据处理方式
        transform,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: true,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: 'message',
          // 接口地址
          apiUrl: VITE_GLOB_API_URL,
          // 接口拼接地址
          urlPrefix: urlPrefix,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true
        }
      },
      opt || {}
    )
  )
}
export const defHttp = createAxios()
