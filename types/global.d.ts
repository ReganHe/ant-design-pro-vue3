/// <reference types="vite/client" />

declare type Indexable<T = any> = {
  [key: string]: T
}
declare type Nullable<T> = T | null
declare type Recordable<T = any> = Record<string, T>
export interface ViteEnv {
  VITE_PORT: number
  VITE_USE_PWA: boolean
  VITE_PUBLIC_PATH: string
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
  VITE_USE_CDN: boolean
  VITE_DROP_CONSOLE: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  VITE_LEGACY: boolean
  VITE_USE_IMAGEMIN: boolean
  VITE_GENERATE_UI: string
}
