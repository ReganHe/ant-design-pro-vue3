import * as base from './base'
import { Img } from './modal'

const s = 'ApiImg.'

/**
 * 下载上传文件
 *
 * **TAG:** 多媒体服务； &nbsp;&nbsp; **PATH:** /1.0/img/get_upload_file；
 */
export const getUploadFile = base.createNoParamsBlobRequest(s + 'getUploadFile', () => ({
  url: `/1.0/img/get_upload_file`,
  method: 'GET'
}))
