import { request } from '../lib/request'
import type { ControllerGroup, JsonMap } from '../types'

export const deviceApi = {
  getDirectConnectionInfos: () => request<JsonMap>('GET', '/v1/device/getDirectConnectionInfos'),
  getSessionPublicKey: () => request<string>('GET', '/v1/device/getSessionPublicKey'),
  ping: () => request<boolean>('GET', '/v1/device/ping'),
}

export const deviceGroup: ControllerGroup = {
  name: 'DeviceController',
  basePath: '/v1/device',
  endpoints: Object.keys(deviceApi),
}
