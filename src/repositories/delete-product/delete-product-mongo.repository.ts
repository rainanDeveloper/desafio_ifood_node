import { ObjectId } from "mongodb";
import { IDeleteProductRepository } from "../../controller/delete-product/interfaces";
import { MongoDBClient } from "../../database/mongo";

export class DeleteProductMongoRepository implements IDeleteProductRepository {
  async deleteProduct(id: string): Promise<void> {
    const productCollection = MongoDBClient.getDbInstance().collection("products");

    await productCollection.deleteOne({ _id: new ObjectId(id) });

    const product = await productCollection.findOne({ _id: new ObjectId(id) });

    if (product) {
      throw new Error("Product not deleted");
    }
  }
}