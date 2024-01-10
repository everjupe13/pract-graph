import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { joinURL } from 'ufo'

import { ENV } from '@/app/constants/environment'

type MakeSafeRequestOptions = {
  okIfStatus?: number | number[]
}

export class HttpService {
  axios: AxiosInstance
  endpoint: string
  apiHost: string

  constructor(endpoint: string) {
    this.axios = axios
    this.endpoint = endpoint
    this.apiHost = ENV.API_URL
  }

  protected getPath(...input: any[]) {
    return joinURL(this.apiHost, this.endpoint, ...input.map(x => x.toString()))
  }

  async makeSafeRequest<TResponse>(
    axiosConfig: AxiosRequestConfig,
    { okIfStatus = 200 }: MakeSafeRequestOptions = {}
  ) {
    let ok = false
    try {
      const { status, data } = await this.axios.request<TResponse>(axiosConfig)

      if (Number.isInteger(okIfStatus)) {
        ok = okIfStatus === status
      } else if (Array.isArray(okIfStatus)) {
        ok = okIfStatus.includes(status)
      }

      return { ok, data }
    } catch {
      return { ok, errors: null }
    }
  }
}
