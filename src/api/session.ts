import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const sessionApi = {
  disconnect: () => request<boolean>('POST', '/v1/session/disconnect'),
  handshake: (user: string, password: string) =>
    request<string>('POST', '/v1/session/handshake', { params: { user, password } }),
}

export const sessionGroup: ControllerGroup = {
  name: 'SessionController',
  basePath: '/v1/session',
  endpoints: Object.keys(sessionApi),
}
