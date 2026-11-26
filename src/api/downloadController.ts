import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const downloadControllerApi = {
  forceDownload: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadcontroller/forceDownload', {
      params: { linkIds, packageIds },
    }),
  getCurrentState: () => request<string>('GET', '/v1/downloadcontroller/getCurrentState'),
  getSpeedInBps: () => request<number>('GET', '/v1/downloadcontroller/getSpeedInBps'),
  pause: (value: boolean) =>
    request<boolean>('POST', '/v1/downloadcontroller/pause', { params: { value } }),
  start: () => request<boolean>('POST', '/v1/downloadcontroller/start'),
  stop: () => request<boolean>('POST', '/v1/downloadcontroller/stop'),
}

export const downloadControllerGroup: ControllerGroup = {
  name: 'DownloadControllerController',
  basePath: '/v1/downloadcontroller',
  endpoints: Object.keys(downloadControllerApi),
}
