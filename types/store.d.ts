import { ErrorTypeEnum } from '@/enums/exceptionEnum'
import { MenuModeEnum, MenuTypeEnum } from '@/enums/menuEnum'

export interface RoleInfo {
  name: string
  code: string
  id: number
  type: string
}

// Lock screen information
export interface LockInfo {
  // Password required
  pwd?: string | undefined
  // Is it locked?
  isLock?: boolean
}

// Error-log information
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum
  // Error file
  file: string
  // Error name
  name?: string
  // Error message
  message: string
  // Error stack
  stack?: string
  // Error detail
  detail: string
  // Error url
  url: string
  // Error time
  time?: string
}

export interface UserInfo {
  id: string | number
  loginName: string
  userName: string
  avatar: string
  desc?: string
  homePath?: string
  roles: RoleInfo[]
  /** 机构ID */
  orgId: number
  /** 组织机构编码 */
  orgCode: string
  /** 组织机构名称 */
  orgName: string
  /** 站点类型 */
  stationType: Number
  /** 父节点id */
  parentId: number
  /** 机构类型ID */
  typeId: number
  /** 机构类型 */
  type: string
  /** 机构类型名称 */
  typeName: string
  /** 机构路径 */
  path: string
  menuPerms?: object[]
  lastLoginTime?: string
  /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
  userType: number
}

export interface BeforeMiniState {
  menuCollapsed?: boolean
  menuSplit?: boolean
  menuMode?: MenuModeEnum
  menuType?: MenuTypeEnum
}
