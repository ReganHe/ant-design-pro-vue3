export type Crypt = (key: string, iv: string, data: string) => string

export interface ResponseBody {
  _status?: number
  _headers?: Object
  message: string
  timestamp: number
  result
  code: number
}

export interface StoreFile {
  [x: string]: string
}
