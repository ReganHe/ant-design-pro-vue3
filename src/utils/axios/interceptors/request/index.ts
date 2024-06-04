import { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { useUserStoreWithOut } from '@/store/modules/user'

const removeEmptyProperty = function (obj: object | null | undefined): object {
  if (obj === null || obj === undefined) {
    obj = {}
  } else if (typeof obj === 'object') {
    for (const prop in obj) {
      if (obj[prop] === '' || obj[prop] === undefined || obj[prop] === null) {
        delete obj[prop]
      }
    }
  }

  return obj
}

export default {
  onFulfilled: (config: AxiosRequestConfig) => {
    if (!config.headers) {
      config.headers = {}
    }

    if (config.method === 'get') {
      // 数组参数格式化
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
      // 清除空参数
      config.params = { ...removeEmptyProperty(config.params) }
      // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
      config.params = Object.assign(config.params || {}, { _t: new Date().getTime() })
    }

    // 统一身份认证
    const userStore = useUserStoreWithOut()
    if (userStore.token) {
      config.headers['Authorization'] = userStore.token
    }

    return config
  },
  onRejected: (error: any) => {
    console.log('request interceptor onRejected', error)
    return Promise.reject(error)
  }
}
