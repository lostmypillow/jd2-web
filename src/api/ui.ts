import { request } from '../lib/request'
import type { Context, ControllerGroup, MyJDMenuItem } from '../types'

export const uiApi = {
  getMenu: (context: Context) =>
    request<MyJDMenuItem>('GET', '/v1/ui/getMenu', { params: { context } }),
  invokeAction: (context: Context, id: string, linkIds: string, packageIds: string) =>
    request<unknown>('POST', '/v1/ui/invokeAction', {
      params: { context, id, linkIds, packageIds },
    }),
}

export const uiGroup: ControllerGroup = {
  name: 'UiController',
  basePath: '/v1/ui',
  endpoints: Object.keys(uiApi),
}
