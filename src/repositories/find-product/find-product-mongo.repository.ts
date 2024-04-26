import { ObjectId } from "mongodb";
import { IFindProductRepository } from "../../controller/find-product/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Product } from "../../models/product";

export class FindProductMongoRepository implements IFindProductRepository {
  async findProduct(id: string): Promise<Product> {
    const productCollection = MongoDBClient.getDbInstance().collection<Omit<Product, "id">>("products");

    const product = await productCollection.findOne({ _id: new ObjectId(id) });

    if(!product) {
      throw new Error("Product not found");
    }

    const { _id,...rest } = product;

    return {
      id: _id.toString(),
      ...rest
    } as Product;
  }
}