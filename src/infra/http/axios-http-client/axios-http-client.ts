import {
  HttpGetClient,
  HttpGetParams,
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '@/data/protocols/http'
import axios, { AxiosResponse } from 'axios'

export class AxiosHttpClient implements HttpPostClient, HttpGetClient {
  async post (params: HttpPostParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.post(params.url, params.body)
    } catch (error) {
      axiosResponse = error.response
    }

    return AxiosHttpClient.adapter(axiosResponse)
  }

  async get (params: HttpGetParams): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse

    try {
      axiosResponse = await axios.get(params.url)
    } catch (error) {
      axiosResponse = error.response
    }

    return AxiosHttpClient.adapter(axiosResponse)
  }

  private static adapter (axiosResponse: AxiosResponse): HttpResponse {
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
