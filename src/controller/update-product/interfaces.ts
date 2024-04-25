import { Product } from "../../models/product";

export interface UpdateProductParams {
  title?: string;
  description?: string;
  price?: number;
  categoryId?: string;
}

export interface IUpdateProductRepository {
  updateProduct(id: string, product: UpdateProductParams): Promise<Product>;
}

