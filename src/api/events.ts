import { request } from '../lib/request'
import type {
  ControllerGroup,
  PublisherResponse,
  SubscriptionResponse,
  SubscriptionStatusResponse,
} from '../types'

export const eventsApi = {
  addsubscription: (subscriptionid: number, subscriptions: string, exclusions: string) =>
    request<SubscriptionResponse>('POST', '/v1/events/addsubscription', {
      params: { subscriptionid, subscriptions, exclusions },
    }),
  changesubscriptiontimeouts: (subscriptionid: number, polltimeout: number, maxkeepalive: number) =>
    request<SubscriptionResponse>('POST', '/v1/events/changesubscriptiontimeouts', {
      params: { subscriptionid, polltimeout, maxkeepalive },
    }),
  getsubscription: (subscriptionid: number) =>
    request<SubscriptionResponse>('GET', '/v1/events/getsubscription', {
      params: { subscriptionid },
    }),
  getsubscriptionstatus: (subscriptionid: number) =>
    request<SubscriptionStatusResponse>('GET', '/v1/events/getsubscriptionstatus', {
      params: { subscriptionid },
    }),
  listen: (subscriptionid: number) =>
    request<void>('GET', '/v1/events/listen', { params: { subscriptionid } }),
  listpublisher: () => request<PublisherResponse[]>('GET', '/v1/events/listpublisher'),
  removesubscription: (subscriptionid: number, subscriptions: string, exclusions: string) =>
    request<SubscriptionResponse>('POST', '/v1/events/removesubscription', {
      params: { subscriptionid, subscriptions, exclusions },
    }),
  setsubscription: (subscriptionid: number, subscriptions: string, exclusions: string) =>
    request<SubscriptionResponse>('POST', '/v1/events/setsubscription', {
      params: { subscriptionid, subscriptions, exclusions },
    }),
  subscribe: (subscriptions: string, exclusions: string) =>
    request<SubscriptionResponse>('POST', '/v1/events/subscribe', {
      params: { subscriptions, exclusions },
    }),
  unsubscribe: (subscriptionid: number) =>
    request<SubscriptionResponse>('POST', '/v1/events/unsubscribe', {
      params: { subscriptionid },
    }),
}

export const eventsGroup: ControllerGroup = {
  name: 'EventsController',
  basePath: '/v1/events',
  endpoints: Object.keys(eventsApi),
}
