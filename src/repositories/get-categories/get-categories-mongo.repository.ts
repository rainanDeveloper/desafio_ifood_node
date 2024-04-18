import { IGetCategoriesRepository } from "src/controller/get-categories/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Category } from "../../models/categories";

export class GetCategoriesMongoRepository implements IGetCategoriesRepository {
  async getCategories(): Promise<Category[]> {
    const categoryCollection = MongoDBClient.getDbInstance().collection<Omit<Category, "id">>("categories");
    const rawCategories = await categoryCollection.find().toArray();
    const categories: Category[] = rawCategories.map(({_id, ...rest}) => {
      return {
        id: _id.toString(),
        ...rest
      } as Category;
    });

    return categories;
  }
}