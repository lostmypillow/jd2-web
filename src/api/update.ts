import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const updateApi = {
  isUpdateAvailable: () => request<boolean>('GET', '/v1/update/isUpdateAvailable'),
  restartAndUpdate: () => request<void>('POST', '/v1/update/restartAndUpdate'),
  runUpdateCheck: () => request<void>('POST', '/v1/update/runUpdateCheck'),
}

export const updateGroup: ControllerGroup = {
  name: 'UpdateController',
  basePath: '/v1/update',
  endpoints: Object.keys(updateApi),
}
