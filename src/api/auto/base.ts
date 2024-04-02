// import { defHttp } from '@/utils/http/axios'
import request from '@/utils/axios'
import { AxiosRequestConfig } from 'axios'

export const createRequest = <TReq, TResp = any>(_: string, requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => {
    return <Promise<TResp>>request(requestConfigCreator(args))
  }
}

export const createNoParamsRequest = <TResp = any>(_: string, requestConfigCreator: () => AxiosRequestConfig) => {
  return () => {
    return <Promise<TResp>>request(requestConfigCreator())
  }
}
