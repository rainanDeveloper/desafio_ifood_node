import { Product } from "src/models/product";

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