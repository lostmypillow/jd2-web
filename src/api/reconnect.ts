import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const reconnectApi = {
  doReconnect: () => request<void>('POST', '/v1/reconnect/doReconnect'),
}

export const reconnectGroup: ControllerGroup = {
  name: 'ReconnectController',
  basePath: '/v1/reconnect',
  endpoints: Object.keys(reconnectApi),
}
