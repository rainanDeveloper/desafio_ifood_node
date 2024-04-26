import { Product } from "../../models/product";
import { HttpRequest, HttpResponse } from "../interfaces";

export interface UpdateProductParams {
  title?: string;
  description?: string;
  price?: number;
  categoryId?: string;
  ownerId?: string;
}

export interface IUpdateProductRepository {
  updateProduct(id: string, product: UpdateProductParams): Promise<Product>;
}

export interface IUpdateProductController {
  handle(httpRequest: HttpRequest<UpdateProductParams>): Promise<HttpResponse<Product>>;
}