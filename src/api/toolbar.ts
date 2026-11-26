import { request } from '../lib/request'
import type { ControllerGroup, LinkCheckResult } from '../types'

export const toolbarApi = {
  addLinksFromDOM: () => request<unknown>('POST', '/v1/toolbar/addLinksFromDOM'),
  checkLinksFromDOM: () => request<unknown>('POST', '/v1/toolbar/checkLinksFromDOM'),
  getStatus: () => request<unknown>('GET', '/v1/toolbar/getStatus'),
  isAvailable: () => request<boolean>('GET', '/v1/toolbar/isAvailable'),
  pollCheckedLinksFromDOM: (checkID: string) =>
    request<LinkCheckResult>('POST', '/v1/toolbar/pollCheckedLinksFromDOM', {
      params: { checkID },
    }),
  specialURLHandling: (url: string) =>
    request<string>('POST', '/v1/toolbar/specialURLHandling', { params: { url } }),
  startDownloads: () => request<boolean>('POST', '/v1/toolbar/startDownloads'),
  stopDownloads: () => request<boolean>('POST', '/v1/toolbar/stopDownloads'),
  toggleAutomaticReconnect: () =>
    request<boolean>('POST', '/v1/toolbar/toggleAutomaticReconnect'),
  toggleClipboardMonitoring: () =>
    request<boolean>('POST', '/v1/toolbar/toggleClipboardMonitoring'),
  toggleDownloadSpeedLimit: () =>
    request<boolean>('POST', '/v1/toolbar/toggleDownloadSpeedLimit'),
  togglePauseDownloads: () => request<boolean>('POST', '/v1/toolbar/togglePauseDownloads'),
  togglePremium: () => request<boolean>('POST', '/v1/toolbar/togglePremium'),
  toggleStopAfterCurrentDownload: () =>
    request<boolean>('POST', '/v1/toolbar/toggleStopAfterCurrentDownload'),
  triggerUpdate: () => request<boolean>('POST', '/v1/toolbar/triggerUpdate'),
}

export const toolbarGroup: ControllerGroup = {
  name: 'ToolbarController',
  basePath: '/v1/toolbar',
  endpoints: Object.keys(toolbarApi),
}
