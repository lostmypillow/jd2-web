import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const flashApi = {
  add: (
    params?:
      | { password: string; source: string; url: string }
      | { param1: string; param2: string; param3: string; param4: string },
  ) => request<void>('POST', '/v1/flash/add', { params }),
  addcnl: (cnl: string) => request<void>('POST', '/v1/flash/addcnl', { params: { cnl } }),
  addcrypted: () => request<void>('POST', '/v1/flash/addcrypted'),
  addcrypted2: () => request<void>('POST', '/v1/flash/addcrypted2'),
  addcrypted2Remote: (crypted: string, jk: string, k: string) =>
    request<void>('POST', '/v1/flash/addcrypted2Remote', { params: { crypted, jk, k } }),
  root: () => request<void>('GET', '/v1/flash/'),
}

export const flashGroup: ControllerGroup = {
  name: 'FlashController',
  basePath: '/v1/flash',
  endpoints: Object.keys(flashApi),
}
