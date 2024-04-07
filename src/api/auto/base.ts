import jsonRequest from '@/utils/axios/clients/json'
import blobRequest from '@/utils/axios/clients/blob'
import { AxiosRequestConfig } from 'axios'
import { BlobResp } from '#/axios'

export const createRequest = <TReq, TResp = any>(_: string, requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => <Promise<TResp>>jsonRequest(requestConfigCreator(args))
}

export const createNoParamsRequest = <TResp = any>(_: string, requestConfigCreator: () => AxiosRequestConfig) => {
  return () => <Promise<TResp>>jsonRequest(requestConfigCreator())
}

export const createBlobRequest = <TReq>(_: string, requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => blobRequest(requestConfigCreator(args)) as unknown as Promise<BlobResp>
}
