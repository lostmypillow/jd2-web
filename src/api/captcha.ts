import { request } from '../lib/request'
import type { CaptchaJob, ControllerGroup, SkipRequest } from '../types'

export const captchaApi = {
  get: (id: number, format?: string) =>
    request<void>('GET', '/v1/captcha/get', { params: { id, format } }),
  getCaptchaJob: (id: number) =>
    request<CaptchaJob>('GET', '/v1/captcha/getCaptchaJob', { params: { id } }),
  list: () => request<CaptchaJob[]>('GET', '/v1/captcha/list'),
  skip: (id: number, type?: SkipRequest) =>
    request<boolean>('POST', '/v1/captcha/skip', { params: { id, type } }),
  solve: (id: number, result: string, resultFormat?: string) =>
    request<boolean>('POST', '/v1/captcha/solve', { params: { id, result, resultFormat } }),
}

export const captchaGroup: ControllerGroup = {
  name: 'CaptchaController',
  basePath: '/v1/captcha',
  endpoints: Object.keys(captchaApi),
}
