// LEGACY INTERFACE DO NOT USE
// import { request } from '../lib/request'
// import type { ControllerGroup, CrawledLink, CrawledPackage } from '../types'
//
// export const linkCollectorApi = {
//   addContainer: (type: string, content: string) =>
//     request<void>('POST', '/v1/linkcollector/addContainer', { params: { type, content } }),
//   addLinks: (
//       params: {
//           link: string;
//           packageName: string;
//           archivePassword: string;
//           linkPassword: string;
//       } |
//           {
//               links: string;
//               packageName: string | null;
//               extractPassword: string | null;
//               downloadPassword: string | null;
//               destinationFolder: string;
//           },
//   ) => request<boolean>('POST', '/v1/linkcollector/addLinks', { params }),
//   addLinksAndStartDownload: (
//     links: string,
//     packageName: string | null,
//     extractPassword: string | null,
//     downloadPassword: string | null,
//   ) =>
//     request<boolean>('POST', '/v1/linkcollector/addLinksAndStartDownload', {
//       params: { links, packageName, extractPassword, downloadPassword },
//     }),
//   disableLinks: (linkIds: string, packageIds?: string) =>
//     request<boolean>('POST', '/v1/linkcollector/disableLinks', { params: { linkIds, packageIds } }),
//   enableLinks: (linkIds: string, packageIds?: string) =>
//     request<boolean>('POST', '/v1/linkcollector/enableLinks', { params: { linkIds, packageIds } }),
//   getChildrenChanged: (structureWatermark: number) =>
//     request<number>('POST', '/v1/linkcollector/getChildrenChanged', {
//       params: { structureWatermark },
//     }),
//   getDownloadFolderHistorySelectionBase: () =>
//     request<string[]>('GET', '/v1/linkcollector/getDownloadFolderHistorySelectionBase'),
//   moveLinks: (query: string) =>
//     request<boolean>('POST', '/v1/linkcollector/moveLinks', { params: { query } }),
//   movePackages: (query: string) =>
//     request<boolean>('POST', '/v1/linkcollector/movePackages', { params: { query } }),
//   packageCount: () => request<number>('GET', '/v1/linkcollector/packageCount'),
//   queryLinks: (queryParams: string) =>
//     request<CrawledLink[]>('POST', '/v1/linkcollector/queryLinks', { params: { queryParams } }),
//   queryPackages: (queryParams: string) =>
//     request<CrawledPackage[]>('POST', '/v1/linkcollector/queryPackages', {
//       params: { queryParams },
//     }),
//   removeLinks: (linkIds: string, packageIds?: string) =>
//     request<boolean>('POST', '/v1/linkcollector/removeLinks', { params: { linkIds, packageIds } }),
//   renameLink: (packageId: number, linkId: number, newName: string) =>
//     request<boolean>('POST', '/v1/linkcollector/renameLink', {
//       params: { packageId, linkId, newName },
//     }),
//   renamePackage: (packageId: number, newName: string) =>
//     request<boolean>('POST', '/v1/linkcollector/renamePackage', {
//       params: { packageId, newName },
//     }),
//   startDownloads: (linkIds: string, packageIds?: string) =>
//     request<boolean>('POST', '/v1/linkcollector/startDownloads', {
//       params: { linkIds, packageIds },
//     }),
// }
//
// export const linkCollectorGroup: ControllerGroup = {
//   name: 'LinkCollectorController',
//   basePath: '/v1/linkcollector',
//   endpoints: Object.keys(linkCollectorApi),
// }
