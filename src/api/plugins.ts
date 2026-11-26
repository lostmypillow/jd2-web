import { request } from '../lib/request'
import type { ControllerGroup, Plugin, PluginConfigEntry } from '../types'

export const pluginsApi = {
  get: (interfaceName: string, displayName: string, key: string) =>
    request<unknown>('GET', '/v1/plugins/get', { params: { interfaceName, displayName, key } }),
  getAllPluginRegex: () => request<Record<string, string[]>>('GET', '/v1/plugins/getAllPluginRegex'),
  getPluginRegex: (URL: string) =>
    request<string[]>('GET', '/v1/plugins/getPluginRegex', { params: { URL } }),
  list: (query: string) => request<Plugin[]>('POST', '/v1/plugins/list', { params: { query } }),
  query: (query: string) =>
    request<PluginConfigEntry[]>('POST', '/v1/plugins/query', { params: { query } }),
  reset: (interfaceName: string, displayName: string, key: string) =>
    request<boolean>('POST', '/v1/plugins/reset', {
      params: { interfaceName, displayName, key },
    }),
  set: (interfaceName: string, displayName: string, key: string, newValue: string) =>
    request<boolean>('POST', '/v1/plugins/set', {
      params: { interfaceName, displayName, key, newValue },
    }),
}

export const pluginsGroup: ControllerGroup = {
  name: 'PluginsController',
  basePath: '/v1/plugins',
  endpoints: Object.keys(pluginsApi),
}
