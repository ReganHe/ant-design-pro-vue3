import { AxiosRequestConfig } from 'axios'
import { BlobResp } from '#/axios'
import jsonRequest from '@/utils/axios/clients/json'
import blobRequest from '@/utils/axios/clients/blob'

export const createRequest = <TReq, TResp = any>(_: string, requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => <Promise<TResp>>jsonRequest(requestConfigCreator(args))
}

export const createNoParamsRequest = <TResp = any>(_: string, requestConfigCreator: () => AxiosRequestConfig) => {
  return () => <Promise<TResp>>jsonRequest(requestConfigCreator())
}

export const createBlobRequest = <TReq>(_: string, requestConfigCreator: (args: TReq) => AxiosRequestConfig) => {
  return (args: TReq) => blobRequest(requestConfigCreator(args)) as unknown as Promise<BlobResp>
}

export const createNoParamsBlobRequest = (_: string, requestConfigCreator: () => AxiosRequestConfig) => {
  return () => blobRequest(requestConfigCreator()) as unknown as Promise<BlobResp>
}
