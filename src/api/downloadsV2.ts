import { request } from '../lib/request'
import type {
  Action,
  ControllerGroup,
  DownloadLink,
  FilePackage,
  Mode,
  Priority,
  Reason,
  SelectionType,
} from '../types'

export const downloadsV2Api = {
  cleanup: (
    linkIds: string,
    packageIds: string,
    action: Action,
    mode: Mode,
    selectionType: SelectionType,
  ) =>
    request<void>('POST', '/v1/downloadsV2/cleanup', {
      params: { linkIds, packageIds, action, mode, selectionType },
    }),
  forceDownload: (linkIds: string, packageIds: string) =>
    request<boolean>('POST', '/v1/downloadsV2/forceDownload', { params: { linkIds, packageIds } }),
  getDownloadUrls: (linkIds: string, packageIds: string, urlDisplayType: string[]) =>
    request<Record<string, number[]>>('GET', '/v1/downloadsV2/getDownloadUrls', {
      params: { linkIds, packageIds, urlDisplayType },
    }),
  getStopMark: () => request<number>('GET', '/v1/downloadsV2/getStopMark'),
  getStopMarkedLink: () => request<DownloadLink>('GET', '/v1/downloadsV2/getStopMarkedLink'),
  getStructureChangeCounter: (oldCounterValue: number) =>
    request<number>('POST', '/v1/downloadsV2/getStructureChangeCounter', {
      params: { oldCounterValue },
    }),
  moveLinks: (linkIds: string, afterLinkID: number, destPackageID: number) =>
    request<void>('POST', '/v1/downloadsV2/moveLinks', {
      params: { linkIds, afterLinkID, destPackageID },
    }),
  movePackages: (packageIds: string, afterDestPackageId: number) =>
    request<void>('POST', '/v1/downloadsV2/movePackages', {
      params: { packageIds, afterDestPackageId },
    }),
  movetoNewPackage: (linkIds: string, pkgIds: string, newPkgName: string, downloadPath: string) =>
    request<void>('POST', '/v1/downloadsV2/movetoNewPackage', {
      params: { linkIds, pkgIds, newPkgName, downloadPath },
    }),
  packageCount: () => request<number>('GET', '/v1/downloadsV2/packageCount'),
  queryLinks: (queryParams: string) =>
    request<DownloadLink[]>('POST', '/v1/downloadsV2/queryLinks', { params: { queryParams } }),
  queryPackages: (queryParams: string) =>
    request<FilePackage[]>('POST', '/v1/downloadsV2/queryPackages', { params: { queryParams } }),
  removeLinks: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/removeLinks', { params: { linkIds, packageIds } }),
  removeStopMark: () => request<void>('POST', '/v1/downloadsV2/removeStopMark'),
  renameLink: (linkId: number, newName: string) =>
    request<void>('POST', '/v1/downloadsV2/renameLink', { params: { linkId, newName } }),
  renamePackage: (packageId: number, newName: string) =>
    request<void>('POST', '/v1/downloadsV2/renamePackage', { params: { packageId, newName } }),
  resetLinks: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/resetLinks', { params: { linkIds, packageIds } }),
  resumeLinks: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/resumeLinks', { params: { linkIds, packageIds } }),
  setDownloadDirectory: (directory: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/setDownloadDirectory', {
      params: { directory, packageIds },
    }),
  setDownloadPassword: (linkIds: string, packageIds: string, pass: string) =>
    request<boolean>('POST', '/v1/downloadsV2/setDownloadPassword', {
      params: { linkIds, packageIds, pass },
    }),
  setEnabled: (enabled: boolean, linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/setEnabled', {
      params: { enabled, linkIds, packageIds },
    }),
  setPriority: (priority: Priority, linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/setPriority', {
      params: { priority, linkIds, packageIds },
    }),
  setStopMark: (linkId: number, packageId: number) =>
    request<void>('POST', '/v1/downloadsV2/setStopMark', { params: { linkId, packageId } }),
  splitPackageByHoster: (linkIds: string, pkgIds: string) =>
    request<void>('POST', '/v1/downloadsV2/splitPackageByHoster', {
      params: { linkIds, pkgIds },
    }),
  startOnlineStatusCheck: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/downloadsV2/startOnlineStatusCheck', {
      params: { linkIds, packageIds },
    }),
  unskip: (packageIds: string, linkIds: string, filterByReason: Reason) =>
    request<boolean>('POST', '/v1/downloadsV2/unskip', {
      params: { packageIds, linkIds, filterByReason },
    }),
}

export const downloadsV2Group: ControllerGroup = {
  name: 'DownloadsV2Controller',
  basePath: '/v1/downloadsV2',
  endpoints: Object.keys(downloadsV2Api),
}
