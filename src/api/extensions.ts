import { request } from '../lib/request'
import type { ControllerGroup, Extension } from '../types'

export const extensionsApi = {
  install: (id: string) =>
    request<boolean>('POST', '/v1/extensions/install', { params: { id } }),
  isEnabled: (classname: string) =>
    request<boolean>('GET', '/v1/extensions/isEnabled', { params: { classname } }),
  isInstalled: (id: string) =>
    request<boolean>('GET', '/v1/extensions/isInstalled', { params: { id } }),
  list: (query: string) =>
    request<Extension[]>('POST', '/v1/extensions/list', { params: { query } }),
  setEnabled: (classname: string, b: boolean) =>
    request<boolean>('POST', '/v1/extensions/setEnabled', { params: { classname, b } }),
}

export const extensionsGroup: ControllerGroup = {
  name: 'ExtensionsController',
  basePath: '/v1/extensions',
  endpoints: Object.keys(extensionsApi),
}
