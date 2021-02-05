export enum HttpStatusCode {
  noContent = 204,
  unauthoraized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
