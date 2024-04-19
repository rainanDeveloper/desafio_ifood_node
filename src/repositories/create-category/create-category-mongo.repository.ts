import {
  CreateCategoryParams,
  ICreateCategoryRepository,
} from "../../controller/create-category/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Category } from "../../models/category";

export class CreateCategoryMongoRepository implements ICreateCategoryRepository
{
  async createCategory(params: CreateCategoryParams): Promise<Category> {
    const categoryCollection =
      MongoDBClient.getDbInstance().collection<Omit<Category, "id">>(
        "categories"
      );
    const { insertedId } = await categoryCollection.insertOne(params);

    const category = await categoryCollection.findOne({ _id: insertedId });

    if (!category) {
      throw new Error("Category not created");
    }

    const { _id, ...rest } = category;

    return {
      id: _id.toString(),
      ...rest,
    } as Category;
  }
}
