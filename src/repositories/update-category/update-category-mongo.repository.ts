import { ObjectId } from "mongodb";
import {
  IUpdateCategoryRepository,
  UpdateCategoryParams,
} from "src/controller/update-category/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Category } from "../../models/categories";

export class UpdateCategoryMongoRepository implements IUpdateCategoryRepository
{
  async updateCategory(id: string, params: UpdateCategoryParams): Promise<Category> {
    const categoryCollection = MongoDBClient.getDbInstance().collection<Omit<Category, "id">>("categories");

    await categoryCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: params }
    );

    const category = await categoryCollection.findOne({ _id: new ObjectId(id) });

    if(!category) {
      throw new Error("Category not updated");
    }

    const { _id,...rest } = category;

    return {
      id: _id.toString(),
      ...rest
    };

  }
}
