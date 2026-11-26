import { request } from '../lib/request'
import type { ControllerGroup, LogFolder } from '../types'

export const logApi = {
  getAvailableLogs: () => request<LogFolder[]>('GET', '/v1/log/getAvailableLogs'),
  sendLogFile: (logFolders: string) =>
    request<string>('POST', '/v1/log/sendLogFile', { params: { logFolders } }),
}

export const logGroup: ControllerGroup = {
  name: 'LogController',
  basePath: '/v1/log',
  endpoints: Object.keys(logApi),
}
