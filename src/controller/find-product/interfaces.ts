import { Product } from "../../models/product";

export interface IFindProductRepository {
  findProduct(id: string): Promise<Product>;
}