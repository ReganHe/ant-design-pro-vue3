export enum RoleEnum {
  // 应用管理员
  APPLICATIONADMIN = 'applicationAdmin',
  // company admin
  COMPANYADMIN = 'company-admin',
  // site admin
  SITEADMIN = 'site-admin',
}

export enum UserTypeEnum {
  /** 超级用户 */
  SUPER = 1,
  /** 集团用户 */
  GROUP = 0,
  /** 子公司用户 */
  COMPANY = 2,
  /** 站点用户 */
  SITE = 3,
  /** 供应商用户 */
  SUPPERLIER = 4,
}
