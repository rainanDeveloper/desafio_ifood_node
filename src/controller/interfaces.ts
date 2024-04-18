export interface ErrorBody {
  statusCode: number;
  message: string;
}

export interface HttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export interface HttpResponse<T> {
  statusCode: number;
  body: T | string | ErrorBody;
}
