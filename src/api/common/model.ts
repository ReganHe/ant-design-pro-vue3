// 字典相关接口
export interface dicValueItem {
  id: Number
  typeId: Number
  typeKey: String
  dicCode: Number
  dicValue: String
}

export interface dicItem {
  typeKey: String
  dictValueList: dicValueItem[]
}
//#region 附件相关字典
export interface attachmentQuery {
  fileName?: String
  relationKey?: Number
  fileStatus?: Number
  type?: Number
}
export interface attachmentItem {
  id?: number
  fileName?: string
  createdBy?: string
  createdTime?: string
  effectiveDay?: string
  expiryDay?: string
  fileStatus?: number
  fileStatusDesc?: string
  url?: string
  type?: number
  relationKey?: number
  expireRemind?: string
  errorMsg?: string
}

export interface attachmentAddItem {
  fileList: attachmentItem[]
}
//#endregion

// 根据userid获取站点
export interface stationByUserItem {
  id: number
  userId: number
  loginName: string
  userType: number
  userName: string
  avatarGroup: string
  avatar: string
  avatarUrl: string
  status: string
  remark: string
  createdBy: string
  createdTime: string
  updatedBy: string
  updatedTime: string
  orgId: number
  orgCode: string
  orgName: string
  parentId: number
  typeId: number
  type: string
  typeName: string
  path: string
  roleIds: number[]
  deviceIds: number[]
  station: Station
  stationInfo: StationInfo
  supplierId: number
}

interface Station {
  id: number
  orgName: string
  orgShortName: string
  count: number
}

interface StationInfo {
  orgId: number
  orgName: string
  orgShortName: string
  orgArea: string
  address: string
  contact: string
  phoneNum: string[]
  manager: string
  workerCount: number
}
// 打包附件item
export interface AttachmentTagItem {
  relationKey: Number
  type: Number
}
