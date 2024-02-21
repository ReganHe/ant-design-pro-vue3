import { defHttp } from '/@/utils/http/axios';
import { AxiosRequestConfig } from 'axios';

export const createRequest = <TReq, TResp = any>(
  _: string,
  requestConfigCreator: (args: TReq) => AxiosRequestConfig
) => {
  return (args: TReq) => {
    return defHttp.request<TResp>(requestConfigCreator(args));
  };
};

export const createNoParamsRequest = <TResp = any>(
  _: string,
  requestConfigCreator: () => AxiosRequestConfig
) => {
  return () => {
    return defHttp.request<TResp>(requestConfigCreator());
  };
};
