import { AxiosResponse } from 'axios'
import { useAppStoreWithOut } from '@/store/modules/app'
import { useUserStoreWithOut } from '@/store/modules/user'
import { useMessage } from '@/hooks/web/useMessage'
import { ResultEnum } from '@/enums/httpEnum'
import { BlobResp, Result } from '#/axios'

const appStore = useAppStoreWithOut()
const { createErrorModal } = useMessage()

/**
 * 弹出错误信息窗口
 * @param message - 错误信息内容.
 * @param callback - 回调方法.
 */
function showGlobalMessage(message: string, callback?: () => void) {
  if (!appStore.globalMessageShowing) {
    appStore.setGlobalMessageShowing(true)
    createErrorModal({
      title: '错误提示2',
      content: message,
      onCancel: () => {
        setTimeout(() => appStore.setGlobalMessageShowing(false), 1000)
      },
      onOk: () => {
        setTimeout(() => {
          appStore.setGlobalMessageShowing(false)
          if (callback) {
            callback()
          }
        }, 1000)
      }
    })
  }
}

export default {
  onFulfilled: async (res: AxiosResponse<Result>) => {
    if (res.data.status === ResultEnum.SUCCESS) {
      return res.data.data
    }

    // 返回blob格式，文件下载
    if (res.data instanceof Blob) {
      return <BlobResp>{
        data: res.data,
        type: res.headers['content-type'],
        name: decodeURIComponent(res.headers['content-disposition'].substring(res.headers['content-disposition'].indexOf('=') + 1))
      }
    }

    let dataErrMsg = res.data.message || 'Error'
    if ([-40104, -40105, -40107, -40108].indexOf(res.data.status) > -1) {
      // -40108: 未携带令牌
      // -40104: 令牌不存在（当前用户在它处登录）
      // -40105: 令牌过期处理
      // -40107: 密钥错误
      if ([-40105, -40107].indexOf(res.data.status) > -1) {
        dataErrMsg = '用户密钥已过期，请重新登录'
      }
      await showGlobalMessage(dataErrMsg, async () => {
        const userStore = useUserStoreWithOut()
        userStore.resetToken()
        location.reload()
      })
    } else if ([-40102].indexOf(res.data.status) > -1) {
      // -40102: 身份认证失败，错误的登录信息
      return Promise.reject(new Error('用户名或密码错误'))
    }

    await showGlobalMessage(dataErrMsg)
    return Promise.reject(new Error(dataErrMsg))
  },
  onRejected: async (error: any) => {
    let errMsg = error.message || (error.response && error.response.data.message) || '网络开小差了...'
    if (errMsg.indexOf('timeout') > -1) {
      errMsg = '请求超时，请稍侯再试...'
    }
    await showGlobalMessage(errMsg)
    return Promise.reject(error)
  }
}
