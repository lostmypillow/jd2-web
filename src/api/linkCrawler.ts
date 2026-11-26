import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const linkCrawlerApi = {
  isCrawling: () => request<boolean>('GET', '/v1/linkcrawler/isCrawling'),
}

export const linkCrawlerGroup: ControllerGroup = {
  name: 'LinkCrawlerController',
  basePath: '/v1/linkcrawler',
  endpoints: Object.keys(linkCrawlerApi),
}
