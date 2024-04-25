import { Product } from "../../models/product";
import { HttpResponse } from "../interfaces";

export interface IGetProductsRepository {
  getProducts(): Promise<Product[]>;
}

export interface IGetProductsController {
  handle(): Promise<HttpResponse<Product[]>>;
}