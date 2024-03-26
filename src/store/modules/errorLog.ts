import dayjs from 'dayjs'
import { defineStore } from 'pinia'
import { store } from '@/store'
import type { ErrorLogInfo } from '#/store'
import { Nullable } from '#/global'

export interface ErrorLogState {
  errorLogInfoList: Nullable<ErrorLogInfo[]>
  errorLogListCount: number
}

export const useErrorLogStore = defineStore({
  id: 'app-error-log',
  state: (): ErrorLogState => ({
    errorLogInfoList: null,
    errorLogListCount: 0
  }),
  getters: {
    getErrorLogInfoList(): ErrorLogInfo[] {
      return this.errorLogInfoList || []
    },
    getErrorLogListCount(): number {
      return this.errorLogListCount
    }
  },
  actions: {
    addErrorLogInfo(info: ErrorLogInfo) {
      const item = {
        ...info,
        time: dayjs().format('YYYY-MM-DD HH:mm:ss')
      }
      this.errorLogInfoList = [item, ...(this.errorLogInfoList || [])]
      this.errorLogListCount += 1
    },

    setErrorLogListCount(count: number): void {
      this.errorLogListCount = count
    }
  }
})

// Need to be used outside the setup
export function useErrorLogStoreWithOut() {
  return useErrorLogStore(store)
}
