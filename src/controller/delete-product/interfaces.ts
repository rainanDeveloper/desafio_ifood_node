import { HttpRequest, HttpResponse } from "../interfaces";

export interface IDeleteProductRepository {
  deleteProduct(id: string): Promise<void>;
}

export interface IDeleteProductController {
  handle(httpRequest: HttpRequest<string>): Promise<HttpResponse<void>>;
}