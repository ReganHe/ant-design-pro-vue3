import baseService from '@/utils/http/axios'
import { baseURL } from '@/utils/util'
import { API } from './types'

export const userLogin: API._Login = (data) => {
  const api = baseURL + `auth/login`
  return baseService.post(api, data)
}

export const logout: API._Logout = () => {
  const api = baseURL + `auth/logout`
  return baseService.get(api)
}

export interface States {
  rememberMe: boolean
  username: string
  password: string
}
