import { Product } from "../../models/product";
import { HttpRequest, HttpResponse } from "../interfaces";

export interface IFindProductRepository {
  findProduct(id: string): Promise<Product>;
}

export interface IFindProductController {
  handle(httpRequest: HttpRequest<string>): Promise<HttpResponse<Product>>;
}