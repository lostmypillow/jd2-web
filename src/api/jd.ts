import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const jdApi = {
  revision: () => request<number>('GET', '/v1/jd/revision'),
  version: () => request<number>('GET', '/v1/jd/version'),
  uptime: () => request<number>('GET', '/v1/jd/uptime'),
}

export const jdGroup: ControllerGroup = {
  name: 'JdController',
  basePath: '/v1/jd',
  endpoints: Object.keys(jdApi),
}
