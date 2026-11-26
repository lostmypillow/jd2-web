import { request } from '../lib/request'
import type { Account, ControllerGroup, JsonMap } from '../types'

export const accountsApi = {
  addAccount: (premiumHoster: string, username: string, password: string) =>
    request<boolean>('POST', '/v1/accounts/addAccount', {
      params: { premiumHoster, username, password },
    }),
  disableAccounts: (ids: string) =>
    request<boolean>('POST', '/v1/accounts/disableAccounts', { params: { ids } }),
  enableAccounts: (ids: string) =>
    request<boolean>('POST', '/v1/accounts/enableAccounts', { params: { ids } }),
  getAccountInfo: (id: number) =>
    request<Account>('GET', '/v1/accounts/getAccountInfo', { params: { id } }),
  getPremiumHosterUrl: (hoster: string) =>
    request<string>('GET', '/v1/accounts/getPremiumHosterUrl', { params: { hoster } }),
  listPremiumHoster: () => request<string[]>('GET', '/v1/accounts/listPremiumHoster'),
  listPremiumHosterUrls: () => request<JsonMap>('GET', '/v1/accounts/listPremiumHosterUrls'),
  premiumHosterIcon: (premiumHoster: string) =>
    request<void>('GET', '/v1/accounts/premiumHosterIcon', { params: { premiumHoster } }),
  queryAccounts: (query: string) =>
    request<Account[]>('POST', '/v1/accounts/queryAccounts', { params: { query } }),
  removeAccounts: (ids: string) =>
    request<boolean>('POST', '/v1/accounts/removeAccounts', { params: { ids } }),
  setEnabledState: (enabled: boolean, ids: string) =>
    request<boolean>('POST', '/v1/accounts/setEnabledState', { params: { enabled, ids } }),
  updateAccount: (accountId: number, username: string, password: string) =>
    request<boolean>('POST', '/v1/accounts/updateAccount', {
      params: { accountId, username, password },
    }),
}

export const accountsGroup: ControllerGroup = {
  name: 'AccountsController',
  basePath: '/v1/accounts',
  endpoints: Object.keys(accountsApi),
}
