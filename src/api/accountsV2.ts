import { request } from '../lib/request'
import type { Account, BasicAuthentication, ControllerGroup, Type } from '../types'

export const accountsV2Api = {
  addAccount: (premiumHoster: string, username: string, password: string) =>
    request<void>('POST', '/v1/accountsV2/addAccount', {
      params: { premiumHoster, username, password },
    }),
  addBasicAuth: (type: Type, hostmask: string, username: string, password: string) =>
    request<number>('POST', '/v1/accountsV2/addBasicAuth', {
      params: { type, hostmask, username, password },
    }),
  disableAccounts: (ids: string) =>
    request<void>('POST', '/v1/accountsV2/disableAccounts', { params: { ids } }),
  enableAccounts: (ids: string) =>
    request<void>('POST', '/v1/accountsV2/enableAccounts', { params: { ids } }),
  getPremiumHosterUrl: (hoster: string) =>
    request<string>('GET', '/v1/accountsV2/getPremiumHosterUrl', { params: { hoster } }),
  listAccounts: (query: string) =>
    request<Account[]>('POST', '/v1/accountsV2/listAccounts', { params: { query } }),
  listBasicAuth: () => request<BasicAuthentication[]>('GET', '/v1/accountsV2/listBasicAuth'),
  listPremiumHoster: () => request<string[]>('GET', '/v1/accountsV2/listPremiumHoster'),
  listPremiumHosterUrls: () =>
    request<Record<string, string>>('GET', '/v1/accountsV2/listPremiumHosterUrls'),
  refreshAccounts: (ids: string) =>
    request<void>('POST', '/v1/accountsV2/refreshAccounts', { params: { ids } }),
  removeAccounts: (ids: string) =>
    request<void>('POST', '/v1/accountsV2/removeAccounts', { params: { ids } }),
  removeBasicAuths: (ids: string) =>
    request<boolean>('POST', '/v1/accountsV2/removeBasicAuths', { params: { ids } }),
  setUserNameAndPassword: (accountId: number, username: string, password: string) =>
    request<boolean>('POST', '/v1/accountsV2/setUserNameAndPassword', {
      params: { accountId, username, password },
    }),
  updateBasicAuth: (updatedEntry: string) =>
    request<boolean>('POST', '/v1/accountsV2/updateBasicAuth', { params: { updatedEntry } }),
}

export const accountsV2Group: ControllerGroup = {
  name: 'AccountsV2Controller',
  basePath: '/v1/accountsV2',
  endpoints: Object.keys(accountsV2Api),
}
