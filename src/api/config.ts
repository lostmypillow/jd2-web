import { request } from '../lib/request'
import type { AdvancedConfigAPIEntry, ControllerGroup, EnumOption } from '../types'

export const configApi = {
  get: (interfaceName: string, storage: string, key: string) =>
    request<unknown>('GET', '/v1/config/get', { params: { interfaceName, storage, key } }),
  getDefault: (interfaceName: string, storage: string, key: string) =>
    request<unknown>('GET', '/v1/config/getDefault', { params: { interfaceName, storage, key } }),
  list: (params?: {
    pattern: string
    returnDescription: boolean
    returnValues: boolean
    returnDefaultValues: boolean
    returnEnumInfo?: boolean
  }) => request<AdvancedConfigAPIEntry[]>('GET', '/v1/config/list', { params }),
  listEnum: (type: string) =>
    request<EnumOption[]>('GET', '/v1/config/listEnum', { params: { type } }),
  query: (query: string) =>
    request<AdvancedConfigAPIEntry[]>('POST', '/v1/config/query', { params: { query } }),
  reset: (interfaceName: string, storage: string, key: string) =>
    request<boolean>('POST', '/v1/config/reset', { params: { interfaceName, storage, key } }),
  set: (interfaceName: string, storage: string, key: string, value: string) =>
    request<boolean>('POST', '/v1/config/set', { params: { interfaceName, storage, key, value } }),
}

export const configGroup: ControllerGroup = {
  name: 'ConfigController',
  basePath: '/v1/config',
  endpoints: Object.keys(configApi),
}
