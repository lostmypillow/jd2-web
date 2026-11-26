import { request } from '../lib/request'
import type { ArchiveSettings, ArchiveStatus, ControllerGroup } from '../types'

export const extractionApi = {
  addArchivePassword: (password: string) =>
    request<void>('POST', '/v1/extraction/addArchivePassword', { params: { password } }),
  cancelExtraction: (controllerID: number) =>
    request<boolean>('POST', '/v1/extraction/cancelExtraction', { params: { controllerID } }),
  getArchiveInfo: (linkIds: string, packageIds: string) =>
    request<ArchiveStatus[]>('POST', '/v1/extraction/getArchiveInfo', {
      params: { linkIds, packageIds },
    }),
  getArchiveSettings: (archiveIds: string) =>
    request<ArchiveSettings[]>('POST', '/v1/extraction/getArchiveSettings', {
      params: { archiveIds },
    }),
  getQueue: () => request<ArchiveStatus[]>('GET', '/v1/extraction/getQueue'),
  setArchiveSettings: (archiveId: string, archiveSettings: string) =>
    request<boolean>('POST', '/v1/extraction/setArchiveSettings', {
      params: { archiveId, archiveSettings },
    }),
  startExtractionNow: (linkIds: string, packageIds: string) =>
    request<Record<string, boolean>>('POST', '/v1/extraction/startExtractionNow', {
      params: { linkIds, packageIds },
    }),
}

export const extractionGroup: ControllerGroup = {
  name: 'ExtractionController',
  basePath: '/v1/extraction',
  endpoints: Object.keys(extractionApi),
}
