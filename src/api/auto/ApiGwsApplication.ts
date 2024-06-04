import * as base from './base'
import { GwsApplication } from './modal'

const s = 'ApiGwsApplication.'

/**
 * 分页获取应用列表
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_list_paged；
 */
export const findApplicationsPaged = base.createRequest<
  GwsApplication.findApplicationsPaged.Options,
  GwsApplication.findApplicationsPaged.Returns['data']
>(s + 'findApplicationsPaged', (params) => ({
  url: `/mgr/application/get_list_paged`,
  method: 'GET',
  params
}))

/**
 * 获取单个应用信息
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_one/{id}；
 */
export const findOneApplication = base.createRequest<
  GwsApplication.findOneApplication.Options,
  GwsApplication.findOneApplication.Returns['data']
>(s + 'findOneApplication', ({ id, ...params }) => ({
  url: `/mgr/application/get_one/${id}`,
  method: 'GET',
  params
}))

/**
 * 获取应用中心所有应用的关联信息（包括角色、设备）
 *
 * **TAG:** 04.应用管理服务； &nbsp;&nbsp; **PATH:** /mgr/application/get_uc_list；
 */
export const findUserCenterApplication = base.createNoParamsRequest<
  GwsApplication.findUserCenterApplication.Returns['data']
>(s + 'findUserCenterApplication', () => ({
  url: `/mgr/application/get_uc_list`,
  method: 'GET'
}))
