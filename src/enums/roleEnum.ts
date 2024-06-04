export enum RoleEnum {
  /** 应用管理员 */
  APPLICATION_ADMIN = 'applicationAdmin',
  /** 集团管理员 */
  GROUP_ADMIN = 'group-admin',
  /** 子公司管理员 */
  COMPANY_ADMIN = 'company-admin',
  /** 站点管理员 */
  SITE_ADMIN = 'site-admin'
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
  SUPPERLIER = 4
}
