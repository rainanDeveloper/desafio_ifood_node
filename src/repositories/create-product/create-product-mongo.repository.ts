import { MongoDBClient } from "../../database/mongo";
import {
  CreateProductParams,
  ICreateProductRepository,
} from "../../controller/create-product/interfaces";
import { Product } from "../../models/product";

export class CreateProductMongoRepository implements ICreateProductRepository {
  async createProduct(params: CreateProductParams): Promise<Product> {
    const productCollection =
      MongoDBClient.getDbInstance().collection<Omit<Product, "id">>("products");
    const { insertedId } = await productCollection.insertOne(params);

    const product = await productCollection.findOne({ _id: insertedId });

    if (!product) {
      throw new Error("Product not created");
    }

    const { _id, ...rest } = product;

    return {
        id: _id.toString(),
       ...rest,
    } as Product;
  }
}
