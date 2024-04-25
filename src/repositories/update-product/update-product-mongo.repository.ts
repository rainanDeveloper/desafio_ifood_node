import { ObjectId } from "mongodb";
import { IUpdateProductRepository, UpdateProductParams } from "../../controller/update-product/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Product } from "../../models/product";

export class UpdateProductMongoRepository implements IUpdateProductRepository {
  async updateProduct(id: string, productParams: UpdateProductParams): Promise<Product> {
    const productCollection = MongoDBClient.getDbInstance().collection<Omit<Product, "id">>("products");
    
    await productCollection.findOneAndUpdate(
      { id },
      { $set: productParams },
    );

    const product = await productCollection.findOne({ _id: new ObjectId(id) });

    if(!product) {
      throw new Error("Product not updated");
    }

    const { _id,...rest } = product;

    return {
      id: _id.toString(),
      ...rest
    } as Product;

  }
}