import { request } from '../lib/request'
import type { ControllerGroup, IconDescriptor } from '../types'

export const contentV2Api = {
  getFavIcon: (hostername: string) =>
    request<void>('GET', '/v1/contentV2/getFavIcon', { params: { hostername } }),
  getFileIcon: (filename: string) =>
    request<void>('GET', '/v1/contentV2/getFileIcon', { params: { filename } }),
  getIcon: (key: string, size: number) =>
    request<void>('GET', '/v1/contentV2/getIcon', { params: { key, size } }),
  getIconDescription: (key: string) =>
    request<IconDescriptor>('GET', '/v1/contentV2/getIconDescription', { params: { key } }),
}

export const contentV2Group: ControllerGroup = {
  name: 'ContentV2Controller',
  basePath: '/v1/contentV2',
  endpoints: Object.keys(contentV2Api),
}
