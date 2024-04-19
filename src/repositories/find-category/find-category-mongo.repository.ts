import { ObjectId } from "mongodb";
import { IFindCategoryRepository } from "../../controller/find-category/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Category } from "../../models/category";

export class FindCategoryMongoRepository implements IFindCategoryRepository {
  async findCategory(id: string): Promise<Category> {
    const categoryCollection = MongoDBClient.getDbInstance().collection<Omit<Category, "id">>("categories");
    const category = await categoryCollection.findOne({ _id: new ObjectId(id) });

    if (!category) {
      throw new Error("Category not found");
    }

    const { _id,...rest } = category;

    return {
      id: _id.toString(),
      ...rest
    };
  }
}