import { request } from '../lib/request'
import type {
  Action,
  AddLinksQuery,
  ControllerGroup,
  CrawledLink, CrawledLinkQuery,
  CrawledPackage, CrawledPackageQuery,
  JobLinkCrawler,
  LinkCollectingJob,
  LinkVariant,
  Mode,
  Priority,
  SelectionType,
} from '../types'

export const linkGrabberApi = {
  clear: () => request<boolean>('POST', '/v1/clear'),
  addLinks: (query: AddLinksQuery) =>
    request<LinkCollectingJob>('POST', '/v1/addLinks', {
      params: { query: JSON.stringify(query) },
    }),
  isCollecting: () => request<boolean>('GET', '/v1/isCollecting'),
  queryLinkCrawlerJobs: (query: string) =>
    request<JobLinkCrawler[]>('POST', '/v1/queryLinkCrawlerJobs', { params: { query } }),
  queryLinks: (queryParams: CrawledLinkQuery[]) => request<CrawledLink[]>('GET', '/v1/queryLinks', { params: { queryParams: JSON.stringify(queryParams) } }),
  queryPackages: (queryParams: CrawledPackageQuery[]) =>
    request<CrawledPackage[]>('POST', '/v1/queryPackages', { params: { queryParams: JSON.stringify(queryParams) } }),
  abort: (jobId?: number) => request<boolean>('POST', '/v1/abort', { params: { jobId } }),
  addContainer: (type: string, content: string) =>
    request<LinkCollectingJob>('POST', '/v1/addContainer', { params: { type, content } }),
  addVariantCopy: (
    linkid: number,
    destinationAfterLinkID: number,
    destinationPackageID: number,
    variantID: string,
  ) =>
    request<void>('POST', '/v1/addVariantCopy', {
      params: { linkid, destinationAfterLinkID, destinationPackageID, variantID },
    }),
  cleanup: (
    linkIds: string,
    packageIds: string,
    action: Action,
    mode: Mode,
    selectionType: SelectionType,
  ) =>
    request<void>('POST', '/v1/cleanup', {
      params: { linkIds, packageIds, action, mode, selectionType },
    }),
  getChildrenChanged: (structureWatermark: number) =>
    request<number>('POST', '/v1/getChildrenChanged', { params: { structureWatermark } }),
  getDownloadFolderHistorySelectionBase: () =>
    request<string[]>('GET', '/v1/getDownloadFolderHistorySelectionBase'),
  getDownloadUrls: (linkIds: string, packageIds: string, urlDisplayTypes: string[]) =>
    request<Record<string, number[]>>('GET', '/v1/getDownloadUrls', {
      params: { linkIds, packageIds, urlDisplayTypes },
    }),
  getPackageCount: () => request<number>('GET', '/v1/getPackageCount'),
  getVariants: (linkid: number) =>
    request<LinkVariant[]>('GET', '/v1/getVariants', { params: { linkid } }),
  moveLinks: (linkIds: string, afterLinkID: number, destPackageID: number) =>
    request<void>('POST', '/v1/moveLinks', { params: { linkIds, afterLinkID, destPackageID } }),
  movePackages: (packageIds: string, afterDestPackageId: number) =>
    request<void>('POST', '/v1/movePackages', { params: { packageIds, afterDestPackageId } }),
  moveToDownloadlist: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/moveToDownloadlist', { params: { linkIds, packageIds } }),
  movetoNewPackage: (linkIds: string, pkgIds: string, newPkgName: string, downloadPath: string) =>
    request<void>('POST', '/v1/movetoNewPackage', {
      params: { linkIds, pkgIds, newPkgName, downloadPath },
    }),
  removeLinks: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/removeLinks', { params: { linkIds, packageIds } }),
  renameLink: (linkId: number, newName: string) =>
    request<void>('POST', '/v1/renameLink', { params: { linkId, newName } }),
  renamePackage: (packageId: number, newName: string) =>
    request<void>('POST', '/v1/renamePackage', { params: { packageId, newName } }),
  setDownloadDirectory: (directory: string, packageIds: string) =>
    request<void>('POST', '/v1/setDownloadDirectory', { params: { directory, packageIds } }),
  setDownloadPassword: (linkIds: string, packageIds: string, pass: string) =>
    request<boolean>('POST', '/v1/setDownloadPassword', {
      params: { linkIds, packageIds, pass },
    }),
  setEnabled: (enabled: boolean, linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/setEnabled', { params: { enabled, linkIds, packageIds } }),
  setPriority: (priority: Priority, linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/setPriority', { params: { priority, linkIds, packageIds } }),
  setVariant: (linkid: number, variantID: string) =>
    request<void>('POST', '/v1/setVariant', { params: { linkid, variantID } }),
  splitPackageByHoster: (linkIds: string, pkgIds: string) =>
    request<void>('POST', '/v1/splitPackageByHoster', { params: { linkIds, pkgIds } }),
  startOnlineStatusCheck: (linkIds: string, packageIds: string) =>
    request<void>('POST', '/v1/startOnlineStatusCheck', { params: { linkIds, packageIds } }),
}

export const linkGrabberGroup: ControllerGroup = {
  name: 'LinkGrabberController',
  basePath: '/v1',
  endpoints: Object.keys(linkGrabberApi),
}
