export interface IDeleteProductRepository {
  deleteProduct(id: string): Promise<void>;
}