export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string
  // Service interface url
  VITE_GLOB_API_URL: string
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string
  // 权限平台-应用ID
  VITE_GLOB_APP_ID: string
  // 权限平台-设备ID
  VITE_GLOB_DEVICE_ID: string
  // 密码过期预提醒天数
  VITE_GLOB_PWD_EXPIRE_IN_DAYS: string
}
