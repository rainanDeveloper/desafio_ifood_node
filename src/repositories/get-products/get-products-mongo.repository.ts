import { IGetProductsRepository } from "../../controller/get-products/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Product } from "../../models/product";

export class GetProductsMongoRepository implements IGetProductsRepository {
  async getProducts(): Promise<Product[]> {
    const productCollection = MongoDBClient.getDbInstance().collection<Omit<Product, "id">>("products");
    const products = await productCollection.find({}).toArray();

    return products.map((product) => {
      const { _id,...rest } = product;

      return {
        id: _id.toString(),
        ...rest,
      } as Product;
    });
  }
}