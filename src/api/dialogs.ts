import { request } from '../lib/request'
import type { ControllerGroup, DialogInfo, DialogTypeInfo } from '../types'

export const dialogsApi = {
  answer: (id: number, data: string) =>
    request<void>('POST', '/v1/dialogs/answer', { params: { id, data } }),
  get: (id: number, icon: boolean, properties: boolean) =>
    request<DialogInfo>('GET', '/v1/dialogs/get', { params: { id, icon, properties } }),
  getTypeInfo: (dialogType: string) =>
    request<DialogTypeInfo>('GET', '/v1/dialogs/getTypeInfo', { params: { dialogType } }),
  list: () => request<number[]>('GET', '/v1/dialogs/list'),
}

export const dialogsGroup: ControllerGroup = {
  name: 'DialogsController',
  basePath: '/v1/dialogs',
  endpoints: Object.keys(dialogsApi),
}
