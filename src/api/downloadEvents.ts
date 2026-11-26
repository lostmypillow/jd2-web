import { request } from '../lib/request'
import type { ControllerGroup, DownloadListDiff } from '../types'

export const downloadEventsApi = {
  queryLinks: (queryParams: string, diffID: number) =>
    request<DownloadListDiff>('POST', '/v1/downloadevents/queryLinks', {
      params: { queryParams, diffID },
    }),
  setStatusEventInterval: (channelID: number, interval: number) =>
    request<boolean>('POST', '/v1/downloadevents/setStatusEventInterval', {
      params: { channelID, interval },
    }),
}

export const downloadEventsGroup: ControllerGroup = {
  name: 'DownloadEventsController',
  basePath: '/v1/downloadevents',
  endpoints: Object.keys(downloadEventsApi),
}
