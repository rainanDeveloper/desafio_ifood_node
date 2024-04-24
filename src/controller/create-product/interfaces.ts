import { Product } from "../../models/product";
import { HttpRequest, HttpResponse } from "../interfaces";

export interface CreateProductParams {
    title: string;
    description: string;
    categoryId: string;
    price: number;
    ownerId: string;
}

export interface ICreateProductRepository {
    createProduct(params: CreateProductParams): Promise<Product>;
}

export interface ICreateProductController {
    handle(httpRequest: HttpRequest<CreateProductParams>): Promise<HttpResponse<Product>>;
}