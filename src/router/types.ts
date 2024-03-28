import { RoleEnum } from '@/enums/roleEnum'
import { defineComponent } from 'vue'
import type { RouteMeta } from 'vue-router'

export type Component<T extends any = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

export interface RouterMeta {
  title: string
  keepAlive?: boolean
  icon?: any
  permission?: Array<string>
  target?: string
  hidden?: boolean
  hiddenHeaderContent?: boolean
  hideHeader?: boolean
  blank?: boolean
}

export interface Router {
  name: string
  path: string
  redirect?: string
  meta?: RouterMeta
  component?: Component | string
  children?: Router[]
  hidden?: boolean
  hideChildrenInMenu?: boolean
}

export interface MenuTag {
  type?: 'primary' | 'error' | 'warn' | 'success'
  content?: string
  dot?: boolean
}

export interface Menu {
  name: string

  icon?: string

  path: string

  // path contains param, auto assignment.
  paramPath?: string

  disabled?: boolean

  children?: Menu[]

  orderNo?: number

  roles?: RoleEnum[]

  meta?: Partial<RouteMeta>

  tag?: MenuTag

  hidden?: boolean
}
