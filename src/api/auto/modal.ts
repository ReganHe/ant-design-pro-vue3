// tslint:disable
/* eslint-disable */

export namespace GwsToken {
  export namespace exchangeRefreshToken {
    export interface Options {
      applicationId?: number;
      shortTermToken?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      token: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace preLogin {
    export interface Options {
      loginName?: string;
      password?: string;
      captcha?: string;
      bindKey?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      token: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace GwsAccount {
  export namespace accountLogin4Direct {
    export interface Options {
      applicationId?: number;
      deviceId?: number;
      loginName?: string;
      password?: string;
      wxUserId?: string;
      captcha?: string;
      bindKey?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      token: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace accountLogin4Frontend {
    export interface Options {
      applicationId?: number;
      deviceId?: number;
      loginName?: string;
      password?: string;
      wxUserId?: string;
      captcha?: string;
      bindKey?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      token: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace exchangeAccessToken {
    export interface Options {
      refreshToken?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      token: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace captcha {
    export interface Options {
      type: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      image: string;
      bindKey: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace accountLogout {
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace GwsUserInfo {
  export namespace modifyPassword {
    export interface Options {
      originalPassword?: string;
      newPassword?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace resetPassword {
    export interface Options {
      id?: number;
      resetPassword?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace unlock {
    export interface Options {
      /** 用户编号 */
      userId: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getCurrentLoginUserInfo {
    export interface ReturnsPropDataPropRolesSubItem {
      id: number;
      name: string;
      code: string;
      type: string;
    }
    export type ReturnsPropDataPropRoles = ReturnsPropDataPropRolesSubItem[];
    export interface ReturnsPropDataPropMenuPermsSubItemPropPermissionsSubItem {
      id: number;
      perms: string;
    }
    export type ReturnsPropDataPropMenuPermsSubItemPropPermissions =
      ReturnsPropDataPropMenuPermsSubItemPropPermissionsSubItem[];
    export interface ReturnsPropDataPropMenuPermsSubItem {
      menuId: number;
      menuName: string;
      menuUrl: string;
      permissions: ReturnsPropDataPropMenuPermsSubItemPropPermissions;
    }
    export type ReturnsPropDataPropMenuPerms = ReturnsPropDataPropMenuPermsSubItem[];
    /** 数据负载 */
    export interface ReturnsPropData {
      id: number;
      loginName: string;
      userName: string;
      userType: string;
      lastLoginIp: string;
      lastLoginTime: string;
      roles: ReturnsPropDataPropRoles;
      menuPerms: ReturnsPropDataPropMenuPerms;
      pwdExpiredInDays: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getLockedUserIdsByApplicationId {
    export interface Options {
      /** 应用编号 */
      applicationId: number;
    }
    export type O = Options;
    /** 数据负载 */
    export type ReturnsPropData = number[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace GwsApplication {
  export namespace findApplicationsPaged {
    export interface Options {
      /** 页码 */
      page_num: number;
      /** 每页记录数 */
      page_size: number;
    }
    export type O = Options;
    export type ReturnsPropDataPropListSubItemPropUserIds = number[];
    export type ReturnsPropDataPropListSubItemPropDeviceIds = number[];
    /** 数据负载 */
    export interface ReturnsPropDataPropListSubItem {
      id: number;
      name: string;
      code: string;
      type: string;
      description: string;
      status: string;
      createdBy: string;
      createdTime: string;
      updatedBy: string;
      updatedTime: string;
      userIds: ReturnsPropDataPropListSubItemPropUserIds;
      deviceIds: ReturnsPropDataPropListSubItemPropDeviceIds;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findOneApplication {
    export interface Options {
      /** 应用编号 */
      id: number;
    }
    export type O = Options;
    export type ReturnsPropDataPropUserIds = number[];
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 数据负载 */
    export interface ReturnsPropData {
      id: number;
      name: string;
      code: string;
      type: string;
      description: string;
      status: string;
      createdBy: string;
      createdTime: string;
      updatedBy: string;
      updatedTime: string;
      userIds: ReturnsPropDataPropUserIds;
      deviceIds: ReturnsPropDataPropDeviceIds;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findUserCenterApplication {
    /** 数据负载 */
    export interface ReturnsPropDataSubItemPropRolesSubItem {
      id: number;
      applicationId: number;
      name: string;
      code: string;
      type: string;
      description: string;
      status: string;
    }
    export type ReturnsPropDataSubItemPropRoles = ReturnsPropDataSubItemPropRolesSubItem[];
    export interface ReturnsPropDataSubItemPropDevicesSubItem {
      id: number;
      name: string;
      type: string;
      status: string;
    }
    export type ReturnsPropDataSubItemPropDevices = ReturnsPropDataSubItemPropDevicesSubItem[];
    /** 数据负载 */
    export interface ReturnsPropDataSubItem {
      applicationId: number;
      applicationName: string;
      applicationCode: string;
      roles: ReturnsPropDataSubItemPropRoles;
      devices: ReturnsPropDataSubItemPropDevices;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace GwsRole {
  export namespace addRole {
    export interface Options {
      name?: string;
      code?: string;
      type?: string;
      description?: string;
      status?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      id: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace saveRoleRefsMenuPermApi {
    export type OptionsPropMenuIds = number[];
    export type OptionsPropPermIds = number[];
    export type OptionsPropApiIds = number[];
    export interface Options {
      roleId?: number;
      menuIds?: OptionsPropMenuIds;
      permIds?: OptionsPropPermIds;
      apiIds?: OptionsPropApiIds;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findStaticMenu {
    /** 数据负载 */
    export interface ReturnsPropDataSubItemPropChildrenSubItem {
      deviceId: number;
      id: number;
      vid: string;
      name: string;
      parentId: number;
      url: string;
      type: string;
      perms: string;
      icon: string;
      orderNo: number;
    }
    export type ReturnsPropDataSubItemPropChildren = ReturnsPropDataSubItemPropChildrenSubItem[];
    /** 数据负载 */
    export interface ReturnsPropDataSubItem {
      deviceId: number;
      id: number;
      vid: string;
      name: string;
      parentId: number;
      url: string;
      type: string;
      perms: string;
      icon: string;
      orderNo: number;
      children: ReturnsPropDataSubItemPropChildren;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findRolesPaged {
    export interface Options {
      name?: string;
      code?: string;
      type?: string;
      status?: string;
      /** 页码 */
      page_num: number;
      /** 每页记录数 */
      page_size: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropDataPropListSubItem {
      id: number;
      applicationId: number;
      name: string;
      code: string;
      type: string;
      description: string;
      status: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findOneRole {
    export interface Options {
      /** 角色编号 */
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      id: number;
      applicationId: number;
      name: string;
      code: string;
      type: string;
      description: string;
      status: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findAllRoleRefsMenuPermApi {
    export interface Options {
      /** 角色编号 */
      id: number;
    }
    export type O = Options;
    export type ReturnsPropDataPropMenuVids = string[];
    export type ReturnsPropDataPropPermVids = string[];
    export type ReturnsPropDataPropApiIds = number[];
    /** 数据负载 */
    export interface ReturnsPropData {
      menuVids: ReturnsPropDataPropMenuVids;
      permVids: ReturnsPropDataPropPermVids;
      apiIds: ReturnsPropDataPropApiIds;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findAllApisPaged {
    export interface Options {
      /** 页码 */
      page_num: number;
      /** 每页记录数 */
      page_size: number;
    }
    export type O = Options;
    export interface ReturnsPropDataPropListSubItem {
      id: number;
      applicationId: number;
      deviceId: number;
      name: string;
      url: string;
      description: string;
      status: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyRole {
    export interface Options {
      id?: number;
      name?: string;
      code?: string;
      type?: string;
      description?: string;
      status?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeRole {
    export interface Options {
      /** 角色编号 */
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace GwsUser {
  export namespace addUser {
    export type OptionsPropRoleIds = number[];
    export type OptionsPropDeviceIds = number[];
    export interface Options {
      loginName?: string;
      userName?: string;
      password?: string;
      status?: string;
      roleIds?: OptionsPropRoleIds;
      deviceIds?: OptionsPropDeviceIds;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      id: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace findOneUser {
    export interface Options {
      /** 应用用户编号 */
      id: number;
    }
    export type O = Options;
    export type ReturnsPropDataPropRoleIds = number[];
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 数据负载 */
    export interface ReturnsPropData {
      id: number;
      loginName: string;
      userName: string;
      password: string;
      status: string;
      lastLoginIp: string;
      lastLoginTime: string;
      roleIds: ReturnsPropDataPropRoleIds;
      deviceIds: ReturnsPropDataPropDeviceIds;
      createdBy: string;
      createdTime: string;
      updatedBy: string;
      updatedTime: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyUser {
    export type OptionsPropRoleIds = number[];
    export type OptionsPropDeviceIds = number[];
    export interface Options {
      id?: number;
      loginName?: string;
      userName?: string;
      password?: string;
      status?: string;
      roleIds?: OptionsPropRoleIds;
      deviceIds?: OptionsPropDeviceIds;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeUser {
    export interface Options {
      /** 应用用户编号 */
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Lu {
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** LNG加气站卸车情况 */
    export interface ReturnsPropDataPropSituationListSubItem {
      /** 主键 */
      id: number;
      /** 储罐(卸车前) */
      potBefore: string;
      /** 储罐(卸车后) */
      potAfter: string;
      /** 槽车(卸车前) */
      carBefore: string;
      /** 槽车(卸车后) */
      carAfter: string;
      /** 净重(kg) */
      weight: number;
      /** 卸车情况检查项字典id */
      projectId: number;
      /** 卸车情况检查项 */
      projectDesc: string;
    }
    /** LNG加气站卸车情况 */
    export type ReturnsPropDataPropSituationList = ReturnsPropDataPropSituationListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropBeforeListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液前检查 */
    export type ReturnsPropDataPropBeforeList = ReturnsPropDataPropBeforeListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropProcessListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液过程检查 */
    export type ReturnsPropDataPropProcessList = ReturnsPropDataPropProcessListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropAfterListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液后检查 */
    export type ReturnsPropDataPropAfterList = ReturnsPropDataPropAfterListSubItem[];
    /** 查询LNG加气站卸车记录响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐名称 */
      vesselName: string;
      /** 卸车日期 */
      unloadDate: string;
      /** 承运单位 */
      carryCompany: string;
      /** 槽车车牌号 */
      carNumber: string;
      /** 槽车挂车号 */
      trailerNumber: string;
      /** 装车单流号 */
      loadingListNumber: string;
      /** 供货单过磅单编号 */
      weighNumber: string;
      /** 卸车开始时间 */
      unloadStartTime: string;
      /** 卸车结束时间 */
      unloadEndTime: string;
      /** 操作人 */
      operator: string;
      /** 司机 */
      driver: string;
      /** 值班班长 */
      shiftLeader: string;
      /** 备注 */
      remark: string;
      /** 站点名称 */
      stationName: string;
      /** 设备编号 */
      equipCode: string;
      /** LNG加气站卸车情况 */
      situationList: ReturnsPropDataPropSituationList;
      /** 卸液前检查 */
      beforeList: ReturnsPropDataPropBeforeList;
      /** 卸液过程检查 */
      processList: ReturnsPropDataPropProcessList;
      /** 卸液后检查 */
      afterList: ReturnsPropDataPropAfterList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 编号 */
      code?: string;
      /** 承运单位 */
      carryCompany?: string;
      /** 开始卸车日期 */
      beginDate?: string;
      /** 结束卸车日期 */
      endDate?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** LNG加气站卸车情况 */
    export interface ReturnsPropDataPropListSubItemPropSituationListSubItem {
      /** 主键 */
      id: number;
      /** 储罐(卸车前) */
      potBefore: string;
      /** 储罐(卸车后) */
      potAfter: string;
      /** 槽车(卸车前) */
      carBefore: string;
      /** 槽车(卸车后) */
      carAfter: string;
      /** 净重(kg) */
      weight: number;
      /** 卸车情况检查项字典id */
      projectId: number;
      /** 卸车情况检查项 */
      projectDesc: string;
    }
    /** LNG加气站卸车情况 */
    export type ReturnsPropDataPropListSubItemPropSituationList =
      ReturnsPropDataPropListSubItemPropSituationListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropListSubItemPropBeforeListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液前检查 */
    export type ReturnsPropDataPropListSubItemPropBeforeList =
      ReturnsPropDataPropListSubItemPropBeforeListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropListSubItemPropProcessListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液过程检查 */
    export type ReturnsPropDataPropListSubItemPropProcessList =
      ReturnsPropDataPropListSubItemPropProcessListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropListSubItemPropAfterListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液后检查 */
    export type ReturnsPropDataPropListSubItemPropAfterList =
      ReturnsPropDataPropListSubItemPropAfterListSubItem[];
    /** 查询LNG加气站卸车记录响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐名称 */
      vesselName: string;
      /** 卸车日期 */
      unloadDate: string;
      /** 承运单位 */
      carryCompany: string;
      /** 槽车车牌号 */
      carNumber: string;
      /** 槽车挂车号 */
      trailerNumber: string;
      /** 装车单流号 */
      loadingListNumber: string;
      /** 供货单过磅单编号 */
      weighNumber: string;
      /** 卸车开始时间 */
      unloadStartTime: string;
      /** 卸车结束时间 */
      unloadEndTime: string;
      /** 操作人 */
      operator: string;
      /** 司机 */
      driver: string;
      /** 值班班长 */
      shiftLeader: string;
      /** 备注 */
      remark: string;
      /** 站点名称 */
      stationName: string;
      /** 设备编号 */
      equipCode: string;
      /** LNG加气站卸车情况 */
      situationList: ReturnsPropDataPropListSubItemPropSituationList;
      /** 卸液前检查 */
      beforeList: ReturnsPropDataPropListSubItemPropBeforeList;
      /** 卸液过程检查 */
      processList: ReturnsPropDataPropListSubItemPropProcessList;
      /** 卸液后检查 */
      afterList: ReturnsPropDataPropListSubItemPropAfterList;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace initDayInspectData {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /** LNG加气站卸车情况 */
    export interface ReturnsPropDataPropSituationListSubItem {
      /** 主键 */
      id: number;
      /** 储罐(卸车前) */
      potBefore: string;
      /** 储罐(卸车后) */
      potAfter: string;
      /** 槽车(卸车前) */
      carBefore: string;
      /** 槽车(卸车后) */
      carAfter: string;
      /** 净重(kg) */
      weight: number;
      /** 卸车情况检查项字典id */
      projectId: number;
      /** 卸车情况检查项 */
      projectDesc: string;
    }
    /** LNG加气站卸车情况 */
    export type ReturnsPropDataPropSituationList = ReturnsPropDataPropSituationListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropBeforeListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液前检查 */
    export type ReturnsPropDataPropBeforeList = ReturnsPropDataPropBeforeListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropProcessListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液过程检查 */
    export type ReturnsPropDataPropProcessList = ReturnsPropDataPropProcessListSubItem[];
    /** LNG加气站卸车检查 */
    export interface ReturnsPropDataPropAfterListSubItem {
      /** 主键 */
      id: number;
      /** 主键 */
      checkId: number;
      /** 检查内容 */
      checkDesc: string;
      /** 检查标准 */
      checkStandard: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult: string;
    }
    /** 卸液后检查 */
    export type ReturnsPropDataPropAfterList = ReturnsPropDataPropAfterListSubItem[];
    /** 查询LNG加气站卸车记录响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐名称 */
      vesselName: string;
      /** 卸车日期 */
      unloadDate: string;
      /** 承运单位 */
      carryCompany: string;
      /** 槽车车牌号 */
      carNumber: string;
      /** 槽车挂车号 */
      trailerNumber: string;
      /** 装车单流号 */
      loadingListNumber: string;
      /** 供货单过磅单编号 */
      weighNumber: string;
      /** 卸车开始时间 */
      unloadStartTime: string;
      /** 卸车结束时间 */
      unloadEndTime: string;
      /** 操作人 */
      operator: string;
      /** 司机 */
      driver: string;
      /** 值班班长 */
      shiftLeader: string;
      /** 备注 */
      remark: string;
      /** 站点名称 */
      stationName: string;
      /** 设备编号 */
      equipCode: string;
      /** LNG加气站卸车情况 */
      situationList: ReturnsPropDataPropSituationList;
      /** 卸液前检查 */
      beforeList: ReturnsPropDataPropBeforeList;
      /** 卸液过程检查 */
      processList: ReturnsPropDataPropProcessList;
      /** 卸液后检查 */
      afterList: ReturnsPropDataPropAfterList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace persist {
    /** LNG加气站卸车情况 */
    export interface OptionsPropSituationListSubItem {
      /** 主键 */
      id?: number;
      /** 储罐(卸车前) */
      potBefore?: string;
      /** 储罐(卸车后) */
      potAfter?: string;
      /** 槽车(卸车前) */
      carBefore?: string;
      /** 槽车(卸车后) */
      carAfter?: string;
      /** 净重(kg) */
      weight?: number;
      /** 卸车情况检查项字典id */
      projectId?: number;
      /** 卸车情况检查项 */
      projectDesc?: string;
    }
    /** LNG加气站卸车情况 */
    export type OptionsPropSituationList = OptionsPropSituationListSubItem[];
    /** LNG加气站卸车检查 */
    export interface OptionsPropBeforeListSubItem {
      /** 主键 */
      id?: number;
      /** 主键 */
      checkId?: number;
      /** 检查内容 */
      checkDesc?: string;
      /** 检查标准 */
      checkStandard?: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult?: string;
    }
    /** 卸液前检查 */
    export type OptionsPropBeforeList = OptionsPropBeforeListSubItem[];
    /** LNG加气站卸车检查 */
    export interface OptionsPropProcessListSubItem {
      /** 主键 */
      id?: number;
      /** 主键 */
      checkId?: number;
      /** 检查内容 */
      checkDesc?: string;
      /** 检查标准 */
      checkStandard?: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult?: string;
    }
    /** 卸液过程检查 */
    export type OptionsPropProcessList = OptionsPropProcessListSubItem[];
    /** LNG加气站卸车检查 */
    export interface OptionsPropAfterListSubItem {
      /** 主键 */
      id?: number;
      /** 主键 */
      checkId?: number;
      /** 检查内容 */
      checkDesc?: string;
      /** 检查标准 */
      checkStandard?: string;
      /** 结果 0：未选 1：勾 -1：叉 */
      checkResult?: string;
    }
    /** 卸液后检查 */
    export type OptionsPropAfterList = OptionsPropAfterListSubItem[];
    /** LNG加气站卸车记录持久化请求 */
    export interface Options {
      /** 主键 */
      id?: number;
      /** 站点id */
      stationId?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐名称 */
      vesselName?: string;
      /** 卸车日期 */
      unloadDate?: string;
      /** 承运单位 */
      carryCompany?: string;
      /** 槽车车牌号 */
      carNumber?: string;
      /** 槽车挂车号 */
      trailerNumber?: string;
      /** 装车单流号 */
      loadingListNumber?: string;
      /** 供货单过磅单编号 */
      weighNumber?: string;
      /** 卸车开始时间 */
      unloadStartTime?: string;
      /** 卸车结束时间 */
      unloadEndTime?: string;
      /** 操作人 */
      operator?: string;
      /** 司机 */
      driver?: string;
      /** 值班班长 */
      shiftLeader?: string;
      /** 备注 */
      remark?: string;
      /** 站点名称 */
      stationName?: string;
      /** LNG加气站卸车情况 */
      situationList?: OptionsPropSituationList;
      /** 卸液前检查 */
      beforeList?: OptionsPropBeforeList;
      /** 卸液过程检查 */
      processList?: OptionsPropProcessList;
      /** 卸液后检查 */
      afterList?: OptionsPropAfterList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Sp {
  export namespace getByYear {
    export interface Options {
      year: string;
    }
    export type O = Options;
    /** 安全检测各计划站点 */
    export interface ReturnsPropDataSubItemPropDataListSubItem {
      /** 主键 */
      id: number;
      /** 全检测计划字典表id：对应字典表中的主键 */
      planId: number;
      /** 安全检测计划名称 */
      planDesc: string;
      /** 站点（可多选用逗号分隔） */
      stations: string;
    }
    /** 各月检查站点列表 */
    export type ReturnsPropDataSubItemPropDataList = ReturnsPropDataSubItemPropDataListSubItem[];
    /** 安全检测计划表查询响应 */
    export interface ReturnsPropDataSubItem {
      /** 安全检测计划月字典表id：对应字典表中的主键 */
      planMonthId: number;
      /** 安全检测计划月 */
      planMonthDesc: string;
      /** 各月检查站点列表 */
      dataList: ReturnsPropDataSubItemPropDataList;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeStation {
    /** 安全检测站点删除请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 删除的站点名称 */
      removeStation: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace persist {
    /** 站点集合 */
    export type OptionsPropStationList = string[];
    /** 安全检测计划持久化请求 */
    export interface Options {
      /** 年份 */
      planYear: string;
      /** 安全检测计划id */
      planId: number;
      /** 安全检测计划月id */
      planMonthId: number;
      /** 站点集合 */
      stationList: OptionsPropStationList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Spf {
  export namespace add {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 安全监测计划文件添加请求 */
    export interface Options {
      /** 安全检测计划字典表id */
      planId: number;
      /** 站点id */
      stationId: number;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropAttachmentsSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 附件列表 */
    export type ReturnsPropDataPropAttachments = ReturnsPropDataPropAttachmentsSubItem[];
    /** 安全监测计划文件主键查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 附件id */
      fileId: number;
      /** 文件名 */
      fileName: string;
      /** 安全检测计划字典表id：对应字典表中的主键 */
      planId: number;
      /** 安全检测计划名称 */
      planDesc: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 上传时间 */
      time: string;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus: number;
      /** 附件状态描述 */
      fileStatusDesc: string;
      /** 有效期 */
      period: string;
      /** 附件列表 */
      attachments: ReturnsPropDataPropAttachments;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 安全检测计划字典表id：对应字典表中的主键 */
      planId?: number;
      /** 站点id */
      stationId?: number;
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus?: number;
      /** 主键集合 */
      idList?: any[];
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 安全监测计划文件查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 附件id */
      fileId: number;
      /** 文件名 */
      fileName: string;
      /** 安全检测计划字典表id：对应字典表中的主键 */
      planId: number;
      /** 安全检测计划名称 */
      planDesc: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 上传时间 */
      time: string;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus: number;
      /** 附件状态描述 */
      fileStatusDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getByYear {
    export interface Options {
      year: string;
    }
    export type O = Options;
    /** 安全检测各计划站点 */
    export interface ReturnsPropDataSubItemPropDataListSubItem {
      /** 主键 */
      id: number;
      /** 全检测计划字典表id：对应字典表中的主键 */
      planId: number;
      /** 安全检测计划名称 */
      planDesc: string;
      /** 站点（可多选用逗号分隔） */
      stations: string;
    }
    /** 各月检查站点列表 */
    export type ReturnsPropDataSubItemPropDataList = ReturnsPropDataSubItemPropDataListSubItem[];
    /** 安全检测计划表查询响应 */
    export interface ReturnsPropDataSubItem {
      /** 安全检测计划月字典表id：对应字典表中的主键 */
      planMonthId: number;
      /** 安全检测计划月 */
      planMonthDesc: string;
      /** 各月检查站点列表 */
      dataList: ReturnsPropDataSubItemPropDataList;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 安全监测计划文件编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 安全检测计划字典表id */
      planId?: number;
      /** 站点id */
      stationId?: number;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Sc {
  export namespace exportExcel {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查单编号 */
      orderNo?: string;
      /** 状态 1-检查中 2-检查完成 */
      status?: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate?: string;
      /** 检查开始日期 */
      checkStartDate?: string;
      /** 检查结束日期 */
      checkEndDate?: string;
      /** 提交开始日期 */
      submitStartDate?: string;
      /** 提交结束日期 */
      submitEndDate?: string;
      /** 类型 1-日 2-月 */
      type?: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace initDayInspectData {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /** 储罐巡检内容 */
    export interface ReturnsPropDataPropVesselListSubItemPropPvContentListSubItem {
      /** 主键 */
      id: number;
      /** 压力容器id */
      pvId: number;
      /** 巡检时间 */
      time: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 对应重量（Kg） */
      weight: string;
      /** 泵池温度（摄氏度） */
      temperature: string;
      /** 安检情况 0-正常 1-撬内是否有泄漏 2-空压机是否正常 3-是否有外来可疑人员 4-是否有外来可疑物品 */
      result: number;
    }
    /** 储罐巡检内容列表 */
    export type ReturnsPropDataPropVesselListSubItemPropPvContentList =
      ReturnsPropDataPropVesselListSubItemPropPvContentListSubItem[];
    /** 储罐巡检 */
    export interface ReturnsPropDataPropVesselListSubItem {
      /** 压力容器id */
      pvId: number;
      /** 设备简称 */
      shortName: string;
      /** 列表有几行 */
      columns: number;
      /** 储罐巡检内容列表 */
      pvContentList: ReturnsPropDataPropVesselListSubItemPropPvContentList;
    }
    /** 储罐巡检列表 */
    export type ReturnsPropDataPropVesselList = ReturnsPropDataPropVesselListSubItem[];
    /** 巡检结果 0：未选 1：勾 -1：叉 */
    export type ReturnsPropDataPropAreaListSubItemPropContentListSubItemPropResults = number[];
    /** 巡检内容 */
    export interface ReturnsPropDataPropAreaListSubItemPropContentListSubItem {
      /** id */
      id: number;
      /** 巡检内容id（对应字典id） */
      contentId: number;
      /** 巡检内容 */
      content: string;
      /** 巡检结果 0：未选 1：勾 -1：叉 */
      results: ReturnsPropDataPropAreaListSubItemPropContentListSubItemPropResults;
      /** 巡检次数 */
      times: number;
    }
    /** 巡检内容列表 */
    export type ReturnsPropDataPropAreaListSubItemPropContentList =
      ReturnsPropDataPropAreaListSubItemPropContentListSubItem[];
    /** 巡检区域 */
    export interface ReturnsPropDataPropAreaListSubItem {
      /** 巡检区域id（对应字典类型id） */
      areaId: number;
      /** 巡检区域名称 */
      areaDesc: string;
      /** 巡检内容列表 */
      contentList: ReturnsPropDataPropAreaListSubItemPropContentList;
    }
    /** 巡检区域内容列表 */
    export type ReturnsPropDataPropAreaList = ReturnsPropDataPropAreaListSubItem[];
    /** 安全检查单查询响应（日） */
    export interface ReturnsPropData {
      /** 检查单id */
      id: number;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 巡检人 */
      inspector: string;
      /** 单据编号 */
      orderNo: string;
      /** 班别 1-1班 2-2班 3-3班 4-4班 */
      groups: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 备注 */
      remark: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 班次类型名称 */
      shiftTypeDesc: string;
      /** 储罐巡检列表 */
      vesselList: ReturnsPropDataPropVesselList;
      /** 巡检区域内容列表 */
      areaList: ReturnsPropDataPropAreaList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getDayOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 储罐巡检内容 */
    export interface ReturnsPropDataPropVesselListSubItemPropPvContentListSubItem {
      /** 主键 */
      id: number;
      /** 压力容器id */
      pvId: number;
      /** 巡检时间 */
      time: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 对应重量（Kg） */
      weight: string;
      /** 泵池温度（摄氏度） */
      temperature: string;
      /** 安检情况 0-正常 1-撬内是否有泄漏 2-空压机是否正常 3-是否有外来可疑人员 4-是否有外来可疑物品 */
      result: number;
    }
    /** 储罐巡检内容列表 */
    export type ReturnsPropDataPropVesselListSubItemPropPvContentList =
      ReturnsPropDataPropVesselListSubItemPropPvContentListSubItem[];
    /** 储罐巡检 */
    export interface ReturnsPropDataPropVesselListSubItem {
      /** 压力容器id */
      pvId: number;
      /** 设备简称 */
      shortName: string;
      /** 列表有几行 */
      columns: number;
      /** 储罐巡检内容列表 */
      pvContentList: ReturnsPropDataPropVesselListSubItemPropPvContentList;
    }
    /** 储罐巡检列表 */
    export type ReturnsPropDataPropVesselList = ReturnsPropDataPropVesselListSubItem[];
    /** 巡检结果 0：未选 1：勾 -1：叉 */
    export type ReturnsPropDataPropAreaListSubItemPropContentListSubItemPropResults = number[];
    /** 巡检内容 */
    export interface ReturnsPropDataPropAreaListSubItemPropContentListSubItem {
      /** id */
      id: number;
      /** 巡检内容id（对应字典id） */
      contentId: number;
      /** 巡检内容 */
      content: string;
      /** 巡检结果 0：未选 1：勾 -1：叉 */
      results: ReturnsPropDataPropAreaListSubItemPropContentListSubItemPropResults;
      /** 巡检次数 */
      times: number;
    }
    /** 巡检内容列表 */
    export type ReturnsPropDataPropAreaListSubItemPropContentList =
      ReturnsPropDataPropAreaListSubItemPropContentListSubItem[];
    /** 巡检区域 */
    export interface ReturnsPropDataPropAreaListSubItem {
      /** 巡检区域id（对应字典类型id） */
      areaId: number;
      /** 巡检区域名称 */
      areaDesc: string;
      /** 巡检内容列表 */
      contentList: ReturnsPropDataPropAreaListSubItemPropContentList;
    }
    /** 巡检区域内容列表 */
    export type ReturnsPropDataPropAreaList = ReturnsPropDataPropAreaListSubItem[];
    /** 安全检查单查询响应（日） */
    export interface ReturnsPropData {
      /** 检查单id */
      id: number;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 巡检人 */
      inspector: string;
      /** 单据编号 */
      orderNo: string;
      /** 班别 1-1班 2-2班 3-3班 4-4班 */
      groups: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 备注 */
      remark: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 班次类型名称 */
      shiftTypeDesc: string;
      /** 储罐巡检列表 */
      vesselList: ReturnsPropDataPropVesselList;
      /** 巡检区域内容列表 */
      areaList: ReturnsPropDataPropAreaList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getDayPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查单编号 */
      orderNo?: string;
      /** 状态 1-检查中 2-检查完成 */
      status?: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate?: string;
      /** 检查开始日期 */
      checkStartDate?: string;
      /** 检查结束日期 */
      checkEndDate?: string;
      /** 提交开始日期 */
      submitStartDate?: string;
      /** 提交结束日期 */
      submitEndDate?: string;
      /** 类型 1-日 2-月 */
      type?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 安全检查查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 检查单编号 */
      orderNo: string;
      /** 工单id */
      workOrderId: number;
      /** 巡检人 */
      inspector: string;
      /** 班别 1-1班 2-2班 3-3班 4-4班 */
      groups: number;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 站点id */
      stationId: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 提交日期 */
      submitDate: string;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 处理结果 */
      handleResult: string;
      /** 站点名称 */
      stationName: string;
      /** 班别名称 */
      groupsDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 备注 */
      remark: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 班次类型名称 */
      shiftTypeDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getMonthOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 巡检内容（月） */
    export interface ReturnsPropDataPropDeviceListSubItemPropMonthListSubItem {
      /** id */
      id: number;
      /** 巡检内容id（对应字典id） */
      operationId: number;
      /** 巡检内容 */
      operation: string;
      /** 异常内容 */
      content: string;
      /** 检查日期 */
      inspectDate: string;
      /** 巡检结果 1：正常 2：异常 */
      result: number;
    }
    /** 巡检内容列表 */
    export type ReturnsPropDataPropDeviceListSubItemPropMonthList =
      ReturnsPropDataPropDeviceListSubItemPropMonthListSubItem[];
    /** 巡检设备 */
    export interface ReturnsPropDataPropDeviceListSubItem {
      /** 巡检设备id */
      deviceId: number;
      /** 巡检设备名称 */
      deviceDesc: string;
      /** 巡检内容列表 */
      monthList: ReturnsPropDataPropDeviceListSubItemPropMonthList;
    }
    /** 巡检设备列表 */
    export type ReturnsPropDataPropDeviceList = ReturnsPropDataPropDeviceListSubItem[];
    /** 安全检查单查询响应（月） */
    export interface ReturnsPropData {
      /** 检查单id */
      id: number;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 单据编号 */
      orderNo: string;
      /** 检查日期/年月 */
      checkDate: string;
      /** 检查人员 */
      inspector: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 巡检设备列表 */
      deviceList: ReturnsPropDataPropDeviceList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getMonthPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查单编号 */
      orderNo?: string;
      /** 状态 1-检查中 2-检查完成 */
      status?: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate?: string;
      /** 检查开始日期 */
      checkStartDate?: string;
      /** 检查结束日期 */
      checkEndDate?: string;
      /** 提交开始日期 */
      submitStartDate?: string;
      /** 提交结束日期 */
      submitEndDate?: string;
      /** 类型 1-日 2-月 */
      type?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 安全检查查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 检查单编号 */
      orderNo: string;
      /** 工单id */
      workOrderId: number;
      /** 巡检人 */
      inspector: string;
      /** 班别 1-1班 2-2班 3-3班 4-4班 */
      groups: number;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 站点id */
      stationId: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 提交日期 */
      submitDate: string;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 处理结果 */
      handleResult: string;
      /** 站点名称 */
      stationName: string;
      /** 班别名称 */
      groupsDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 备注 */
      remark: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 班次类型名称 */
      shiftTypeDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace initMonthInspectData {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /** 巡检内容（月） */
    export interface ReturnsPropDataPropDeviceListSubItemPropMonthListSubItem {
      /** id */
      id: number;
      /** 巡检内容id（对应字典id） */
      operationId: number;
      /** 巡检内容 */
      operation: string;
      /** 异常内容 */
      content: string;
      /** 检查日期 */
      inspectDate: string;
      /** 巡检结果 1：正常 2：异常 */
      result: number;
    }
    /** 巡检内容列表 */
    export type ReturnsPropDataPropDeviceListSubItemPropMonthList =
      ReturnsPropDataPropDeviceListSubItemPropMonthListSubItem[];
    /** 巡检设备 */
    export interface ReturnsPropDataPropDeviceListSubItem {
      /** 巡检设备id */
      deviceId: number;
      /** 巡检设备名称 */
      deviceDesc: string;
      /** 巡检内容列表 */
      monthList: ReturnsPropDataPropDeviceListSubItemPropMonthList;
    }
    /** 巡检设备列表 */
    export type ReturnsPropDataPropDeviceList = ReturnsPropDataPropDeviceListSubItem[];
    /** 安全检查单查询响应（月） */
    export interface ReturnsPropData {
      /** 检查单id */
      id: number;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 单据编号 */
      orderNo: string;
      /** 检查日期/年月 */
      checkDate: string;
      /** 检查人员 */
      inspector: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 巡检设备列表 */
      deviceList: ReturnsPropDataPropDeviceList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace dayPersist {
    /** 储罐巡检内容 */
    export interface OptionsPropPvContentListSubItem {
      /** 主键 */
      id?: number;
      /** 压力容器id */
      pvId?: number;
      /** 巡检时间 */
      time?: string;
      /** 压力（Mpa） */
      pressure?: string;
      /** 饱和（Mpa） */
      saturated?: string;
      /** 液位（mmH2O） */
      liquidLevel?: string;
      /** 对应重量（Kg） */
      weight?: string;
      /** 泵池温度（摄氏度） */
      temperature?: string;
      /** 安检情况 0-正常 1-撬内是否有泄漏 2-空压机是否正常 3-是否有外来可疑人员 4-是否有外来可疑物品 */
      result?: number;
    }
    /** 储罐巡检列表 */
    export type OptionsPropPvContentList = OptionsPropPvContentListSubItem[];
    /** 巡检结果 0：未选 1：勾 -1：叉 */
    export type OptionsPropContentListSubItemPropResults = number[];
    /** 巡检内容 */
    export interface OptionsPropContentListSubItem {
      /** id */
      id?: number;
      /** 巡检内容id（对应字典id） */
      contentId?: number;
      /** 巡检内容 */
      content?: string;
      /** 巡检结果 0：未选 1：勾 -1：叉 */
      results?: OptionsPropContentListSubItemPropResults;
      /** 巡检次数 */
      times?: number;
    }
    /** 巡检内容列表 */
    export type OptionsPropContentList = OptionsPropContentListSubItem[];
    /** 持久化检查单（日）请求 */
    export interface Options {
      /** 检查单id */
      id?: number;
      /** 站点id */
      stationId: number;
      /** 巡检人 */
      inspector?: string;
      /** 班别 1-1班 2-2班 3-3班 4-4班 */
      groups?: number;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 备注 */
      remark?: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType?: number;
      /** 储罐巡检列表 */
      pvContentList?: OptionsPropPvContentList;
      /** 巡检内容列表 */
      contentList: OptionsPropContentList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace monthPersist {
    /** 巡检内容（月） */
    export interface OptionsPropMonthListSubItem {
      /** id */
      id?: number;
      /** 巡检内容id（对应字典id） */
      operationId?: number;
      /** 巡检内容 */
      operation?: string;
      /** 异常内容 */
      content?: string;
      /** 检查日期 */
      inspectDate?: string;
      /** 巡检结果 1：正常 2：异常 */
      result?: number;
    }
    /** 巡检内容列表 */
    export type OptionsPropMonthList = OptionsPropMonthListSubItem[];
    /** 持久化检查单（月）请求 */
    export interface Options {
      /** 检查单id */
      id?: number;
      /** 站点id */
      stationId: number;
      /** 巡检人 */
      inspector?: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 巡检内容列表 */
      monthList: OptionsPropMonthList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace dayRemove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace monthRemove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace SafetyTraining {
  export namespace add {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    export interface Options {
      /** 所属机构id */
      orgId: number;
      /** 培训名称 */
      name: string;
      /** 开始时间 */
      startTime: string;
      /** 结束时间 */
      endTime: string;
      /** 培训性质: 0-内部培训 1-外部培训 */
      type: string;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropAttachmentsSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 附件列表 */
    export type ReturnsPropDataPropAttachments = ReturnsPropDataPropAttachmentsSubItem[];
    /** 数据负载 */
    export interface ReturnsPropData {
      /** 主键id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 培训名称 */
      name: string;
      /** 开始时间 */
      startTime: string;
      /** 结束时间 */
      endTime: string;
      /** 培训性质: 0-内部培训 1-外部培训 */
      type: string;
      /** 附件列表 */
      attachments: ReturnsPropDataPropAttachments;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 模糊查询名称 */
      name?: string;
      /** 所属机构 */
      orgId?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    export interface ReturnsPropDataPropListSubItem {
      /** 主键id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 机构简称 */
      orgName: string;
      /** 培训名称 */
      name: string;
      /** 开始时间 */
      startTime: string;
      /** 结束时间 */
      endTime: string;
      /** 培训性质: 0-内部培训 1-外部培训 */
      type: string;
      /** 培训范围描述 */
      typeDesc: string;
      /** 上传时间 */
      uploadDate: string;
      /** 附件数量 */
      count: number;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    export interface Options {
      /** 主键id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 培训名称 */
      name: string;
      /** 开始时间 */
      startTime: string;
      /** 结束时间 */
      endTime: string;
      /** 培训性质: 0-内部培训 1-外部培训 */
      type: string;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Device {
  export namespace add {
    /** 常规设备新增请求 */
    export interface Options {
      /** 设备名称 */
      name: string;
      /** 所属站点 */
      stationId: number;
      /** 规格型号 */
      specification?: string;
      /** 生产厂家 */
      manufacturer?: number;
      /** 启用日期 */
      usingDate?: string;
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure?: number;
      /** 实际数量 */
      actualQuantity?: number;
      /** 安装位置 */
      installationPosition?: string;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 用气监控查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name: string;
      /** 所属站点id */
      stationId: number;
      /** 所属站点 */
      stationName: string;
      /** 规格型号 */
      specification: string;
      /** 生产厂家 */
      manufacturer: number;
      /** 生产厂家中文 */
      manufacturerDesc: string;
      /** 启用日期 */
      usingDate: string;
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure: number;
      /** 计量单位描述 */
      unitMeasureDesc: string;
      /** 实际数量 */
      actualQuantity: number;
      /** 安装位置 */
      installationPosition: string;
      /** 备注 */
      remark: string;
      /** 状态 1-正常 */
      status: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 设备名称 */
      name?: string;
      /** 生产厂家 */
      manufacturer?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 用气监控查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name: string;
      /** 所属站点id */
      stationId: number;
      /** 所属站点 */
      stationName: string;
      /** 规格型号 */
      specification: string;
      /** 生产厂家 */
      manufacturer: number;
      /** 生产厂家中文 */
      manufacturerDesc: string;
      /** 启用日期 */
      usingDate: string;
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure: number;
      /** 计量单位描述 */
      unitMeasureDesc: string;
      /** 实际数量 */
      actualQuantity: number;
      /** 安装位置 */
      installationPosition: string;
      /** 备注 */
      remark: string;
      /** 状态 1-正常 */
      status: number;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 编辑设备编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name?: string;
      /** 所属站点 */
      stationId?: number;
      /** 规格型号 */
      specification?: string;
      /** 生产厂家 */
      manufacturer?: number;
      /** 启用日期 */
      usingDate?: string;
      /** 计量单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      unitMeasure?: number;
      /** 实际数量 */
      actualQuantity?: number;
      /** 安装位置 */
      installationPosition?: string;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Gsb {
  export namespace add {
    /** 常规物资台帐新增请求 */
    export interface Options {
      /** 物资名称 */
      name: string;
      /** 接收人 */
      receiver: string;
      /** 站点id */
      stationId?: number;
      /** 接收时间 */
      receiveDate: string;
      /** 数量 */
      quantity?: number;
      /** 单位 1-台 2-套 3-个 4-只 5-辆 6-项 7-把 8-桶 9-包 10-瓶 */
      quantityUnit?: number;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 物资名称 */
      name?: string;
      /** 开始报修日期 */
      beginDate?: string;
      /** 结束报修日期 */
      endDate?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 常规物资台帐查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 物资名称 */
      name: string;
      /** 接收人 */
      receiver: string;
      /** 站点id */
      stationId: number;
      /** 接收时间 */
      receiveDate: string;
      /** 数量 */
      quantity: number;
      /** 单位 1-台 2-套 3-个 4-只 5-辆 6-项 */
      quantityUnit: number;
      /** 备注 */
      remark: string;
      /** 站点名称 */
      stationName: string;
      /** 单位名称 */
      quantityUnitDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Mu {
  export namespace getByCondition {
    export interface Options {
      /** 厂家/单位名称 */
      name?: string;
      /** 类型 1-生产厂家 2-检验单位 3-维护保养单位 4-设计单位 5-安装单位 */
      type?: number;
    }
    export type O = Options;
    /** 厂家/单位查询响应 */
    export interface ReturnsPropDataSubItem {
      /** 主键 */
      id: number;
      /** 厂家/单位名称 */
      name: string;
      /** 类型 1-生产厂家 2-检验单位 3-维护保养单位 4-设计单位 5-安装单位 */
      type: number;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace VehicleManage {
  export namespace addExternal {
    /** 附件上传请求 */
    export interface OptionsPropDriverLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件上传请求 */
    export interface OptionsPropDrivingLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    export interface Options {
      /** 车牌号 */
      licenseNum: string;
      /** 槽罐车编号 */
      vehicleCode: string;
      /** 驾驶员 */
      driverName?: string;
      /** 联系方式 */
      contact?: string;
      /** 所属公司 */
      company?: string;
      /** 关联站点id */
      orgId?: number;
      driverLicense?: OptionsPropDriverLicense;
      drivingLicense?: OptionsPropDrivingLicense;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace addInternal {
    /** 附件上传请求 */
    export interface OptionsPropDriverLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件上传请求 */
    export interface OptionsPropDrivingLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    export interface Options {
      /** 车牌号 */
      licenseNum: string;
      /** 驾驶员 */
      driverName?: string;
      /** 联系方式 */
      contact?: string;
      driverLicense?: OptionsPropDriverLicense;
      drivingLicense?: OptionsPropDrivingLicense;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getExternalOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropDriverLicense {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 附件查询响应 */
    export interface ReturnsPropDataPropDrivingLicense {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 数据负载 */
    export interface ReturnsPropData {
      /** 主键id */
      id: number;
      /** 车牌号 */
      licenseNum: string;
      /** 槽罐车编号 */
      vehicleCode: string;
      /** 驾驶员 */
      driverName: string;
      /** 驾驶员 */
      contact: string;
      /** 所属公司 */
      company: string;
      /** 关联站点id */
      orgId: number;
      /** 站点名称 */
      orgName: string;
      driverLicense: ReturnsPropDataPropDriverLicense;
      drivingLicense: ReturnsPropDataPropDrivingLicense;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getExternalPaged {
    export interface Options {
      /** 车牌号 */
      licenseNum?: string;
      /** 关联站点id */
      orgId?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    export interface ReturnsPropDataPropListSubItem {
      /** 主键id */
      id: number;
      /** 车牌号 */
      licenseNum: string;
      /** 槽罐车编号 */
      vehicleCode: string;
      /** 驾驶员 */
      driverName: string;
      /** 联系方式 */
      contact: string;
      /** 所属公司 */
      company: string;
      /** 关联站点id */
      orgId: number;
      /** 站点名称 */
      orgName: string;
      /** 行驶证附件主键id */
      drivingLicenseId: number;
      /** 驾驶证附件主键id */
      driverLicenseId: number;
      /** 行驶证附件文件名 */
      drivingLicenseName: string;
      /** 驾驶证附件文件名 */
      driverLicenseName: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getInternalOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropDriverLicense {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 附件查询响应 */
    export interface ReturnsPropDataPropDrivingLicense {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 数据负载 */
    export interface ReturnsPropData {
      /** 主键id */
      id: number;
      /** 车牌号 */
      licenseNum: string;
      /** 驾驶员 */
      driverName: string;
      /** 驾驶员 */
      contact: string;
      driverLicense: ReturnsPropDataPropDriverLicense;
      drivingLicense: ReturnsPropDataPropDrivingLicense;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getInternalPaged {
    export interface Options {
      /** 车牌号 */
      licenseNum?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    export interface ReturnsPropDataPropListSubItem {
      /** 主键id */
      id: number;
      /** 车牌号 */
      licenseNum: string;
      /** 驾驶员 */
      driverName: string;
      /** 联系方式 */
      contact: string;
      /** 行驶证附件主键id */
      drivingLicenseId: number;
      /** 驾驶证附件主键id */
      driverLicenseId: number;
      /** 行驶证附件文件名 */
      drivingLicenseName: string;
      /** 驾驶证附件文件名 */
      driverLicenseName: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace editExternal {
    /** 附件上传请求 */
    export interface OptionsPropDriverLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件上传请求 */
    export interface OptionsPropDrivingLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    export interface Options {
      /** 主键 */
      id: number;
      /** 车牌号 */
      licenseNum: string;
      /** 槽罐车编号 */
      vehicleCode: string;
      /** 驾驶员 */
      driverName?: string;
      /** 联系方式 */
      contact?: string;
      /** 所属公司 */
      company?: string;
      /** 关联站点id */
      orgId?: number;
      driverLicense?: OptionsPropDriverLicense;
      drivingLicense?: OptionsPropDrivingLicense;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace editInternal {
    /** 附件上传请求 */
    export interface OptionsPropDriverLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件上传请求 */
    export interface OptionsPropDrivingLicense {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    export interface Options {
      /** 主键 */
      id: number;
      /** 车牌号 */
      licenseNum: string;
      /** 驾驶员 */
      driverName?: string;
      /** 联系方式 */
      contact?: string;
      driverLicense?: OptionsPropDriverLicense;
      drivingLicense?: OptionsPropDrivingLicense;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Img {
  export namespace getUploadFile {
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Attachment {
  export namespace uploadFile {
    export interface Options {
      uploadFile?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace addAttachment {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 文件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 批量添加附件请求 */
    export interface Options {
      /** 文件列表 */
      fileList: OptionsPropFileList;
    }
    export type O = Options;
    /** 附件上传请求 */
    export interface ReturnsPropDataSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey: number;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind: number;
      /** 异常信息 */
      errorMsg: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getAttachmentById {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 附件详细查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 */
      relationKey: number;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace downloadTag {
    export interface Options {
      /** 业务主键 */
      relationKey: number;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace getStationAttachments {
    export interface Options {
      /** 文件名（模糊查询） */
      fileName?: string;
      /** 关联主键（站点id/用户id） */
      relationKey?: number;
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus?: number;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type?: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getSafeAttachmentPaged {
    export interface Options {
      /** 文件名（模糊查询） */
      fileName?: string;
      /** 关联主键（站点id/用户id） */
      relationKey?: number;
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus?: number;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace downloadAttachment {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace editAttachment {
    /** 附件信息修改请求 */
    export interface Options {
      /** 文件id */
      id: number;
      /** 文件名 */
      fileName?: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type?: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeAttachment {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Org {
  export namespace getStationList {
    export interface Options {
      needAll?: boolean;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropDataSubItem {
      id: number;
      orgName: string;
      orgShortName: string;
      stationType: number;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace addWorker {
    /** 新增工作人员基本信息请求 */
    export interface Options {
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum?: string;
      /** 手机号 */
      mobile?: string;
      /** 职务 */
      jobType?: string;
      /** 班别 */
      groups?: number;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /** 工作人员基本信息响应 */
    export interface ReturnsPropData {
      /** 员工id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum: string;
      /** 手机号 */
      mobile: string;
      /** 职务 */
      jobType: string;
      /** 职务名称 */
      jobTypeDesc: string;
      /** 班别 */
      groups: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 备注 */
      remark: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getWorkerOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 工作人员基本信息响应 */
    export interface ReturnsPropData {
      /** 员工id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum: string;
      /** 手机号 */
      mobile: string;
      /** 职务 */
      jobType: string;
      /** 职务名称 */
      jobTypeDesc: string;
      /** 班别 */
      groups: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 备注 */
      remark: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgWorkers {
    export interface Options {
      /** 站点id */
      orgId?: number;
    }
    export type O = Options;
    /** 工作人员基本信息响应 */
    export interface ReturnsPropDataPropManagerListSubItem {
      /** 员工id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum: string;
      /** 手机号 */
      mobile: string;
      /** 职务 */
      jobType: string;
      /** 职务名称 */
      jobTypeDesc: string;
      /** 班别 */
      groups: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 备注 */
      remark: string;
    }
    /** 负责人列表 */
    export type ReturnsPropDataPropManagerList = ReturnsPropDataPropManagerListSubItem[];
    /** 工作人员基本信息响应 */
    export interface ReturnsPropDataPropSafetyManagerListSubItem {
      /** 员工id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum: string;
      /** 手机号 */
      mobile: string;
      /** 职务 */
      jobType: string;
      /** 职务名称 */
      jobTypeDesc: string;
      /** 班别 */
      groups: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 备注 */
      remark: string;
    }
    /** 安全管理员列表 */
    export type ReturnsPropDataPropSafetyManagerList =
      ReturnsPropDataPropSafetyManagerListSubItem[];
    /** 工作人员基本信息响应 */
    export interface ReturnsPropDataPropOrdinaryListSubItem {
      /** 员工id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum: string;
      /** 手机号 */
      mobile: string;
      /** 职务 */
      jobType: string;
      /** 职务名称 */
      jobTypeDesc: string;
      /** 班别 */
      groups: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 备注 */
      remark: string;
    }
    /** 工作人员列表 */
    export type ReturnsPropDataPropOrdinaryList = ReturnsPropDataPropOrdinaryListSubItem[];
    /** 查询站点员工信息息响应 */
    export interface ReturnsPropData {
      /** 负责人列表 */
      managerList: ReturnsPropDataPropManagerList;
      /** 安全管理员列表 */
      safetyManagerList: ReturnsPropDataPropSafetyManagerList;
      /** 工作人员列表 */
      ordinaryList: ReturnsPropDataPropOrdinaryList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getWorkersList {
    export interface Options {
      /** 站点id */
      orgId?: number;
      /** 姓名 */
      name?: string;
      /** 职务list */
      jobTypeList?: any[];
      /** 班别 */
      groups?: number;
    }
    export type O = Options;
    /** 工作人员基本信息响应 */
    export interface ReturnsPropDataSubItem {
      /** 员工id */
      id: number;
      /** 所属机构id */
      orgId: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 身份证号 */
      identityNum: string;
      /** 手机号 */
      mobile: string;
      /** 职务 */
      jobType: string;
      /** 职务名称 */
      jobTypeDesc: string;
      /** 班别 */
      groups: number;
      /** 班别名称 */
      groupsDesc: string;
      /** 备注 */
      remark: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgInfoPaged {
    export interface Options {
      /** 查询关键字 */
      queryKey?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 联系方式List */
    export type ReturnsPropDataPropListSubItemPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropListSubItemPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgInfoOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 联系方式List */
    export type ReturnsPropDataPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropData {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgExtraInfoOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {
      /** 机构id */
      orgId: number;
      /** 父机构地址 */
      parentName: string;
      /** 父机构名称 */
      parentAddress: string;
      /** 使用登记证编号 */
      certificateNum: string;
      /** 安装地址 */
      installAddress: string;
      /** 使用登记证编号 */
      registrationNum: string;
      /** 工程名称 */
      projectName: string;
      /** 安全管理员 */
      safetyManager: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getWorkerAttachmentList {
    export interface Options {
      /** 员工id */
      workerId: number;
    }
    export type O = Options;
    /** 员工资质证书信息 */
    export interface ReturnsPropDataPropWorkerAttachmentListSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 */
      relationKey: number;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind: number;
      /** 附件状态 1-有效 2-即将过期 3-过期 */
      fileStatus: number;
      /** 附件状态描述 */
      fileStatusDesc: string;
      /** 人员证书种类 */
      certificateType: string;
      /** 人员证书种类描述 */
      certificateTypeDesc: string;
      /** 证书编号 */
      certificateNo: string;
      /** 人员证书发证单位 */
      issuingUnit: string;
      /** 人员证书发证单位描述 */
      issuingUnitDesc: string;
      /** 证件有效期 */
      periodOfValidity: string;
      /** 备注 */
      remark: string;
    }
    /** 员工附件列表 */
    export type ReturnsPropDataPropWorkerAttachmentList =
      ReturnsPropDataPropWorkerAttachmentListSubItem[];
    /** 查询员工资质证书响应 */
    export interface ReturnsPropData {
      /** 员工id */
      id: number;
      /** 工号 */
      workerNum: string;
      /** 姓名 */
      name: string;
      /** 员工附件列表 */
      workerAttachmentList: ReturnsPropDataPropWorkerAttachmentList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyOrg {
    /** 联系方式List */
    export type OptionsPropPhoneNum = string[];
    /** 修改站点基本信息请求 */
    export interface Options {
      /** 机构id */
      orgId: number;
      /** 机构面积 */
      orgArea?: string;
      /** 地址 */
      address?: string;
      /** 联系方式List */
      phoneNum?: OptionsPropPhoneNum;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyWorker {
    /** 修改工作人员基本信息请求 */
    export interface Options {
      /** 员工id */
      id: number;
      /** 工号 */
      workerNum?: string;
      /** 姓名 */
      name?: string;
      /** 身份证号 */
      identityNum?: string;
      /** 手机号 */
      mobile?: string;
      /** 职务 */
      jobType?: string;
      /** 班别 */
      groups?: number;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyOrgExtraInfo {
    export interface Options {
      /** 机构id */
      orgId: number;
      /** 使用登记证编号 */
      certificateNum?: string;
      /** 安装地址 */
      installAddress?: string;
      /** 使用登记证编号 */
      registrationNum?: string;
      /** 工程名称 */
      projectName?: string;
      /** 安全管理员 */
      safetyManager?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyWorkerAttachmentBatch {
    /** 员工资质文件信息 */
    export interface OptionsPropWorkerAttachmentListSubItem {
      /** 文件id */
      id?: number;
      /** 文件名 */
      fileName?: string;
      /** 上传url */
      url?: string;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 人员证书种类 */
      certificateType?: string;
      /** 证书编号 */
      certificateNo?: string;
      /** 人员证书发证单位 */
      issuingUnit?: string;
      /** 证件有效期 */
      periodOfValidity?: string;
      /** 备注 */
      remark?: string;
    }
    /** 文件列表 */
    export type OptionsPropWorkerAttachmentList = OptionsPropWorkerAttachmentListSubItem[];
    /** 批量提交员工资质文件请求 */
    export interface Options {
      /** 员工id */
      workerId: number;
      /** 文件列表 */
      workerAttachmentList: OptionsPropWorkerAttachmentList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeWorker {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeWorkerAttachment {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Cf {
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 加液及充装检查记录明细 */
    export interface ReturnsPropDataPropDataListSubItem {
      /** 主键 */
      id: number;
      /** 车牌号 */
      carNumber: string;
      /** 时间 */
      time: string;
      /** 气瓶使用登记号 */
      cylinderUseNumber: string;
      /** 使用期内 0：未选 1：勾 -1：叉 */
      serviceLife: string;
      /** 附件齐全 0：未选 1：勾 -1：叉 */
      completeAccessories: string;
      /** 外观完整 0：未选 1：勾 -1：叉 */
      completeAppearance: string;
      /** 车辆停放 0：未选 1：勾 -1：叉 */
      parking: string;
      /** 充装前检查人 */
      beforeChecker: string;
      /** 加液量 */
      liquidAmount: string;
      /** 阀门附件 0：未选 1：勾 -1：叉 */
      valveAccessories: string;
      /** 气瓶压力 0：未选 1：勾 -1：叉 */
      cylinderPressure: string;
      /** 充装中检查人 */
      processChecker: string;
      /** 合格 0：未选 1：勾 -1：叉 */
      qualified: string;
      /** 泄漏(无) 0：未选 1：勾 -1：叉 */
      noLeakage: string;
      /** 充装后检查人 */
      afterChecker: string;
      /** 驾驶员 */
      driver: string;
      /** 操作人 */
      operator: string;
    }
    /** 加液及充装检查记录明细 */
    export type ReturnsPropDataPropDataList = ReturnsPropDataPropDataListSubItem[];
    /** 查询加液及充装检查记录响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 卸车日期 */
      checkDate: string;
      /** 审核人 */
      checker: string;
      /** 站点名称 */
      stationName: string;
      /** 加液及充装检查记录明细 */
      dataList: ReturnsPropDataPropDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 编号 */
      code?: string;
      /** 开始卸车日期 */
      beginDate?: string;
      /** 结束卸车日期 */
      endDate?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 加液及充装检查记录明细 */
    export interface ReturnsPropDataPropListSubItemPropDataListSubItem {
      /** 主键 */
      id: number;
      /** 车牌号 */
      carNumber: string;
      /** 时间 */
      time: string;
      /** 气瓶使用登记号 */
      cylinderUseNumber: string;
      /** 使用期内 0：未选 1：勾 -1：叉 */
      serviceLife: string;
      /** 附件齐全 0：未选 1：勾 -1：叉 */
      completeAccessories: string;
      /** 外观完整 0：未选 1：勾 -1：叉 */
      completeAppearance: string;
      /** 车辆停放 0：未选 1：勾 -1：叉 */
      parking: string;
      /** 充装前检查人 */
      beforeChecker: string;
      /** 加液量 */
      liquidAmount: string;
      /** 阀门附件 0：未选 1：勾 -1：叉 */
      valveAccessories: string;
      /** 气瓶压力 0：未选 1：勾 -1：叉 */
      cylinderPressure: string;
      /** 充装中检查人 */
      processChecker: string;
      /** 合格 0：未选 1：勾 -1：叉 */
      qualified: string;
      /** 泄漏(无) 0：未选 1：勾 -1：叉 */
      noLeakage: string;
      /** 充装后检查人 */
      afterChecker: string;
      /** 驾驶员 */
      driver: string;
      /** 操作人 */
      operator: string;
    }
    /** 加液及充装检查记录明细 */
    export type ReturnsPropDataPropListSubItemPropDataList =
      ReturnsPropDataPropListSubItemPropDataListSubItem[];
    /** 查询加液及充装检查记录响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 卸车日期 */
      checkDate: string;
      /** 审核人 */
      checker: string;
      /** 站点名称 */
      stationName: string;
      /** 加液及充装检查记录明细 */
      dataList: ReturnsPropDataPropListSubItemPropDataList;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOneRecord {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 加液及充装检查记录明细 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 车牌号 */
      carNumber: string;
      /** 时间 */
      time: string;
      /** 气瓶使用登记号 */
      cylinderUseNumber: string;
      /** 使用期内 0：未选 1：勾 -1：叉 */
      serviceLife: string;
      /** 附件齐全 0：未选 1：勾 -1：叉 */
      completeAccessories: string;
      /** 外观完整 0：未选 1：勾 -1：叉 */
      completeAppearance: string;
      /** 车辆停放 0：未选 1：勾 -1：叉 */
      parking: string;
      /** 充装前检查人 */
      beforeChecker: string;
      /** 加液量 */
      liquidAmount: string;
      /** 阀门附件 0：未选 1：勾 -1：叉 */
      valveAccessories: string;
      /** 气瓶压力 0：未选 1：勾 -1：叉 */
      cylinderPressure: string;
      /** 充装中检查人 */
      processChecker: string;
      /** 合格 0：未选 1：勾 -1：叉 */
      qualified: string;
      /** 泄漏(无) 0：未选 1：勾 -1：叉 */
      noLeakage: string;
      /** 充装后检查人 */
      afterChecker: string;
      /** 驾驶员 */
      driver: string;
      /** 操作人 */
      operator: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace persist {
    /** 加液及充装检查记录明细 */
    export interface OptionsPropDataListSubItem {
      /** 主键 */
      id?: number;
      /** 车牌号 */
      carNumber?: string;
      /** 时间 */
      time?: string;
      /** 气瓶使用登记号 */
      cylinderUseNumber?: string;
      /** 使用期内 0：未选 1：勾 -1：叉 */
      serviceLife?: string;
      /** 附件齐全 0：未选 1：勾 -1：叉 */
      completeAccessories?: string;
      /** 外观完整 0：未选 1：勾 -1：叉 */
      completeAppearance?: string;
      /** 车辆停放 0：未选 1：勾 -1：叉 */
      parking?: string;
      /** 充装前检查人 */
      beforeChecker?: string;
      /** 加液量 */
      liquidAmount?: string;
      /** 阀门附件 0：未选 1：勾 -1：叉 */
      valveAccessories?: string;
      /** 气瓶压力 0：未选 1：勾 -1：叉 */
      cylinderPressure?: string;
      /** 充装中检查人 */
      processChecker?: string;
      /** 合格 0：未选 1：勾 -1：叉 */
      qualified?: string;
      /** 泄漏(无) 0：未选 1：勾 -1：叉 */
      noLeakage?: string;
      /** 充装后检查人 */
      afterChecker?: string;
      /** 驾驶员 */
      driver?: string;
      /** 操作人 */
      operator?: string;
    }
    /** 加液及充装检查记录明细 */
    export type OptionsPropDataList = OptionsPropDataListSubItem[];
    /** 加液及充装检查记录持久化请求 */
    export interface Options {
      /** 主键 */
      id?: number;
      /** 站点id */
      stationId?: number;
      /** 卸车日期 */
      checkDate?: string;
      /** 审核人 */
      checker?: string;
      /** 加液及充装检查记录明细 */
      dataList?: OptionsPropDataList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Sg {
  export namespace getSecurityGroupsInfo {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查日期 */
      shiftsDate?: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType?: number;
    }
    export type O = Options;
    /** 加气明细 */
    export interface ReturnsPropDataPropRecordsSubItem {
      /** 主键 */
      id: number;
      /** 加气单位 */
      gasCompany: string;
      /** 车次 */
      trainNumber: string;
      /** 累计加气 */
      totalGas: string;
    }
    /** 加气明细 */
    export type ReturnsPropDataPropRecords = ReturnsPropDataPropRecordsSubItem[];
    /** 交接班记录（卸液情况） */
    export interface ReturnsPropDataPropUnloadDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 卸液开始时间 */
      unloadStartTime: string;
      /** 卸液结束时间 */
      unloadEndTime: string;
      /** 卸液量 */
      unloadAmount: string;
      /** 卸液人 */
      unloadPerson: string;
    }
    /** 卸液情况 */
    export type ReturnsPropDataPropUnloadDataList = ReturnsPropDataPropUnloadDataListSubItem[];
    /** 数据负载 */
    export interface ReturnsPropData {
      /** 本班总共加气 */
      groupTotalGas: string;
      /** 本班累计加气 */
      groupSumGas: string;
      /** 一天加气总量 */
      dayTotalGas: string;
      /** 一天累计加气 */
      daySumGas: string;
      /** 加气明细 */
      records: ReturnsPropDataPropRecords;
      /** 卸液情况 */
      unloadDataList: ReturnsPropDataPropUnloadDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getShiftsDataInfo {
    export interface Options {
      /** 站点id */
      stationId: number;
      /** 检查日期 */
      shiftsDate: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 交接班标识: 1-接班 2-交班 */
      shiftStatus: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropDataSubItem {
      /** 储罐id */
      vesselId: number;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace dayEnd {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查日期 */
      shiftsDate?: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType?: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropDataSubItem {
      /** 储罐id */
      vesselId: number;
      /** 卸液总量 */
      liquidInlet: number;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 交/接班明细 */
    export interface ReturnsPropDataPropJoinData {
      /** 主键 */
      id: number;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 加气机 0：未选 1：勾 -1：叉 */
      gasDispenser: string;
      /** 潜液泵 0：未选 1：勾 -1：叉 */
      submersiblePump: string;
      /** 空压机 0：未选 1：勾 -1：叉 */
      airCompressor: string;
      /** 控制柜 0：未选 1：勾 -1：叉 */
      controlCabinet: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 空压机房 0：未选 1：勾 -1：叉 */
      airCompressorRoom: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 更衣室 0：未选 1：勾 -1：叉 */
      lockerRoom: string;
      /** 各类钥匙 0：未选 1：勾 -1：叉 */
      variousKeys: string;
      /** 各类工具 0：未选 1：勾 -1：叉 */
      variousTools: string;
      /** 测爆仪 0：未选 1：勾 -1：叉 */
      explosionDetector: string;
      /** 电筒 0：未选 1：勾 -1：叉 */
      torch: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
    }
    /** 交/接班明细 */
    export interface ReturnsPropDataPropHandOverData {
      /** 主键 */
      id: number;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 加气机 0：未选 1：勾 -1：叉 */
      gasDispenser: string;
      /** 潜液泵 0：未选 1：勾 -1：叉 */
      submersiblePump: string;
      /** 空压机 0：未选 1：勾 -1：叉 */
      airCompressor: string;
      /** 控制柜 0：未选 1：勾 -1：叉 */
      controlCabinet: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 空压机房 0：未选 1：勾 -1：叉 */
      airCompressorRoom: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 更衣室 0：未选 1：勾 -1：叉 */
      lockerRoom: string;
      /** 各类钥匙 0：未选 1：勾 -1：叉 */
      variousKeys: string;
      /** 各类工具 0：未选 1：勾 -1：叉 */
      variousTools: string;
      /** 测爆仪 0：未选 1：勾 -1：叉 */
      explosionDetector: string;
      /** 电筒 0：未选 1：勾 -1：叉 */
      torch: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
    }
    /** 交/接班明细（多设备） */
    export interface ReturnsPropDataPropJoinDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 接班明细（多槽罐） */
    export type ReturnsPropDataPropJoinDataList = ReturnsPropDataPropJoinDataListSubItem[];
    /** 交/接班明细（区域） */
    export interface ReturnsPropDataPropJoinArea {
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 交/接班明细（多设备） */
    export interface ReturnsPropDataPropHandOverDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 交班明细（多槽罐） */
    export type ReturnsPropDataPropHandOverDataList = ReturnsPropDataPropHandOverDataListSubItem[];
    /** 交/接班明细（区域） */
    export interface ReturnsPropDataPropHandOverArea {
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 加气明细 */
    export interface ReturnsPropDataPropRecordsSubItem {
      /** 主键 */
      id: number;
      /** 加气单位 */
      gasCompany: string;
      /** 车次 */
      trainNumber: string;
      /** 累计加气 */
      totalGas: string;
    }
    /** 加气明细 */
    export type ReturnsPropDataPropRecords = ReturnsPropDataPropRecordsSubItem[];
    /** 交接班记录（卸液情况） */
    export interface ReturnsPropDataPropUnloadDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 卸液开始时间 */
      unloadStartTime: string;
      /** 卸液结束时间 */
      unloadEndTime: string;
      /** 卸液量 */
      unloadAmount: string;
      /** 卸液人 */
      unloadPerson: string;
    }
    /** 卸液情况 */
    export type ReturnsPropDataPropUnloadDataList = ReturnsPropDataPropUnloadDataListSubItem[];
    /** 交/接班明细（槽罐累计加气） */
    export interface ReturnsPropDataPropGasFillDataListSubItem {
      /** 主键 */
      id: number;
      /** 交接班主表主键 */
      scGroupId: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 加气车次 */
      trainNumber: string;
      /** 累计加气 */
      gasFill: string;
    }
    /** 槽罐累计加气 */
    export type ReturnsPropDataPropGasFillDataList = ReturnsPropDataPropGasFillDataListSubItem[];
    /** 交接班查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 当前班别 */
      currentGroup: number;
      /** 班长 */
      monitor: string;
      /** 班员（多选） */
      crew: string;
      /** 检查日期 */
      shiftsDate: string;
      /** 提交日期 */
      submitDate: string;
      /** 本班总共加气 */
      groupTotalGas: string;
      /** 本班累计加气 */
      groupSumGas: string;
      /** 一天加气总量 */
      dayTotalGas: string;
      /** 一天累计加气 */
      daySumGas: string;
      /** 交班人 */
      handoverPerson: string;
      /** 接班人 */
      takeOverPerson: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 备注 */
      remark: string;
      /** 状态 1-修改中 2-完成 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 站点类型 1-撬装，2-固定 */
      stationType: number;
      /** 当前班别名称 */
      currentGroupDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 班次类型名称 */
      shiftTypeDesc: string;
      joinData: ReturnsPropDataPropJoinData;
      handOverData: ReturnsPropDataPropHandOverData;
      /** 接班明细（多槽罐） */
      joinDataList: ReturnsPropDataPropJoinDataList;
      joinArea: ReturnsPropDataPropJoinArea;
      /** 交班明细（多槽罐） */
      handOverDataList: ReturnsPropDataPropHandOverDataList;
      handOverArea: ReturnsPropDataPropHandOverArea;
      /** 加气明细 */
      records: ReturnsPropDataPropRecords;
      /** 卸液情况 */
      unloadDataList: ReturnsPropDataPropUnloadDataList;
      /** 槽罐累计加气 */
      gasFillDataList: ReturnsPropDataPropGasFillDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 编号 */
      code?: string;
      /** 班别 */
      currentGroup?: number;
      /** 状态 1-修改中 2-完成 */
      status?: number;
      /** 开始报修日期 */
      beginDate?: string;
      /** 结束报修日期 */
      endDate?: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 交/接班明细 */
    export interface ReturnsPropDataPropListSubItemPropJoinData {
      /** 主键 */
      id: number;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 加气机 0：未选 1：勾 -1：叉 */
      gasDispenser: string;
      /** 潜液泵 0：未选 1：勾 -1：叉 */
      submersiblePump: string;
      /** 空压机 0：未选 1：勾 -1：叉 */
      airCompressor: string;
      /** 控制柜 0：未选 1：勾 -1：叉 */
      controlCabinet: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 空压机房 0：未选 1：勾 -1：叉 */
      airCompressorRoom: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 更衣室 0：未选 1：勾 -1：叉 */
      lockerRoom: string;
      /** 各类钥匙 0：未选 1：勾 -1：叉 */
      variousKeys: string;
      /** 各类工具 0：未选 1：勾 -1：叉 */
      variousTools: string;
      /** 测爆仪 0：未选 1：勾 -1：叉 */
      explosionDetector: string;
      /** 电筒 0：未选 1：勾 -1：叉 */
      torch: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
    }
    /** 交/接班明细 */
    export interface ReturnsPropDataPropListSubItemPropHandOverData {
      /** 主键 */
      id: number;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 加气机 0：未选 1：勾 -1：叉 */
      gasDispenser: string;
      /** 潜液泵 0：未选 1：勾 -1：叉 */
      submersiblePump: string;
      /** 空压机 0：未选 1：勾 -1：叉 */
      airCompressor: string;
      /** 控制柜 0：未选 1：勾 -1：叉 */
      controlCabinet: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 空压机房 0：未选 1：勾 -1：叉 */
      airCompressorRoom: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 更衣室 0：未选 1：勾 -1：叉 */
      lockerRoom: string;
      /** 各类钥匙 0：未选 1：勾 -1：叉 */
      variousKeys: string;
      /** 各类工具 0：未选 1：勾 -1：叉 */
      variousTools: string;
      /** 测爆仪 0：未选 1：勾 -1：叉 */
      explosionDetector: string;
      /** 电筒 0：未选 1：勾 -1：叉 */
      torch: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
    }
    /** 交/接班明细（多设备） */
    export interface ReturnsPropDataPropListSubItemPropJoinDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 接班明细（多槽罐） */
    export type ReturnsPropDataPropListSubItemPropJoinDataList =
      ReturnsPropDataPropListSubItemPropJoinDataListSubItem[];
    /** 交/接班明细（区域） */
    export interface ReturnsPropDataPropListSubItemPropJoinArea {
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 交/接班明细（多设备） */
    export interface ReturnsPropDataPropListSubItemPropHandOverDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 饱和（Mpa） */
      saturated: string;
      /** 液位（mmH2O） */
      liquidLevel: string;
      /** 重量(Kg) */
      weight: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil: number;
      /** 空压机油位名称 */
      airCompressorOilDesc: string;
      /** 运行小时数 */
      operatingHours: string;
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 交班明细（多槽罐） */
    export type ReturnsPropDataPropListSubItemPropHandOverDataList =
      ReturnsPropDataPropListSubItemPropHandOverDataListSubItem[];
    /** 交/接班明细（区域） */
    export interface ReturnsPropDataPropListSubItemPropHandOverArea {
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom: string;
      /** 车况 */
      carCondition: string;
      /** 公里数 */
      kilometers: string;
      /** 在岛槽车数量 */
      carCount: string;
      /** 驾驶员 */
      driver: string;
    }
    /** 加气明细 */
    export interface ReturnsPropDataPropListSubItemPropRecordsSubItem {
      /** 主键 */
      id: number;
      /** 加气单位 */
      gasCompany: string;
      /** 车次 */
      trainNumber: string;
      /** 累计加气 */
      totalGas: string;
    }
    /** 加气明细 */
    export type ReturnsPropDataPropListSubItemPropRecords =
      ReturnsPropDataPropListSubItemPropRecordsSubItem[];
    /** 交接班记录（卸液情况） */
    export interface ReturnsPropDataPropListSubItemPropUnloadDataListSubItem {
      /** 主键 */
      id: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 卸液开始时间 */
      unloadStartTime: string;
      /** 卸液结束时间 */
      unloadEndTime: string;
      /** 卸液量 */
      unloadAmount: string;
      /** 卸液人 */
      unloadPerson: string;
    }
    /** 卸液情况 */
    export type ReturnsPropDataPropListSubItemPropUnloadDataList =
      ReturnsPropDataPropListSubItemPropUnloadDataListSubItem[];
    /** 交/接班明细（槽罐累计加气） */
    export interface ReturnsPropDataPropListSubItemPropGasFillDataListSubItem {
      /** 主键 */
      id: number;
      /** 交接班主表主键 */
      scGroupId: number;
      /** 储罐id */
      vesselId: number;
      /** 储罐简称 */
      vesselName: string;
      /** 加气车次 */
      trainNumber: string;
      /** 累计加气 */
      gasFill: string;
    }
    /** 槽罐累计加气 */
    export type ReturnsPropDataPropListSubItemPropGasFillDataList =
      ReturnsPropDataPropListSubItemPropGasFillDataListSubItem[];
    /** 交接班查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 编号 */
      code: string;
      /** 站点id */
      stationId: number;
      /** 当前班别 */
      currentGroup: number;
      /** 班长 */
      monitor: string;
      /** 班员（多选） */
      crew: string;
      /** 检查日期 */
      shiftsDate: string;
      /** 提交日期 */
      submitDate: string;
      /** 本班总共加气 */
      groupTotalGas: string;
      /** 本班累计加气 */
      groupSumGas: string;
      /** 一天加气总量 */
      dayTotalGas: string;
      /** 一天累计加气 */
      daySumGas: string;
      /** 交班人 */
      handoverPerson: string;
      /** 接班人 */
      takeOverPerson: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType: number;
      /** 备注 */
      remark: string;
      /** 状态 1-修改中 2-完成 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 站点类型 1-撬装，2-固定 */
      stationType: number;
      /** 当前班别名称 */
      currentGroupDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 班次类型名称 */
      shiftTypeDesc: string;
      joinData: ReturnsPropDataPropListSubItemPropJoinData;
      handOverData: ReturnsPropDataPropListSubItemPropHandOverData;
      /** 接班明细（多槽罐） */
      joinDataList: ReturnsPropDataPropListSubItemPropJoinDataList;
      joinArea: ReturnsPropDataPropListSubItemPropJoinArea;
      /** 交班明细（多槽罐） */
      handOverDataList: ReturnsPropDataPropListSubItemPropHandOverDataList;
      handOverArea: ReturnsPropDataPropListSubItemPropHandOverArea;
      /** 加气明细 */
      records: ReturnsPropDataPropListSubItemPropRecords;
      /** 卸液情况 */
      unloadDataList: ReturnsPropDataPropListSubItemPropUnloadDataList;
      /** 槽罐累计加气 */
      gasFillDataList: ReturnsPropDataPropListSubItemPropGasFillDataList;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace persistMultipleVessel {
    /** 交/接班明细（多设备） */
    export interface OptionsPropJoinDataListSubItem {
      /** 主键 */
      id?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐简称 */
      vesselName?: string;
      /** 压力（Mpa） */
      pressure?: string;
      /** 饱和（Mpa） */
      saturated?: string;
      /** 液位（mmH2O） */
      liquidLevel?: string;
      /** 重量(Kg) */
      weight?: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure?: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil?: number;
      /** 空压机油位名称 */
      airCompressorOilDesc?: string;
      /** 运行小时数 */
      operatingHours?: string;
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1?: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2?: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3?: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4?: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea?: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea?: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea?: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom?: string;
      /** 车况 */
      carCondition?: string;
      /** 公里数 */
      kilometers?: string;
      /** 在岛槽车数量 */
      carCount?: string;
      /** 驾驶员 */
      driver?: string;
    }
    /** 接班明细 */
    export type OptionsPropJoinDataList = OptionsPropJoinDataListSubItem[];
    /** 交/接班明细（多设备） */
    export interface OptionsPropHandOverDataListSubItem {
      /** 主键 */
      id?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐简称 */
      vesselName?: string;
      /** 压力（Mpa） */
      pressure?: string;
      /** 饱和（Mpa） */
      saturated?: string;
      /** 液位（mmH2O） */
      liquidLevel?: string;
      /** 重量(Kg) */
      weight?: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure?: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil?: number;
      /** 空压机油位名称 */
      airCompressorOilDesc?: string;
      /** 运行小时数 */
      operatingHours?: string;
      /** 1号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser1?: string;
      /** 2号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser2?: string;
      /** 3号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser3?: string;
      /** 4号加气机 0：未选 1：勾 -1：叉 */
      gasDispenser4?: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea?: string;
      /** 卸液区 0：未选 1：勾 -1：叉 */
      unloadArea?: string;
      /** 储罐区 0：未选 1：勾 -1：叉 */
      vesselArea?: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom?: string;
      /** 车况 */
      carCondition?: string;
      /** 公里数 */
      kilometers?: string;
      /** 在岛槽车数量 */
      carCount?: string;
      /** 驾驶员 */
      driver?: string;
    }
    /** 交班明细 */
    export type OptionsPropHandOverDataList = OptionsPropHandOverDataListSubItem[];
    /** 加气明细 */
    export interface OptionsPropRecordsSubItem {
      /** 主键 */
      id?: number;
      /** 加气单位 */
      gasCompany?: string;
      /** 车次 */
      trainNumber?: string;
      /** 累计加气 */
      totalGas?: string;
    }
    /** 加气明细 */
    export type OptionsPropRecords = OptionsPropRecordsSubItem[];
    /** 交接班记录（卸液情况） */
    export interface OptionsPropUnloadDataListSubItem {
      /** 主键 */
      id?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐简称 */
      vesselName?: string;
      /** 卸液开始时间 */
      unloadStartTime?: string;
      /** 卸液结束时间 */
      unloadEndTime?: string;
      /** 卸液量 */
      unloadAmount?: string;
      /** 卸液人 */
      unloadPerson?: string;
    }
    /** 卸液情况 */
    export type OptionsPropUnloadDataList = OptionsPropUnloadDataListSubItem[];
    /** 交/接班明细（槽罐累计加气） */
    export interface OptionsPropGasFillDataListSubItem {
      /** 主键 */
      id?: number;
      /** 交接班主表主键 */
      scGroupId?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐简称 */
      vesselName?: string;
      /** 加气车次 */
      trainNumber?: string;
      /** 累计加气 */
      gasFill?: string;
    }
    /** 槽罐累计加气 */
    export type OptionsPropGasFillDataList = OptionsPropGasFillDataListSubItem[];
    /** 交接班持久化请求（多槽罐） */
    export interface Options {
      /** 主键 */
      id?: number;
      /** 站点id */
      stationId?: number;
      /** 当前班别 */
      currentGroup?: number;
      /** 班长 */
      monitor?: string;
      /** 班员（多选） */
      crew?: string;
      /** 检查日期 */
      shiftsDate?: string;
      /** 本班总共加气 */
      groupTotalGas?: string;
      /** 本班累计加气 */
      groupSumGas?: string;
      /** 一天加气总量 */
      dayTotalGas?: string;
      /** 一天累计加气 */
      daySumGas?: string;
      /** 交班人 */
      handoverPerson?: string;
      /** 接班人 */
      takeOverPerson?: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType?: number;
      /** 备注 */
      remark?: string;
      /** 状态 1-修改中 2-完成 保存提交时可以为空，确认提交时=2 */
      status?: number;
      /** 接班明细 */
      joinDataList?: OptionsPropJoinDataList;
      /** 交班明细 */
      handOverDataList?: OptionsPropHandOverDataList;
      /** 加气明细 */
      records?: OptionsPropRecords;
      /** 卸液情况 */
      unloadDataList?: OptionsPropUnloadDataList;
      /** 槽罐累计加气 */
      gasFillDataList?: OptionsPropGasFillDataList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace persist {
    /** 交/接班明细 */
    export interface OptionsPropJoinData {
      /** 主键 */
      id?: number;
      /** 压力（Mpa） */
      pressure?: string;
      /** 饱和（Mpa） */
      saturated?: string;
      /** 液位（mmH2O） */
      liquidLevel?: string;
      /** 重量(Kg) */
      weight?: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure?: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil?: number;
      /** 空压机油位名称 */
      airCompressorOilDesc?: string;
      /** 运行小时数 */
      operatingHours?: string;
      /** 加气机 0：未选 1：勾 -1：叉 */
      gasDispenser?: string;
      /** 潜液泵 0：未选 1：勾 -1：叉 */
      submersiblePump?: string;
      /** 空压机 0：未选 1：勾 -1：叉 */
      airCompressor?: string;
      /** 控制柜 0：未选 1：勾 -1：叉 */
      controlCabinet?: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea?: string;
      /** 空压机房 0：未选 1：勾 -1：叉 */
      airCompressorRoom?: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom?: string;
      /** 更衣室 0：未选 1：勾 -1：叉 */
      lockerRoom?: string;
      /** 各类钥匙 0：未选 1：勾 -1：叉 */
      variousKeys?: string;
      /** 各类工具 0：未选 1：勾 -1：叉 */
      variousTools?: string;
      /** 测爆仪 0：未选 1：勾 -1：叉 */
      explosionDetector?: string;
      /** 电筒 0：未选 1：勾 -1：叉 */
      torch?: string;
      /** 车况 */
      carCondition?: string;
      /** 公里数 */
      kilometers?: string;
    }
    /** 交/接班明细 */
    export interface OptionsPropHandOverData {
      /** 主键 */
      id?: number;
      /** 压力（Mpa） */
      pressure?: string;
      /** 饱和（Mpa） */
      saturated?: string;
      /** 液位（mmH2O） */
      liquidLevel?: string;
      /** 重量(Kg) */
      weight?: string;
      /** 空压机压力(Mpa) */
      airCompressorPressure?: string;
      /** 空压机油位 1-低 2-中 3-高 */
      airCompressorOil?: number;
      /** 空压机油位名称 */
      airCompressorOilDesc?: string;
      /** 运行小时数 */
      operatingHours?: string;
      /** 加气机 0：未选 1：勾 -1：叉 */
      gasDispenser?: string;
      /** 潜液泵 0：未选 1：勾 -1：叉 */
      submersiblePump?: string;
      /** 空压机 0：未选 1：勾 -1：叉 */
      airCompressor?: string;
      /** 控制柜 0：未选 1：勾 -1：叉 */
      controlCabinet?: string;
      /** 加气区 0：未选 1：勾 -1：叉 */
      gasArea?: string;
      /** 空压机房 0：未选 1：勾 -1：叉 */
      airCompressorRoom?: string;
      /** 控制室 0：未选 1：勾 -1：叉 */
      controlRoom?: string;
      /** 更衣室 0：未选 1：勾 -1：叉 */
      lockerRoom?: string;
      /** 各类钥匙 0：未选 1：勾 -1：叉 */
      variousKeys?: string;
      /** 各类工具 0：未选 1：勾 -1：叉 */
      variousTools?: string;
      /** 测爆仪 0：未选 1：勾 -1：叉 */
      explosionDetector?: string;
      /** 电筒 0：未选 1：勾 -1：叉 */
      torch?: string;
      /** 车况 */
      carCondition?: string;
      /** 公里数 */
      kilometers?: string;
    }
    /** 加气明细 */
    export interface OptionsPropRecordsSubItem {
      /** 主键 */
      id?: number;
      /** 加气单位 */
      gasCompany?: string;
      /** 车次 */
      trainNumber?: string;
      /** 累计加气 */
      totalGas?: string;
    }
    /** 加气明细 */
    export type OptionsPropRecords = OptionsPropRecordsSubItem[];
    /** 交接班记录（卸液情况） */
    export interface OptionsPropUnloadDataListSubItem {
      /** 主键 */
      id?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐简称 */
      vesselName?: string;
      /** 卸液开始时间 */
      unloadStartTime?: string;
      /** 卸液结束时间 */
      unloadEndTime?: string;
      /** 卸液量 */
      unloadAmount?: string;
      /** 卸液人 */
      unloadPerson?: string;
    }
    /** 卸液情况 */
    export type OptionsPropUnloadDataList = OptionsPropUnloadDataListSubItem[];
    /** 交/接班明细（槽罐累计加气） */
    export interface OptionsPropGasFillDataListSubItem {
      /** 主键 */
      id?: number;
      /** 交接班主表主键 */
      scGroupId?: number;
      /** 储罐id */
      vesselId?: number;
      /** 储罐简称 */
      vesselName?: string;
      /** 加气车次 */
      trainNumber?: string;
      /** 累计加气 */
      gasFill?: string;
    }
    /** 槽罐累计加气 */
    export type OptionsPropGasFillDataList = OptionsPropGasFillDataListSubItem[];
    /** 交接班持久化请求 */
    export interface Options {
      /** 主键 */
      id?: number;
      /** 站点id */
      stationId?: number;
      /** 当前班别 */
      currentGroup?: number;
      /** 班长 */
      monitor?: string;
      /** 班员（多选） */
      crew?: string;
      /** 检查日期 */
      shiftsDate?: string;
      /** 本班总共加气 */
      groupTotalGas?: string;
      /** 本班累计加气 */
      groupSumGas?: string;
      /** 一天加气总量 */
      dayTotalGas?: string;
      /** 一天累计加气 */
      daySumGas?: string;
      /** 交班人 */
      handoverPerson?: string;
      /** 班次类型 1-白班 2-夜班 */
      shiftType?: number;
      /** 接班人 */
      takeOverPerson?: string;
      /** 备注 */
      remark?: string;
      /** 状态 1-修改中 2-完成 保存提交时可以为空，确认提交时=2 */
      status?: number;
      joinData?: OptionsPropJoinData;
      handOverData?: OptionsPropHandOverData;
      /** 加气明细 */
      records?: OptionsPropRecords;
      /** 卸液情况 */
      unloadDataList?: OptionsPropUnloadDataList;
      /** 槽罐累计加气 */
      gasFillDataList?: OptionsPropGasFillDataList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Report {
  export namespace queryInventoryReport {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 所属站点id */
      beginDate: string;
      /** 所属站点id */
      endDate: string;
    }
    export type O = Options;
    /** 进销存表头 */
    export interface ReturnsPropDataPropHeadListSubItemPropChildrenSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 子表头集合 */
    export type ReturnsPropDataPropHeadListSubItemPropChildren =
      ReturnsPropDataPropHeadListSubItemPropChildrenSubItem[];
    /** 进销存表头 */
    export interface ReturnsPropDataPropHeadListSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
      /** 子表头集合 */
      children: ReturnsPropDataPropHeadListSubItemPropChildren;
    }
    /** 表头 */
    export type ReturnsPropDataPropHeadList = ReturnsPropDataPropHeadListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropOpenDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 期初库存 */
    export type ReturnsPropDataPropDataListSubItemPropOpenDataList =
      ReturnsPropDataPropDataListSubItemPropOpenDataListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropInDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 进液入库 */
    export type ReturnsPropDataPropDataListSubItemPropInDataList =
      ReturnsPropDataPropDataListSubItemPropInDataListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropSaleDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 本月销售 */
    export type ReturnsPropDataPropDataListSubItemPropSaleDataList =
      ReturnsPropDataPropDataListSubItemPropSaleDataListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropTheoryDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 理论库存 */
    export type ReturnsPropDataPropDataListSubItemPropTheoryDataList =
      ReturnsPropDataPropDataListSubItemPropTheoryDataListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropPhysicalDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 实际库存 */
    export type ReturnsPropDataPropDataListSubItemPropPhysicalDataList =
      ReturnsPropDataPropDataListSubItemPropPhysicalDataListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropWrongDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 误差情况 */
    export type ReturnsPropDataPropDataListSubItemPropWrongDataList =
      ReturnsPropDataPropDataListSubItemPropWrongDataListSubItem[];
    /** 进出存报表主记录 */
    export interface ReturnsPropDataPropDataListSubItem {
      /** 日期 */
      date: string;
      /** 期初库存 */
      openDataList: ReturnsPropDataPropDataListSubItemPropOpenDataList;
      /** 进液入库 */
      inDataList: ReturnsPropDataPropDataListSubItemPropInDataList;
      /** 本月销售 */
      saleDataList: ReturnsPropDataPropDataListSubItemPropSaleDataList;
      /** 理论库存 */
      theoryDataList: ReturnsPropDataPropDataListSubItemPropTheoryDataList;
      /** 实际库存 */
      physicalDataList: ReturnsPropDataPropDataListSubItemPropPhysicalDataList;
      /** 误差情况 */
      wrongDataList: ReturnsPropDataPropDataListSubItemPropWrongDataList;
    }
    /** 数据 */
    export type ReturnsPropDataPropDataList = ReturnsPropDataPropDataListSubItem[];
    /** 进出存报表响应 */
    export interface ReturnsPropData {
      /** 表头 */
      headList: ReturnsPropDataPropHeadList;
      /** 数据 */
      dataList: ReturnsPropDataPropDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace querySaleReport {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 所属站点id */
      beginDate: string;
      /** 所属站点id */
      endDate: string;
    }
    export type O = Options;
    /** 进销存表头 */
    export interface ReturnsPropDataPropHeadListSubItemPropChildrenSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 子表头集合 */
    export type ReturnsPropDataPropHeadListSubItemPropChildren =
      ReturnsPropDataPropHeadListSubItemPropChildrenSubItem[];
    /** 进销存表头 */
    export interface ReturnsPropDataPropHeadListSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
      /** 子表头集合 */
      children: ReturnsPropDataPropHeadListSubItemPropChildren;
    }
    /** 表头 */
    export type ReturnsPropDataPropHeadList = ReturnsPropDataPropHeadListSubItem[];
    /** 进出存报表子记录 */
    export interface ReturnsPropDataPropDataListSubItemPropWeightDataListSubItem {
      /** 值 */
      dataValue: string;
      /** 数据索引 */
      dataIndex: string;
    }
    export type ReturnsPropDataPropDataListSubItemPropWeightDataList =
      ReturnsPropDataPropDataListSubItemPropWeightDataListSubItem[];
    /** 销售日报数据 */
    export interface ReturnsPropDataPropDataListSubItem {
      date: string;
      weightDataList: ReturnsPropDataPropDataListSubItemPropWeightDataList;
    }
    export type ReturnsPropDataPropDataList = ReturnsPropDataPropDataListSubItem[];
    /** 销售日报响应 */
    export interface ReturnsPropData {
      /** 表头 */
      headList: ReturnsPropDataPropHeadList;
      dataList: ReturnsPropDataPropDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace exportExcel {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 所属站点id */
      beginDate: string;
      /** 所属站点id */
      endDate: string;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace queryInventoryUnload {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 所属站点id */
      beginDate: string;
      /** 所属站点id */
      endDate: string;
    }
    export type O = Options;
    /** 进销存表头 */
    export interface ReturnsPropDataPropHeadListSubItemPropChildrenSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 子表头集合 */
    export type ReturnsPropDataPropHeadListSubItemPropChildren =
      ReturnsPropDataPropHeadListSubItemPropChildrenSubItem[];
    /** 进销存表头 */
    export interface ReturnsPropDataPropHeadListSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
      /** 子表头集合 */
      children: ReturnsPropDataPropHeadListSubItemPropChildren;
    }
    /** 库存表头 */
    export type ReturnsPropDataPropHeadList = ReturnsPropDataPropHeadListSubItem[];
    /** 进销存报表（卸液记录）数据 */
    export interface ReturnsPropDataPropDataListSubItem {
      /** 数据索引 */
      dataIndex: string;
      /** 日期=卸车日期 */
      date: string;
      /** 卸车开始时间+卸液结束时间 */
      unloadTime: string;
      /** 车号=槽车车牌号 */
      carNumber: string;
      /** 磅单号码=磅单编号 */
      weighNumber: string;
      /** 槽车(卸车前)压力(MPa) */
      carBeforePressure: string;
      /** 储罐(卸车前)压力(MPa) */
      potBeforePressure: string;
      /** 槽车(卸车后)压力(MPa) */
      carAfterPressure: string;
      /** 储罐(卸车后)压力(MPa) */
      potAfterPressure: string;
      /** 重车=槽车(卸车前)过磅重量(kg) */
      carBeforeWeight: string;
      /** 空车=槽车(卸车后)过磅重量(kg) */
      carAfterWeight: string;
      /** 装液情况：净重=重车-空车 */
      weightIn: string;
      /** 卸液计量器：净重 = 净重(kg) */
      weightOut: string;
      /** 损益（吨）=（卸液计量器：净重）-（装液情况：净重） */
      profitLoss: string;
      /** 卸液人 = 操作人 */
      operator: string;
    }
    /** 数据 */
    export type ReturnsPropDataPropDataList = ReturnsPropDataPropDataListSubItem[];
    /** 进销存报表（卸液记录）响应 */
    export interface ReturnsPropData {
      /** 库存表头 */
      headList: ReturnsPropDataPropHeadList;
      /** 数据 */
      dataList: ReturnsPropDataPropDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Sale {
  export namespace exportExcel {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 所属站点id */
      beginDate: string;
      /** 所属站点id */
      endDate: string;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace querySaleInventory {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 所属站点id */
      beginDate: string;
      /** 所属站点id */
      endDate: string;
    }
    export type O = Options;
    /** 进销存表头 */
    export interface ReturnsPropDataPropMainHeadListSubItemPropChildrenSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 子表头集合 */
    export type ReturnsPropDataPropMainHeadListSubItemPropChildren =
      ReturnsPropDataPropMainHeadListSubItemPropChildrenSubItem[];
    /** 进销存表头 */
    export interface ReturnsPropDataPropMainHeadListSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
      /** 子表头集合 */
      children: ReturnsPropDataPropMainHeadListSubItemPropChildren;
    }
    /** 库存表头 */
    export type ReturnsPropDataPropMainHeadList = ReturnsPropDataPropMainHeadListSubItem[];
    /** 进销存子记录 */
    export interface ReturnsPropDataPropMainDataListSubItemPropChildrenDataSubItem {
      /** 数据索引 */
      dataIndex: string;
      /** 期初库存 */
      open: string;
      /** 理论库存 */
      theory: string;
      /** 实际库存 */
      physical: string;
      /** 误差 */
      wrong: string;
      /** 进液数 */
      inValue: string;
      /** 销售数 */
      outValue: string;
    }
    /** 数据 */
    export type ReturnsPropDataPropMainDataListSubItemPropChildrenData =
      ReturnsPropDataPropMainDataListSubItemPropChildrenDataSubItem[];
    /** 进销存主记录 */
    export interface ReturnsPropDataPropMainDataListSubItem {
      /** 日期 */
      time: string;
      /** 合计 */
      sumSales: string;
      /** 误差 */
      sumWrong: string;
      /** 数据 */
      childrenData: ReturnsPropDataPropMainDataListSubItemPropChildrenData;
    }
    /** 库存数据 */
    export type ReturnsPropDataPropMainDataList = ReturnsPropDataPropMainDataListSubItem[];
    /** 进销存表头 */
    export interface ReturnsPropDataPropInHeadListSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 进液数表头 */
    export type ReturnsPropDataPropInHeadList = ReturnsPropDataPropInHeadListSubItem[];
    /** 进销存主记录 */
    export interface ReturnsPropDataPropInDataListSubItem {
      /** 日期 */
      time: string;
      /** 合计 */
      sumSales: string;
      /** 误差 */
      sumWrong: string;
    }
    /** 进液数数据 */
    export type ReturnsPropDataPropInDataList = ReturnsPropDataPropInDataListSubItem[];
    /** 进销存表头 */
    export interface ReturnsPropDataPropOutHeadListSubItem {
      /** 表头名称 */
      title: string;
      /** 数据索引 */
      dataIndex: string;
    }
    /** 销售数表头 */
    export type ReturnsPropDataPropOutHeadList = ReturnsPropDataPropOutHeadListSubItem[];
    /** 进销存主记录 */
    export interface ReturnsPropDataPropOutDataListSubItem {
      /** 日期 */
      time: string;
      /** 合计 */
      sumSales: string;
      /** 误差 */
      sumWrong: string;
    }
    /** 销售数数据 */
    export type ReturnsPropDataPropOutDataList = ReturnsPropDataPropOutDataListSubItem[];
    /** 进销存查询响应 */
    export interface ReturnsPropData {
      /** 库存表头 */
      mainHeadList: ReturnsPropDataPropMainHeadList;
      /** 库存数据 */
      mainDataList: ReturnsPropDataPropMainDataList;
      /** 进液数表头 */
      inHeadList: ReturnsPropDataPropInHeadList;
      /** 进液数数据 */
      inDataList: ReturnsPropDataPropInDataList;
      /** 销售数表头 */
      outHeadList: ReturnsPropDataPropOutHeadList;
      /** 销售数数据 */
      outDataList: ReturnsPropDataPropOutDataList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Operation {
  export namespace getOperationLogPaged {
    export interface Options {
      /** 操作人 */
      userId?: number;
      /** 开始时间 */
      beginTime?: string;
      /** 结束时间 */
      endTime?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 用户操作日志响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 登录账号 */
      loginName: string;
      /** 用户昵称 */
      userName: string;
      /** 时间 */
      time: string;
      /** 调用的uri地址 */
      operationUri: string;
      /** 调用的uri描述 */
      operationDesc: string;
      /** 操作模块 */
      operationModule: string;
      /** 调用结果 */
      resultDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Home {
  export namespace getSalesInventoryByStation {
    export interface Options {
      /** 检查日期 yyyy-MM-dd */
      shiftsDate?: string;
      /** 所属机构id */
      stationId?: number;
    }
    export type O = Options;
    /** 卸液情况 */
    export interface ReturnsPropDataPropInfoListSubItemPropVesselUploadListSubItem {
      /** 槽罐名称 */
      vesselName: string;
      /** 槽罐id */
      vesselId: number;
      /** 卸液量 */
      liquidInlet: number;
    }
    /** 卸液情况 */
    export type ReturnsPropDataPropInfoListSubItemPropVesselUploadList =
      ReturnsPropDataPropInfoListSubItemPropVesselUploadListSubItem[];
    /** 各站点情况 */
    export interface ReturnsPropDataPropInfoListSubItem {
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 站点库存 */
      inventory: number;
      /** 销售量 */
      sales: number;
      /** 卸液情况 */
      vesselUploadList: ReturnsPropDataPropInfoListSubItemPropVesselUploadList;
    }
    /** 各站点情况 */
    export type ReturnsPropDataPropInfoList = ReturnsPropDataPropInfoListSubItem[];
    /** 数据负载 */
    export interface ReturnsPropData {
      /** 总库存 */
      totalInventory: number;
      /** 总销售 */
      totalSales: number;
      /** 总卸液 */
      totalUpload: number;
      /** 各站点情况 */
      infoList: ReturnsPropDataPropInfoList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Sec {
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 特种设备检查内容 */
    export interface ReturnsPropDataPropPositionListSubItemPropContentListSubItem {
      /** id */
      id: number;
      /** 设备状况字典表id：对应字典表中的主键 */
      conditionId: number;
      /** 设备状况描述 */
      conditionDesc: string;
      /** 异常内容 */
      content: string;
      /** 巡检结果 1：正常 2：异常 */
      result: number;
    }
    /** 检查内容列表 */
    export type ReturnsPropDataPropPositionListSubItemPropContentList =
      ReturnsPropDataPropPositionListSubItemPropContentListSubItem[];
    /** 特种设备部位 */
    export interface ReturnsPropDataPropPositionListSubItem {
      /** 设备部位id */
      positionId: number;
      /** 设备部位名称 */
      positionDesc: string;
      /** 检查内容列表 */
      contentList: ReturnsPropDataPropPositionListSubItemPropContentList;
    }
    /** 检查列表 */
    export type ReturnsPropDataPropPositionList = ReturnsPropDataPropPositionListSubItem[];
    /** 特种设备检查单查询响应 */
    export interface ReturnsPropData {
      /** 检查单id */
      id: number;
      /** 单据编号 */
      orderNo: string;
      /** 特种设备id（压力容器id） */
      equipId: number;
      /** 检查人员 */
      inspector: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 站点id */
      stationId: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 异常情况 */
      abnormalContent: string;
      /** 站点名称 */
      stationName: string;
      /** 设备名称 */
      equipName: string;
      /** 使用登记编号 */
      equipNo: string;
      /** 设备编号 */
      equipCode: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 检查列表 */
      positionList: ReturnsPropDataPropPositionList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查单编号 */
      orderNo?: string;
      /** 状态 1-检查中 2-检查完成 */
      status?: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate?: string;
      /** 检查开始日期 */
      checkStartDate?: string;
      /** 检查结束日期 */
      checkEndDate?: string;
      /** 提交开始日期 */
      submitStartDate?: string;
      /** 提交结束日期 */
      submitEndDate?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 特种设备检查查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 检查单编号 */
      orderNo: string;
      /** 特种设备id（压力容器id） */
      equipId: number;
      /** 工单id */
      workOrderId: number;
      /** 巡检人 */
      inspector: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 站点id */
      stationId: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 提交日期 */
      submitDate: string;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 处理结果 */
      handleResult: string;
      /** 站点名称 */
      stationName: string;
      /** 设备名称 */
      equipName: string;
      /** 使用登记编号 */
      equipNo: string;
      /** 设备编号 */
      equipCode: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace exportExcel {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 检查单编号 */
      orderNo?: string;
      /** 状态 1-检查中 2-检查完成 */
      status?: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate?: string;
      /** 检查开始日期 */
      checkStartDate?: string;
      /** 检查结束日期 */
      checkEndDate?: string;
      /** 提交开始日期 */
      submitStartDate?: string;
      /** 提交结束日期 */
      submitEndDate?: string;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace initData {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /** 特种设备检查内容 */
    export interface ReturnsPropDataPropPositionListSubItemPropContentListSubItem {
      /** id */
      id: number;
      /** 设备状况字典表id：对应字典表中的主键 */
      conditionId: number;
      /** 设备状况描述 */
      conditionDesc: string;
      /** 异常内容 */
      content: string;
      /** 巡检结果 1：正常 2：异常 */
      result: number;
    }
    /** 检查内容列表 */
    export type ReturnsPropDataPropPositionListSubItemPropContentList =
      ReturnsPropDataPropPositionListSubItemPropContentListSubItem[];
    /** 特种设备部位 */
    export interface ReturnsPropDataPropPositionListSubItem {
      /** 设备部位id */
      positionId: number;
      /** 设备部位名称 */
      positionDesc: string;
      /** 检查内容列表 */
      contentList: ReturnsPropDataPropPositionListSubItemPropContentList;
    }
    /** 检查列表 */
    export type ReturnsPropDataPropPositionList = ReturnsPropDataPropPositionListSubItem[];
    /** 特种设备检查单查询响应 */
    export interface ReturnsPropData {
      /** 检查单id */
      id: number;
      /** 单据编号 */
      orderNo: string;
      /** 特种设备id（压力容器id） */
      equipId: number;
      /** 检查人员 */
      inspector: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 站点id */
      stationId: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 检查结果 1-正常 2-异常 */
      checkResult: number;
      /** 异常情况 */
      abnormalContent: string;
      /** 站点名称 */
      stationName: string;
      /** 设备名称 */
      equipName: string;
      /** 使用登记编号 */
      equipNo: string;
      /** 设备编号 */
      equipCode: string;
      /** 状态名称 */
      statusDesc: string;
      /** 检查结果名称 */
      checkResultDesc: string;
      /** 检查列表 */
      positionList: ReturnsPropDataPropPositionList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace persist {
    /** 特种设备检查内容 */
    export interface OptionsPropContentListSubItem {
      /** id */
      id?: number;
      /** 设备状况字典表id：对应字典表中的主键 */
      conditionId?: number;
      /** 设备状况描述 */
      conditionDesc?: string;
      /** 异常内容 */
      content?: string;
      /** 巡检结果 1：正常 2：异常 */
      result?: number;
    }
    /** 检查内容列表 */
    export type OptionsPropContentList = OptionsPropContentListSubItem[];
    /** 持久化特种设备检查单请求 */
    export interface Options {
      /** 检查单id */
      id?: number;
      /** 特种设备id（压力容器id） */
      equipId?: number;
      /** 站点id */
      stationId: number;
      /** 巡检人 */
      inspector?: string;
      /** 状态 1-检查中 2-检查完成 */
      status: number;
      /** 检查结果 1-正常 2-异常 */
      checkResult?: number;
      /** 检查日期/年月 */
      checkDate: string;
      /** 异常情况 */
      abnormalContent?: string;
      /** 检查内容列表 */
      contentList: OptionsPropContentList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Wo {
  export namespace add {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 维修报告添加请求 */
    export interface Options {
      /** 报修内容 */
      contents: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number;
      /** 报修结论内容 */
      conclusionContent?: string;
      /** 实际检修内容与更换配件清单 */
      detailedList?: string;
      /** 维修性质 1-上门维修 2-急抢修 */
      nature?: number;
      /** 报修人 */
      repairApplicant?: string;
      /** 所属站点id */
      stationId: number;
      /** 站点负责人（联系人姓名中文） */
      contacts?: string;
      /** 站点联系方式 */
      phone?: string;
      /** 报修日期 */
      repairDate?: string;
      /** 检查单id（关联派发维修工单的检查单） */
      checkId?: number;
      /** 检查单类型 1-安全检查单 2-特种设备检查单 */
      checkType?: number;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropAttachmentsSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 审核时的附件列表 */
    export type ReturnsPropDataPropAttachments = ReturnsPropDataPropAttachmentsSubItem[];
    /** 附件查询响应 */
    export interface ReturnsPropDataPropAddAttachmentsSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 新建时的附件列表 */
    export type ReturnsPropDataPropAddAttachments = ReturnsPropDataPropAddAttachmentsSubItem[];
    /** 维修报告主键查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 工单编号 */
      orderNo: string;
      /** 报修内容 */
      contents: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion: number;
      /** 报修结论内容 */
      conclusionContent: string;
      /** 实际检修内容与更换配件清单 */
      detailedList: string;
      /** 维修性质 1-上门维修 2-急抢修 */
      nature: number;
      /** 报修人 */
      repairApplicant: string;
      /** 所属站点id */
      stationId: number;
      /** 站点负责人 */
      contacts: string;
      /** 站点联系方式 */
      phone: string;
      /** 报修日期 */
      repairDate: string;
      /** 检查单id（关联派发维修工单的检查单） */
      checkId: number;
      /** 检查单类型 1-安全检查单 2-特种设备检查单 */
      checkType: number;
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status: number;
      /** 报修单位（默认总公司） */
      repairUnit: string;
      /** 站点名称 */
      stationName: string;
      /** 维修性质名称 */
      natureDesc: string;
      /** 报修结论名称 */
      conclusionDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 驳回原因/故障未修复原因 */
      rejectReason: string;
      /** 确认人 */
      confirmedBy: string;
      /** 确认日期 */
      confirmDate: string;
      /** 新建附件数量大于0表示有附件 */
      addAttCount: number;
      /** 审核附件数量大于0表示有附件 */
      attCount: number;
      /** 站点地址 */
      address: string;
      /** 审核时的附件列表 */
      attachments: ReturnsPropDataPropAttachments;
      /** 新建时的附件列表 */
      addAttachments: ReturnsPropDataPropAddAttachments;
      /** 日/月/特种设备安全检查单编号 */
      checkOrderNo: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 工单编号 */
      orderNo?: string;
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status?: number;
      /** 维修性质 1-上门维修 2-急抢修 */
      nature?: number;
      /** 开始报修日期 */
      beginDate?: string;
      /** 结束报修日期 */
      endDate?: string;
      /** 主键集合 */
      idList?: any[];
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 维修报告查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 工单编号 */
      orderNo: string;
      /** 报修内容 */
      contents: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion: number;
      /** 报修结论内容 */
      conclusionContent: string;
      /** 实际检修内容与更换配件清单 */
      detailedList: string;
      /** 维修性质 1-上门维修 2-急抢修 */
      nature: number;
      /** 报修人 */
      repairApplicant: string;
      /** 所属站点id */
      stationId: number;
      /** 站点负责人 */
      contacts: string;
      /** 站点联系方式 */
      phone: string;
      /** 报修日期 */
      repairDate: string;
      /** 检查单id（关联派发维修工单的检查单） */
      checkId: number;
      /** 检查单类型 1-安全检查单 2-特种设备检查单 */
      checkType: number;
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status: number;
      /** 报修单位（默认总公司） */
      repairUnit: string;
      /** 站点名称 */
      stationName: string;
      /** 维修性质名称 */
      natureDesc: string;
      /** 报修结论名称 */
      conclusionDesc: string;
      /** 状态名称 */
      statusDesc: string;
      /** 驳回原因/故障未修复原因 */
      rejectReason: string;
      /** 确认人 */
      confirmedBy: string;
      /** 确认日期 */
      confirmDate: string;
      /** 新建附件数量大于0表示有附件 */
      addAttCount: number;
      /** 审核附件数量大于0表示有附件 */
      attCount: number;
      /** 站点地址 */
      address: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace exportExcel {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 工单编号 */
      orderNo?: string;
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status?: number;
      /** 维修性质 1-上门维修 2-急抢修 */
      nature?: number;
      /** 开始报修日期 */
      beginDate?: string;
      /** 结束报修日期 */
      endDate?: string;
      /** 主键集合 */
      idList?: any[];
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 维修报告编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number;
      /** 报修结论内容 */
      conclusionContent?: string;
      /** 实际检修内容与更换配件清单 */
      detailedList?: string;
      /** 状态 1-待审核 2-待维修 3-维修中 4-维修完成 5-已驳回 */
      status?: number;
      /** 确认人 */
      confirmedBy?: string;
      /** 驳回原因 */
      rejectReason?: string;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace SalesData {
  export namespace getDaySalesData {
    export interface Options {
      /** 起始时间 yyyy-MM-dd HH:mm:ss */
      beginDate?: string;
      /** 结束时间 yyyy-MM-dd HH:mm:ss */
      endDate?: string;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace getSalesPaged {
    export interface Options {
      /** 所属机构id */
      stationId?: number;
      /** 查询开始时间 yyyy-MM-dd HH:mm:ss */
      beginDate?: string;
      /** 查询结束时间 yyyy-MM-dd HH:mm:ss */
      endDate?: string;
      /** 排序（例如时间排序：time desc/asc） */
      orderByClause?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 站点id */
      stationId: number;
      /** 站点名称 */
      stationName: string;
      /** 加气时间 */
      time: string;
      /** 加气量 */
      gasVolume: number;
      /** 用户单位 */
      fleetName: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Pip {
  export namespace add {
    /** 压力管道新增请求 */
    export interface Options {
      /** 管道名称 */
      name: string;
      /** 所属站点id */
      stationId: number;
      /** 管道编号 */
      code: string;
      /** 管道级别 1-GC1 2-GC2 3-GC3 */
      level?: number;
      /** 设计单位id */
      designUnit?: number;
      /** 安装单位id */
      installationUnit?: number;
      /** 安装年月/年月日 */
      installDate?: string;
      /** 投用年月/年月日 */
      useDate?: string;
      /** 公称直径（mm) */
      nominalDiameter?: string;
      /** 公称壁厚（mm) */
      nominalWallThickness?: string;
      /** 管道长度（m) */
      pipeLength?: string;
      /** 压力（Mpa） */
      pressure?: string;
      /** 温度（℃） */
      temperature?: string;
      /** 介质 1-天然气 2-液化天然气 */
      mediumType?: number;
      /** 检验结论 1-合格 2-不合格 */
      conclusion?: number;
      /** 检验单位id */
      inspectionUnit?: number;
      /** 次检验日期：年月/年月日 */
      nextInspectionDate?: string;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 压力管道查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 所属站点id */
      stationId: number;
      /** 管道名称 */
      name: string;
      /** 管道编号 */
      code: string;
      /** 管道级别 1-GC1 2-GC2 3-GC3 */
      level: number;
      /** 设计单位id */
      designUnit: number;
      /** 安装单位id */
      installationUnit: number;
      /** 安装年月/年月日 */
      installDate: string;
      /** 站点id */
      useDate: string;
      /** 公称直径（mm) */
      nominalDiameter: string;
      /** 公称壁厚（mm) */
      nominalWallThickness: string;
      /** 管道长度（m) */
      pipeLength: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 温度（℃） */
      temperature: string;
      /** 介质 1-天然气 2-液化天然气 */
      mediumType: number;
      /** 检验结论 1-合格 2-不合格 */
      conclusion: number;
      /** 检验单位id */
      inspectionUnit: number;
      /** 下次检验日期：年月/年月日 */
      nextInspectionDate: string;
      /** 备注 */
      remark: string;
      /** 状态 1-正常 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 设计单位名称 */
      designUnitDesc: string;
      /** 安装单位名称 */
      installationUnitDesc: string;
      /** 检验单位名称 */
      inspectionUnitDesc: string;
      /** 管道级别名称 */
      levelDesc: string;
      /** 检验结论名称 */
      conclusionDesc: string;
      /** 介质名称 */
      mediumDesc: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 管道编号 */
      code?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 压力管道查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 所属站点id */
      stationId: number;
      /** 管道名称 */
      name: string;
      /** 管道编号 */
      code: string;
      /** 管道级别 1-GC1 2-GC2 3-GC3 */
      level: number;
      /** 设计单位id */
      designUnit: number;
      /** 安装单位id */
      installationUnit: number;
      /** 安装年月/年月日 */
      installDate: string;
      /** 站点id */
      useDate: string;
      /** 公称直径（mm) */
      nominalDiameter: string;
      /** 公称壁厚（mm) */
      nominalWallThickness: string;
      /** 管道长度（m) */
      pipeLength: string;
      /** 压力（Mpa） */
      pressure: string;
      /** 温度（℃） */
      temperature: string;
      /** 介质 1-天然气 2-液化天然气 */
      mediumType: number;
      /** 检验结论 1-合格 2-不合格 */
      conclusion: number;
      /** 检验单位id */
      inspectionUnit: number;
      /** 下次检验日期：年月/年月日 */
      nextInspectionDate: string;
      /** 备注 */
      remark: string;
      /** 状态 1-正常 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 设计单位名称 */
      designUnitDesc: string;
      /** 安装单位名称 */
      installationUnitDesc: string;
      /** 检验单位名称 */
      inspectionUnitDesc: string;
      /** 管道级别名称 */
      levelDesc: string;
      /** 检验结论名称 */
      conclusionDesc: string;
      /** 介质名称 */
      mediumDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPipeLengthSum {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: string;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace discard {
    /** 主键查询请求 */
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 压力管道编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 所属站点id */
      stationId?: number;
      /** 管道名称 */
      name?: string;
      /** 管道编号 */
      code?: string;
      /** 管道级别 1-GC1 2-GC2 3-GC3 */
      level?: number;
      /** 设计单位id */
      designUnit?: number;
      /** 安装单位id */
      installationUnit?: number;
      /** 安装年月/年月日 */
      installDate?: string;
      /** 投用年月/年月日 */
      useDate?: string;
      /** 公称直径（mm) */
      nominalDiameter?: string;
      /** 公称壁厚（mm) */
      nominalWallThickness?: string;
      /** 管道长度（m) */
      pipeLength?: string;
      /** 压力（Mpa） */
      pressure?: string;
      /** 温度（℃） */
      temperature?: string;
      /** 介质 1-天然气 2-液化天然气 */
      mediumType?: number;
      /** 检验结论 1-合格 2-不合格 */
      conclusion?: number;
      /** 检验单位id */
      inspectionUnit?: number;
      /** 次检验日期：年月/年月日 */
      nextInspectionDate?: string;
      /** 备注 */
      remark?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Pv {
  export namespace add {
    /** 常规设备新增请求 */
    export interface Options {
      /** 设备名称 */
      name: string;
      /** 设备简称 */
      shortName?: string;
      /** 设备编号 */
      code: string;
      /** 类型 1-槽罐 2-泵组 */
      type: number;
      /** 使用证编号 */
      licenseNo?: string;
      /** 注册码 */
      regCode?: string;
      /** 生产厂家id */
      manufacturer?: number;
      /** 设计压力（Mpa） */
      designPressure?: string;
      /** 检验周期 */
      inspectionCycle?: number;
      /** 投运日期 */
      operationDate?: string;
      /** 本次校验日期 */
      thisTimeCheckDate?: string;
      /** 下次年验日期 */
      nextAnnualInspectionDate?: string;
      /** 下次全验日期 */
      nextCompleteInspectionDate?: string;
      /** 安装位置 */
      installationPosition?: string;
      /** 所属站点 */
      stationId?: number;
      /** 检验单位id */
      inspectionUnit?: number;
      /** 维护保养单位id */
      maintenanceUnit?: number;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getByTypeStation {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /** 查询站点压力容器响应 */
    export interface ReturnsPropDataSubItem {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name: string;
      /** 设备简称 */
      shortName: string;
      /** 使用证编号 */
      licenseNo: string;
      /** 设备编号 */
      equipCode: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getByStation {
    export interface Options {
      stationId?: number;
    }
    export type O = Options;
    /** 查询站点压力容器响应 */
    export interface ReturnsPropDataSubItem {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name: string;
      /** 设备简称 */
      shortName: string;
      /** 使用证编号 */
      licenseNo: string;
      /** 设备编号 */
      equipCode: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 压力容器查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name: string;
      /** 设备简称 */
      shortName: string;
      /** 设备编号 */
      code: string;
      /** 使用证编号 */
      licenseNo: string;
      /** 注册码 */
      regCode: string;
      /** 生产厂家id */
      manufacturer: number;
      /** 设计压力（Mpa） */
      designPressure: string;
      /** 检验周期 */
      inspectionCycle: number;
      /** 投运日期 */
      operationDate: string;
      /** 本次校验日期 */
      thisTimeCheckDate: string;
      /** 下次年验日期 */
      nextAnnualInspectionDate: string;
      /** 下次全验日期 */
      nextCompleteInspectionDate: string;
      /** 安装位置 */
      installationPosition: string;
      /** 所属站点id */
      stationId: number;
      /** 检验单位id */
      inspectionUnit: number;
      /** 维护保养单位id */
      maintenanceUnit: number;
      /** 类型 1-槽罐 2-泵组 */
      type: number;
      /** 状态 1-正常 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 生产厂家名称 */
      manufacturerDesc: string;
      /** 检验单位名称 */
      inspectionUnitDesc: string;
      /** 维护保养单位名称 */
      maintenanceUnitDesc: string;
      /** 类型名称 */
      typeDesc: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 设备名称 */
      name?: string;
      /** 生产厂家 */
      manufacturer?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 压力容器查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name: string;
      /** 设备简称 */
      shortName: string;
      /** 设备编号 */
      code: string;
      /** 使用证编号 */
      licenseNo: string;
      /** 注册码 */
      regCode: string;
      /** 生产厂家id */
      manufacturer: number;
      /** 设计压力（Mpa） */
      designPressure: string;
      /** 检验周期 */
      inspectionCycle: number;
      /** 投运日期 */
      operationDate: string;
      /** 本次校验日期 */
      thisTimeCheckDate: string;
      /** 下次年验日期 */
      nextAnnualInspectionDate: string;
      /** 下次全验日期 */
      nextCompleteInspectionDate: string;
      /** 安装位置 */
      installationPosition: string;
      /** 所属站点id */
      stationId: number;
      /** 检验单位id */
      inspectionUnit: number;
      /** 维护保养单位id */
      maintenanceUnit: number;
      /** 类型 1-槽罐 2-泵组 */
      type: number;
      /** 状态 1-正常 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 生产厂家名称 */
      manufacturerDesc: string;
      /** 检验单位名称 */
      inspectionUnitDesc: string;
      /** 维护保养单位名称 */
      maintenanceUnitDesc: string;
      /** 类型名称 */
      typeDesc: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace exportExcel {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 设备名称 */
      name?: string;
      /** 生产厂家 */
      manufacturer?: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace discard {
    /** 主键查询请求 */
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 常规设备编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 设备名称 */
      name?: string;
      /** 设备简称 */
      shortName?: string;
      /** 设备编号 */
      code?: string;
      /** 使用证编号 */
      licenseNo?: string;
      /** 注册码 */
      regCode?: string;
      /** 生产厂家id */
      manufacturer?: number;
      /** 设计压力（Mpa） */
      designPressure?: string;
      /** 检验周期 */
      inspectionCycle?: number;
      /** 投运日期 */
      operationDate?: string;
      /** 本次校验日期 */
      thisTimeCheckDate?: string;
      /** 下次年验日期 */
      nextAnnualInspectionDate?: string;
      /** 下次全验日期 */
      nextCompleteInspectionDate?: string;
      /** 安装位置 */
      installationPosition?: string;
      /** 所属站点 */
      stationId?: number;
      /** 检验单位id */
      inspectionUnit?: number;
      /** 维护保养单位id */
      maintenanceUnit?: number;
      /** 类型 1-槽罐 2-泵组 */
      type?: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace UserCustom {
  export namespace getUserOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropData {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropDeviceIds;
      station: ReturnsPropDataPropStation;
      stationInfo: ReturnsPropDataPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getUserByUserId {
    export interface Options {
      userId: number;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropData {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropDeviceIds;
      station: ReturnsPropDataPropStation;
      stationInfo: ReturnsPropDataPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace User {
  export namespace addUser {
    /** 用户角色id */
    export type OptionsPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type OptionsPropDeviceIds = number[];
    /** 添加用户请求 */
    export interface Options {
      /** 登录账号 */
      loginName: string;
      /** 登录密码 */
      password: string;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup?: string;
      /** 用户头像图片相对路径 */
      avatar?: string;
      /** 用户状态 0-启用 1-禁用 */
      status?: string;
      /** 备注 */
      remark?: string;
      /** 用户所属机构id */
      orgId?: number;
      /** 用户所属机构路径 */
      path?: string;
      /** 供应商id */
      supplierId?: number;
      /** 用户角色id */
      roleIds: OptionsPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: OptionsPropDeviceIds;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropData {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropDeviceIds;
      station: ReturnsPropDataPropStation;
      stationInfo: ReturnsPropDataPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace uploadImg {
    export interface Options {
      uploadFile?: string;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropData {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropDeviceIds;
      station: ReturnsPropDataPropStation;
      stationInfo: ReturnsPropDataPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getUserOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropData {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropDeviceIds;
      station: ReturnsPropDataPropStation;
      stationInfo: ReturnsPropDataPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getUserByUserId {
    export interface Options {
      userId: number;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropData {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropDeviceIds;
      station: ReturnsPropDataPropStation;
      stationInfo: ReturnsPropDataPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getUsersPaged {
    export interface Options {
      /** 组织机构id */
      id?: number;
      userId?: number;
      loginName?: string;
      password?: string;
      userName?: string;
      avatarGroup?: string;
      avatar?: string;
      avatarUrl?: string;
      /** 用户状态 0-启用 1-禁用 */
      status?: string;
      remark?: string;
      createdBy?: string;
      updatedBy?: string;
      roleIds?: any[];
      deviceIds?: any[];
      /** 用户所属机构id */
      orgId?: number;
      /** 查询关键字 */
      queryKey?: string;
      /** 机构路径 */
      path?: string;
      /** 供应商id */
      supplierId?: number;
      /** 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType?: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 绑定的角色编号 */
    export type ReturnsPropDataPropListSubItemPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type ReturnsPropDataPropListSubItemPropDeviceIds = number[];
    /** 站点信息 */
    export interface ReturnsPropDataPropListSubItemPropStation {
      id: number;
      orgName: string;
      orgShortName: string;
      count: number;
      stationType: number;
    }
    /** 联系方式List */
    export type ReturnsPropDataPropListSubItemPropStationInfoPropPhoneNum = string[];
    /** 站点基本信息查询响应 */
    export interface ReturnsPropDataPropListSubItemPropStationInfo {
      /** 机构id */
      orgId: number;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 机构面积 */
      orgArea: string;
      /** 地址 */
      address: string;
      /** 联系方式 */
      contact: string;
      /** 联系方式List */
      phoneNum: ReturnsPropDataPropListSubItemPropStationInfoPropPhoneNum;
      /** 负责人 */
      manager: string;
      /** 人数 */
      workerCount: number;
    }
    /** 用户管理响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 用户id */
      id: number;
      /** 用户权限id */
      userId: number;
      /** 登录账号 */
      loginName: string;
      /** 用户类型 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType: number;
      /** 用户昵称 */
      userName: string;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
      /** 用户头像图片链接 */
      avatarUrl: string;
      /** 用户状态 0-启用 1-禁用 */
      status: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 更新时间 */
      updatedTime: string;
      /** 机构ID */
      orgId: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型ID */
      typeId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型名称 */
      typeName: string;
      /** 机构路径 */
      path: string;
      /** 绑定的角色编号 */
      roleIds: ReturnsPropDataPropListSubItemPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds: ReturnsPropDataPropListSubItemPropDeviceIds;
      station: ReturnsPropDataPropListSubItemPropStation;
      stationInfo: ReturnsPropDataPropListSubItemPropStationInfo;
      /** 供应商id */
      supplierId: number;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getImg {
    export interface Options {
      avatarGroup: string;
      avatar: string;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
  export namespace modifyUserAvatar {
    /** 更新用户头像请求 */
    export interface Options {
      /** 用户id */
      id: number;
      /** 用户头像组 */
      avatarGroup: string;
      /** 用户头像图片相对路径 */
      avatar: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyUser {
    /** 用户角色id */
    export type OptionsPropRoleIds = number[];
    /** 绑定的设备编号 */
    export type OptionsPropDeviceIds = number[];
    /** 用户管理请求 */
    export interface Options {
      /** 用户id */
      id?: number;
      /** 用户权限id */
      userId?: number;
      /** 登录账号 */
      loginName?: string;
      /** 登录密码 */
      password?: string;
      /** 用户昵称 */
      userName?: string;
      /** 用户头像组 */
      avatarGroup?: string;
      /** 用户头像图片相对路径 */
      avatar?: string;
      /** 用户头像图片链接 */
      avatarUrl?: string;
      /** 用户状态 0-启用 1-禁用 */
      status?: string;
      /** 备注 */
      remark?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
      /** 用户角色id */
      roleIds?: OptionsPropRoleIds;
      /** 绑定的设备编号 */
      deviceIds?: OptionsPropDeviceIds;
      /** 用户所属机构id */
      orgId?: number;
      /** 查询关键字 */
      queryKey?: string;
      /** 机构路径 */
      path?: string;
      /** 供应商id */
      supplierId?: number;
      /** 0-集团用户 1-超级用户 2-公司用户 3-站点用户 4-供应商 */
      userType?: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeUser {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Gas {
  export namespace getGasPaged {
    export interface Options {
      /** 所属站点id */
      stationId?: number;
      /** 开始时间 */
      beginTime?: string;
      /** 结束时间 */
      endTime?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 用气监控查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 设备id */
      deviceId: number;
      /** 所属站点-冗余字段取设备站点id，防止设备站点发生变化 */
      stationId: number;
      /** LNG用气量 */
      gasConsumption: string;
      /** 上传时间 */
      time: string;
      /** 用气公司 */
      company: string;
      /** 1-用气 2-补气 3-卸液 */
      nature: number;
      /** 用气 补气 卸液 */
      natureDesc: string;
      /** 当前库存 */
      stock: string;
      /** 是否手动上传 0-是 1-否 */
      manualUpload: number;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Message {
  export namespace messageRead {
    /** 站内信id */
    export type OptionsPropMsgIdList = number[];
    /** 站内信已读请求 */
    export interface Options {
      /** 站内信id */
      msgIdList: OptionsPropMsgIdList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getUnreadCount {
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 状态 1-已读 2-未读 */
      status?: number;
      /** 站点id */
      stationId?: number;
      /** 开始时间 */
      beginTime?: string;
      /** 结束时间 */
      endTime?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 提示关联的业务主键 */
    export type ReturnsPropDataPropListSubItemPropRelationKeys = number[];
    /** 站内信查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 站点id */
      stationId: number;
      /** 通知内容 */
      content: string;
      /** 提交时间 */
      time: string;
      /** 通知类型 0-系统更新 1-维修工单 2-报告检测即将到期 3-资质证书即将到期 4-报警提示 */
      type: number;
      /** 通知类型 */
      typeDesc: string;
      /** 提示关联的业务主键 */
      relationKeys: ReturnsPropDataPropListSubItemPropRelationKeys;
      /** 状态 1-已读 2-未读 */
      status: number;
      /** 已读 未读 */
      statusDesc: string;
      /** 站点名称 */
      stationName: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Mro {
  export namespace add {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 中修工单添加请求 */
    export interface Options {
      /** 维修内容 */
      contents: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number;
      /** 报修结论内容 */
      conclusionContent?: string;
      /** 实际检修内容与更换配件清单 */
      detailedList?: string;
      /** 维修性质 */
      nature?: string;
      /** 所属站点id */
      stationId?: number;
      /** 站点负责人 */
      contacts?: string;
      /** 站点联系方式 */
      phone?: string;
      /** 维修日期 */
      repairDate?: string;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 附件查询响应 */
    export interface ReturnsPropDataPropAttachmentsSubItem {
      /** 主键 */
      id: number;
      /** 文件名 */
      fileName: string;
      /** 上传者 */
      createdBy: string;
      /** 上传时间 */
      createdTime: string;
      /** 生效时间 */
      effectiveDay: string;
      /** 到期时间 */
      expiryDay: string;
      /** 有效期 */
      period: number;
      /** 状态 */
      fileStatus: number;
      /** 状态描述 */
      fileStatusDesc: string;
    }
    /** 附件列表 */
    export type ReturnsPropDataPropAttachments = ReturnsPropDataPropAttachmentsSubItem[];
    /** 中修工单主键查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 中修计划id */
      planId: number;
      /** 工单编号 */
      orderNo: string;
      /** 维修内容 */
      contents: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion: number;
      /** 报修结论内容 */
      conclusionContent: string;
      /** 实际检修内容与更换配件清单 */
      detailedList: string;
      /** 维修性质 */
      nature: string;
      /** 所属站点id */
      stationId: number;
      /** 站点负责人 */
      contacts: string;
      /** 站点联系方式 */
      phone: string;
      /** 维修日期（工单完成后回填） */
      repairDate: string;
      /** 状态 1-待维修 2-维修中 3-维修完成 */
      status: number;
      /** 报修站单位（默认总公司） */
      repairUnit: string;
      /** 站点名称 */
      stationName: string;
      /** 状态名称 */
      statusDesc: string;
      /** 报修结论名称 */
      conclusionDesc: string;
      /** 附件数量大于0表示有附件 */
      attCount: number;
      /** 中修计划编号 */
      planCode: string;
      /** 站点地址 */
      address: string;
      /** 附件列表 */
      attachments: ReturnsPropDataPropAttachments;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 站点id */
      stationId?: number;
      /** 工单编号 */
      orderNo?: string;
      /** 状态 1-待维修 2-维修中 3-维修完成 */
      status?: number;
      /** 开始维修日期 */
      beginDate?: string;
      /** 结束维修日期 */
      endDate?: string;
      /** 中修计划编号 */
      planCode?: string;
      /** 主键集合 */
      idList?: any[];
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 中修工单查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 中修计划id */
      planId: number;
      /** 工单编号 */
      orderNo: string;
      /** 维修内容 */
      contents: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion: number;
      /** 报修结论内容 */
      conclusionContent: string;
      /** 实际检修内容与更换配件清单 */
      detailedList: string;
      /** 维修性质 */
      nature: string;
      /** 所属站点id */
      stationId: number;
      /** 站点负责人 */
      contacts: string;
      /** 站点联系方式 */
      phone: string;
      /** 维修日期（工单完成后回填） */
      repairDate: string;
      /** 状态 1-待维修 2-维修中 3-维修完成 */
      status: number;
      /** 报修站单位（默认总公司） */
      repairUnit: string;
      /** 站点名称 */
      stationName: string;
      /** 状态名称 */
      statusDesc: string;
      /** 报修结论名称 */
      conclusionDesc: string;
      /** 附件数量大于0表示有附件 */
      attCount: number;
      /** 中修计划编号 */
      planCode: string;
      /** 站点地址 */
      address: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace automaticDispatch {
    export interface Options {
      dispatchDate: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 附件上传请求 */
    export interface OptionsPropFileListSubItem {
      /** 附件主键-主键无值则表示新增附件 */
      id?: number;
      /** 文件名 */
      fileName: string;
      /** 上传url */
      url?: string;
      /** 附件类型 0-安全管理 1-报告检测 2-站点附件 3-人员证书 4-工单附件（审核） 5-中修工单附件 6-安全培训 7-驾驶证 8-行驶证 9-工单附件（新建） */
      type: number;
      /** 关联主键 站点id 或 用户id */
      relationKey?: number;
      /** 生效时间 */
      effectiveDay?: string;
      /** 到期时间 */
      expiryDay?: string;
      /** 是否到期提醒 0-是 1-否 */
      expireRemind?: number;
      /** 异常信息 */
      errorMsg?: string;
    }
    /** 附件列表 */
    export type OptionsPropFileList = OptionsPropFileListSubItem[];
    /** 中修工单编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 维修内容 */
      contents?: string;
      /** 报修结论 1-故障已修复 2-故障未修复 */
      conclusion?: number;
      /** 报修结论内容 */
      conclusionContent?: string;
      /** 实际检修内容与更换配件清单 */
      detailedList?: string;
      /** 维修性质 */
      nature?: string;
      /** 所属站点id */
      stationId?: number;
      /** 站点负责人 */
      contacts?: string;
      /** 站点联系方式 */
      phone?: string;
      /** 维修日期（工单完成后回填） */
      repairDate?: string;
      /** 状态 1-待维修 2-维修中 3-维修完成 */
      status?: number;
      /** 附件列表 */
      fileList?: OptionsPropFileList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace remove {
    export interface Options {
      id: number;
    }
    export type O = Options;
    export type Returns = any;
    export type R = Returns['data'];
  }
}
export namespace Mrp {
  export namespace add {
    /** 维修报告查询请求 */
    export interface OptionsPropTimeListSubItem {
      /** 派单日期 */
      dispatchDate: string;
      /** 中修日期 */
      repairDate: string;
    }
    /** 派单/中修日期列表 */
    export type OptionsPropTimeList = OptionsPropTimeListSubItem[];
    /** 中修计划新增请求 */
    export interface Options {
      /** 所属站点id */
      stationId: number;
      /** 维修内容 */
      contents?: string;
      /** 维修性质 */
      nature?: string;
      /** 计划生效开始时间 */
      planStartDate: string;
      /** 计划生效结束时间 */
      planEndDate: string;
      /** 初始中修日期 */
      repairDate: string;
      /** 中修周期（单位月） */
      cycle?: number;
      /** 中修检查前N天 */
      daysAhead?: number;
      /** 备注 */
      remark?: string;
      /** 派单/中修日期列表 */
      timeList: OptionsPropTimeList;
    }
    export type O = Options;
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: number;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOne {
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 维修报告查询请求 */
    export interface ReturnsPropDataPropTimeListSubItem {
      /** 派单日期 */
      dispatchDate: string;
      /** 中修日期 */
      repairDate: string;
    }
    /** 派单/中修日期列表 */
    export type ReturnsPropDataPropTimeList = ReturnsPropDataPropTimeListSubItem[];
    /** 中修计划查询响应 */
    export interface ReturnsPropData {
      /** 主键 */
      id: number;
      /** 计划编号 */
      code: string;
      /** 所属站点id */
      stationId: number;
      /** 维修内容 */
      contents: string;
      /** 维修性质 */
      nature: string;
      /** 计划生效开始时间 */
      planStartDate: string;
      /** 计划生效结束时间 */
      planEndDate: string;
      /** 初始中修日期 */
      repairDate: string;
      /** 中修周期 */
      cycle: number;
      /** 中修周期单位 1-日 2-月 */
      cycleUnit: number;
      /** 派单提前天数：派单日期=当前中修日期-派单提前天数 */
      daysAhead: number;
      /** 下次派单日期 */
      nextDispatchDate: string;
      /** 下次中修日期：当前中修日期+周期 */
      nextRepairDate: string;
      /** 上次中修日期：当前中修日期-周期 */
      lastRepairDate: string;
      /** 备注 */
      remark: string;
      /** 状态 1-待执行 2-执行中 3-已完成 4-已终止 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 计划状态名称 */
      statusDesc: string;
      /** 派单/中修日期列表 */
      timeList: ReturnsPropDataPropTimeList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getPaged {
    export interface Options {
      /** 计划编号 */
      code?: string;
      /** 站点id */
      stationId?: number;
      /** 状态 1-待执行 2-执行中 3-已完成 4-已终止 */
      status?: number;
      /** 下次中修日期开始日期 */
      nextRepairStartDate?: string;
      /** 下次中修日期结束日期 */
      nextRepairEndDate?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 维修报告查询请求 */
    export interface ReturnsPropDataPropListSubItemPropTimeListSubItem {
      /** 派单日期 */
      dispatchDate: string;
      /** 中修日期 */
      repairDate: string;
    }
    /** 派单/中修日期列表 */
    export type ReturnsPropDataPropListSubItemPropTimeList =
      ReturnsPropDataPropListSubItemPropTimeListSubItem[];
    /** 中修计划查询响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 主键 */
      id: number;
      /** 计划编号 */
      code: string;
      /** 所属站点id */
      stationId: number;
      /** 维修内容 */
      contents: string;
      /** 维修性质 */
      nature: string;
      /** 计划生效开始时间 */
      planStartDate: string;
      /** 计划生效结束时间 */
      planEndDate: string;
      /** 初始中修日期 */
      repairDate: string;
      /** 中修周期 */
      cycle: number;
      /** 中修周期单位 1-日 2-月 */
      cycleUnit: number;
      /** 派单提前天数：派单日期=当前中修日期-派单提前天数 */
      daysAhead: number;
      /** 下次派单日期 */
      nextDispatchDate: string;
      /** 下次中修日期：当前中修日期+周期 */
      nextRepairDate: string;
      /** 上次中修日期：当前中修日期-周期 */
      lastRepairDate: string;
      /** 备注 */
      remark: string;
      /** 状态 1-待执行 2-执行中 3-已完成 4-已终止 */
      status: number;
      /** 站点名称 */
      stationName: string;
      /** 计划状态名称 */
      statusDesc: string;
      /** 派单/中修日期列表 */
      timeList: ReturnsPropDataPropListSubItemPropTimeList;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace edit {
    /** 维修报告查询请求 */
    export interface OptionsPropTimeListSubItem {
      /** 派单日期 */
      dispatchDate: string;
      /** 中修日期 */
      repairDate: string;
    }
    /** 派单/中修日期列表 */
    export type OptionsPropTimeList = OptionsPropTimeListSubItem[];
    /** 中修计划编辑请求 */
    export interface Options {
      /** 主键 */
      id: number;
      /** 中修检查前N天 */
      daysAhead?: number;
      /** 备注 */
      remark?: string;
      /** 派单/中修日期列表 */
      timeList?: OptionsPropTimeList;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace stop {
    /** 主键查询请求 */
    export interface Options {
      /** 主键 */
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Dict {
  export namespace addValue {
    /** 字典值请求 */
    export interface Options {
      /** 字典id */
      id?: number;
      /** 字典类型id */
      typeId: number;
      /** 子项编码 */
      dicCode: string;
      /** 子项字典名称 */
      dicValue?: string;
      /** 字典描述 */
      dicDesc?: string;
      /** 状态 0-启用 1-禁用 */
      status?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
    }
    export type O = Options;
    /** 字典值响应 */
    export interface ReturnsPropData {
      /** 字典id */
      id: number;
      /** 字典类型id */
      typeId: number;
      /** 字典类型名称 */
      typeKey: string;
      /** 子项编码 */
      dicCode: string;
      /** 子项字典名称 */
      dicValue: string;
      /** 字典描述 */
      dicDesc: string;
      /** 值为1时不允许操作该记录 */
      operation: string;
      /** 状态 0-启用 1-禁用 */
      status: string;
      /** 创建人 */
      createdBy: string;
      /** 更新人 */
      updatedBy: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace addType {
    /** 字典类型请求 */
    export interface Options {
      /** 数据字典类型id */
      id?: number;
      /** 字典编码 */
      typeKey: string;
      /** 字典类型值 */
      typeValue?: string;
      /** 字典类型描述 */
      typeDesc?: string;
      /** 字典类型状态 0-启用 1-禁用 */
      status?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
    }
    export type O = Options;
    /** 字典类型响应 */
    export interface ReturnsPropData {
      /** 数据字典类型id */
      id: number;
      /** 字典编码 */
      typeKey: string;
      /** 字典类型值 */
      typeValue: string;
      /** 字典类型描述 */
      typeDesc: string;
      /** 值为1时不允许操作该条记录 */
      operation: string;
      /** 字典类型状态 0-启用 1-禁用 */
      status: string;
      /** 创建人 */
      createdBy: string;
      /** 更新人 */
      updatedBy: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getValuesByKey {
    export interface Options {
      typeKey: string;
    }
    export type O = Options;
    /** 字典值响应 */
    export interface ReturnsPropDataSubItem {
      /** 字典id */
      id: number;
      /** 字典类型id */
      typeId: number;
      /** 字典类型名称 */
      typeKey: string;
      /** 子项编码 */
      dicCode: string;
      /** 子项字典名称 */
      dicValue: string;
      /** 字典描述 */
      dicDesc: string;
      /** 值为1时不允许操作该记录 */
      operation: string;
      /** 状态 0-启用 1-禁用 */
      status: string;
      /** 创建人 */
      createdBy: string;
      /** 更新人 */
      updatedBy: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getValuesByKeys {
    export interface Options {
      typeKeyList: any[];
    }
    export type O = Options;
    /** 字典值响应 */
    export interface ReturnsPropDataSubItemPropDictValueListSubItem {
      /** 字典id */
      id: number;
      /** 字典类型id */
      typeId: number;
      /** 字典类型名称 */
      typeKey: string;
      /** 子项编码 */
      dicCode: string;
      /** 子项字典名称 */
      dicValue: string;
      /** 字典描述 */
      dicDesc: string;
      /** 值为1时不允许操作该记录 */
      operation: string;
      /** 状态 0-启用 1-禁用 */
      status: string;
      /** 创建人 */
      createdBy: string;
      /** 更新人 */
      updatedBy: string;
    }
    /** 字典项列表 */
    export type ReturnsPropDataSubItemPropDictValueList =
      ReturnsPropDataSubItemPropDictValueListSubItem[];
    /** 字典列表查询响应 */
    export interface ReturnsPropDataSubItem {
      /** 字典key */
      typeKey: string;
      /** 字典项列表 */
      dictValueList: ReturnsPropDataSubItemPropDictValueList;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getTypes {
    export interface Options {
      typeKey?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 字典类型响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 数据字典类型id */
      id: number;
      /** 字典编码 */
      typeKey: string;
      /** 字典类型值 */
      typeValue: string;
      /** 字典类型描述 */
      typeDesc: string;
      /** 值为1时不允许操作该条记录 */
      operation: string;
      /** 字典类型状态 0-启用 1-禁用 */
      status: string;
      /** 创建人 */
      createdBy: string;
      /** 更新人 */
      updatedBy: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getValues {
    export interface Options {
      typeId: number;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 字典值响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 字典id */
      id: number;
      /** 字典类型id */
      typeId: number;
      /** 字典类型名称 */
      typeKey: string;
      /** 子项编码 */
      dicCode: string;
      /** 子项字典名称 */
      dicValue: string;
      /** 字典描述 */
      dicDesc: string;
      /** 值为1时不允许操作该记录 */
      operation: string;
      /** 状态 0-启用 1-禁用 */
      status: string;
      /** 创建人 */
      createdBy: string;
      /** 更新人 */
      updatedBy: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyType {
    /** 字典类型请求 */
    export interface Options {
      /** 数据字典类型id */
      id?: number;
      /** 字典编码 */
      typeKey: string;
      /** 字典类型值 */
      typeValue?: string;
      /** 字典类型描述 */
      typeDesc?: string;
      /** 字典类型状态 0-启用 1-禁用 */
      status?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyValue {
    /** 字典值请求 */
    export interface Options {
      /** 字典id */
      id?: number;
      /** 字典类型id */
      typeId: number;
      /** 子项编码 */
      dicCode: string;
      /** 子项字典名称 */
      dicValue?: string;
      /** 字典描述 */
      dicDesc?: string;
      /** 状态 0-启用 1-禁用 */
      status?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeType {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeValue {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
export namespace Gisc {
  export namespace addOrg {
    /** 组织机构请求 */
    export interface Options {
      /** 组织机构id */
      id?: number;
      /** 组织机构编码 */
      orgCode?: string;
      /** 组织机构名称 */
      orgName?: string;
      /** 机构名称简写 */
      orgShortName?: string;
      /** 组织机构地址 */
      orgAdress?: string;
      /** 父节点id */
      parentId?: number;
      /** 机构类型字典id */
      typeId?: number;
      /** 组织机构等级字典id */
      levelId?: number;
      /** 备注 */
      remark?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
      /** 查询关键字 */
      queryKey?: string;
    }
    export type O = Options;
    /** 组织机构响应 */
    export interface ReturnsPropData {
      /** 组织机构id */
      id: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 组织机构地址 */
      orgAdress: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型字典值id */
      typeId: number;
      /** 机构类型名称 */
      typeName: string;
      /** 组织机构等级字典id */
      levelId: number;
      /** 组织机构等级 */
      level: string;
      /** 组织机构等级名称 */
      levelName: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 机构路径 */
      path: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgOne {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 组织机构响应 */
    export interface ReturnsPropData {
      /** 组织机构id */
      id: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 组织机构地址 */
      orgAdress: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型字典值id */
      typeId: number;
      /** 机构类型名称 */
      typeName: string;
      /** 组织机构等级字典id */
      levelId: number;
      /** 组织机构等级 */
      level: string;
      /** 组织机构等级名称 */
      levelName: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 机构路径 */
      path: string;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgs {
    export interface Options {
      /** 组织机构id */
      id?: number;
      orgCode?: string;
      orgName?: string;
      orgShortName?: string;
      orgAdress?: string;
      /** 父节点id */
      parentId?: number;
      /** 机构类型字典id */
      typeId?: number;
      /** 组织机构等级字典id */
      levelId?: number;
      remark?: string;
      createdBy?: string;
      updatedBy?: string;
      /** 查询关键字 */
      queryKey?: string;
    }
    export type O = Options;
    /** 组织机构响应 */
    export interface ReturnsPropDataSubItem {
      /** 组织机构id */
      id: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 组织机构地址 */
      orgAdress: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型字典值id */
      typeId: number;
      /** 机构类型名称 */
      typeName: string;
      /** 组织机构等级字典id */
      levelId: number;
      /** 组织机构等级 */
      level: string;
      /** 组织机构等级名称 */
      levelName: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 机构路径 */
      path: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgByUser {
    export interface Options {
      /** 组织机构id */
      id?: number;
      orgCode?: string;
      orgName?: string;
      orgShortName?: string;
      orgAdress?: string;
      /** 父节点id */
      parentId?: number;
      /** 机构类型字典id */
      typeId?: number;
      /** 组织机构等级字典id */
      levelId?: number;
      remark?: string;
      createdBy?: string;
      updatedBy?: string;
      /** 查询关键字 */
      queryKey?: string;
    }
    export type O = Options;
    /** 组织机构响应 */
    export interface ReturnsPropDataSubItem {
      /** 组织机构id */
      id: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 组织机构地址 */
      orgAdress: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型字典值id */
      typeId: number;
      /** 机构类型名称 */
      typeName: string;
      /** 组织机构等级字典id */
      levelId: number;
      /** 组织机构等级 */
      level: string;
      /** 组织机构等级名称 */
      levelName: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 机构路径 */
      path: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgTree {
    export interface Options {
      id?: number;
    }
    export type O = Options;
    /** 组织机构响应 */
    export interface ReturnsPropDataSubItem {
      /** 组织机构id */
      id: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 组织机构地址 */
      orgAdress: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型字典值id */
      typeId: number;
      /** 机构类型名称 */
      typeName: string;
      /** 组织机构等级字典id */
      levelId: number;
      /** 组织机构等级 */
      level: string;
      /** 组织机构等级名称 */
      levelName: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 机构路径 */
      path: string;
    }
    /** 数据负载 */
    export type ReturnsPropData = ReturnsPropDataSubItem[];
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace getOrgsPaged {
    export interface Options {
      /** 组织机构id */
      id?: number;
      orgCode?: string;
      orgName?: string;
      orgShortName?: string;
      orgAdress?: string;
      /** 父节点id */
      parentId?: number;
      /** 机构类型字典id */
      typeId?: number;
      /** 组织机构等级字典id */
      levelId?: number;
      remark?: string;
      createdBy?: string;
      updatedBy?: string;
      /** 查询关键字 */
      queryKey?: string;
      pageNum: number;
      pageSize: number;
    }
    export type O = Options;
    /** 组织机构响应 */
    export interface ReturnsPropDataPropListSubItem {
      /** 组织机构id */
      id: number;
      /** 组织机构编码 */
      orgCode: string;
      /** 组织机构名称 */
      orgName: string;
      /** 机构名称简写 */
      orgShortName: string;
      /** 组织机构地址 */
      orgAdress: string;
      /** 父节点id */
      parentId: number;
      /** 机构类型 */
      type: string;
      /** 机构类型字典值id */
      typeId: number;
      /** 机构类型名称 */
      typeName: string;
      /** 组织机构等级字典id */
      levelId: number;
      /** 组织机构等级 */
      level: string;
      /** 组织机构等级名称 */
      levelName: string;
      /** 备注 */
      remark: string;
      /** 创建人 */
      createdBy: string;
      /** 创建时间 */
      createdTime: string;
      /** 更新人 */
      updatedBy: string;
      /** 机构路径 */
      path: string;
    }
    export type ReturnsPropDataPropList = ReturnsPropDataPropListSubItem[];
    /** 通用分页信息 */
    export interface ReturnsPropData {
      /** 当前页 */
      currentPage: number;
      /** 每页的数量 */
      pageSize: number;
      /** 总页数 */
      totalPage: number;
      /** 总记录数 */
      totalNum: number;
      list: ReturnsPropDataPropList;
    }
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace modifyOrg {
    /** 组织机构请求 */
    export interface Options {
      /** 组织机构id */
      id?: number;
      /** 组织机构编码 */
      orgCode?: string;
      /** 组织机构名称 */
      orgName?: string;
      /** 机构名称简写 */
      orgShortName?: string;
      /** 组织机构地址 */
      orgAdress?: string;
      /** 父节点id */
      parentId?: number;
      /** 机构类型字典id */
      typeId?: number;
      /** 组织机构等级字典id */
      levelId?: number;
      /** 备注 */
      remark?: string;
      /** 创建人 */
      createdBy?: string;
      /** 更新人 */
      updatedBy?: string;
      /** 查询关键字 */
      queryKey?: string;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
  export namespace removeOrg {
    export interface Options {
      id: number;
    }
    export type O = Options;
    /** 数据负载 */
    export interface ReturnsPropData {}
    /**
     * 通用响应
     *
     * OK
     */
    export interface Returns {
      /** 响应状态 */
      status: number;
      /** 数据负载 */
      data: ReturnsPropData;
      /** 错误信息 */
      message: string;
    }
    export type R = Returns['data'];
  }
}
