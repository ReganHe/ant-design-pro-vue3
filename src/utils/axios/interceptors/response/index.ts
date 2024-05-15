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
      title: '错误提示',
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
        name: decodeURIComponent(
          res.headers['content-disposition'].substring(
            res.headers['content-disposition'].indexOf('=') + 1
          )
        )
      }
    }

    let dataErrMsg = res.data.message || '请求出错，请稍侯再试...'
    switch (res.data.status) {
      case ResultEnum.TOKEN_NOT_EXIST:
      case ResultEnum.TOKEN_TIMEOUT:
      case ResultEnum.TOKEN_ERROR:
      case ResultEnum.NO_TOKEN:
        dataErrMsg = [ResultEnum.TOKEN_TIMEOUT, ResultEnum.TOKEN_ERROR].includes(res.data.status)
          ? '用户密钥已过期，请重新登录'
          : res.data.message
        showGlobalMessage(dataErrMsg, async () => {
          const userStore = useUserStoreWithOut()
          userStore.resetToken()
          location.reload()
        })
        break
      case ResultEnum.USER_INFO_ERROR:
        return Promise.reject(new Error('用户名或密码错误'))
      default:
        showGlobalMessage(dataErrMsg)
        return Promise.reject(new Error(dataErrMsg))
    }
  },
  onRejected: async (error: any) => {
    let errMsg =
      error.message || (error.response && error.response.data.message) || '网络开小差了...'
    if (errMsg.indexOf('timeout') > -1) {
      errMsg = '请求超时，请稍侯再试...'
    }
    showGlobalMessage(errMsg)
    return Promise.reject(error)
  }
}
