import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const rootApi = {
  flash: () => request<void>('GET', '/v1/flash'),
  crossdomainXml: () => request<void>('GET', '/v1/crossdomain.xml'),
  faviconIco: () => request<void>('GET', '/v1/favicon.ico'),
  flashgot: () => request<void>('GET', '/v1/flashgot'),
  jdcheckJs: () => request<void>('GET', '/v1/jdcheck.js'),
  jdcheckjson: () => request<void>('GET', '/v1/jdcheckjson'),
}

export const rootGroup: ControllerGroup = {
  name: 'RootController',
  basePath: '/v1',
  endpoints: Object.keys(rootApi),
}
