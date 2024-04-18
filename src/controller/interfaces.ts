export interface ErrorBody {
  statusCode: number;
  message: string;
}

export interface HttpRequest<B> {
  params?: unknown;
  headers?: unknown;
  body?: B;
}

export interface HttpResponse<T> {
  statusCode: number;
  body: T | string | ErrorBody;
}
