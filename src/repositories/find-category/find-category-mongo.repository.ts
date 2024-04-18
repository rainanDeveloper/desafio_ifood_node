import { IFindCategoryRepository } from "src/controller/find-category/interfaces";
import { MongoDBClient } from "src/database/mongo";
import { Category } from "src/models/categories";

export class FindCategoryMongoRepository implements IFindCategoryRepository {
  async findCategory(id: string): Promise<Category> {
    const categoryCollection = MongoDBClient.getDbInstance().collection<Omit<Category, "id">>("categories");
    const category = await categoryCollection.findOne({ id });

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