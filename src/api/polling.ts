import { request } from '../lib/request'
import type { ControllerGroup, PollingResult } from '../types'

export const pollingApi = {
  poll: (queryParams: string) =>
    request<PollingResult[]>('POST', '/v1/polling/poll', { params: { queryParams } }),
}

export const pollingGroup: ControllerGroup = {
  name: 'PollingController',
  basePath: '/v1/polling',
  endpoints: Object.keys(pollingApi),
}
