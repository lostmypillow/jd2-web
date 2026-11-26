import { request } from '../lib/request'
import type { ControllerGroup } from '../types'

export const captchaForwardApi = {
  createJobRecaptchaV2: (param1: string, param2: string, param3: string, param4: string) =>
    request<number>('POST', '/v1/captchaforward/createJobRecaptchaV2', {
      params: { param1, param2, param3, param4 },
    }),
  getResult: (param1: number) =>
    request<string>('GET', '/v1/captchaforward/getResult', { params: { param1 } }),
}

export const captchaForwardGroup: ControllerGroup = {
  name: 'CaptchaForwardController',
  basePath: '/v1/captchaforward',
  endpoints: Object.keys(captchaForwardApi),
}
