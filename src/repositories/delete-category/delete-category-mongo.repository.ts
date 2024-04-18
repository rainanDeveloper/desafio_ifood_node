import { ObjectId } from "mongodb";
import { IDeleteCategoryRepository } from "../../controller/delete-category/interfaces";
import { MongoDBClient } from "../../database/mongo";
import { Category } from "../../models/categories";

export class DeleteCategoryMongoRepository implements IDeleteCategoryRepository {
  async deleteCategory(id: string): Promise<void> {
    const categoryCollection = MongoDBClient.getDbInstance().collection<Omit<Category, "id">>("categories");

    const category = categoryCollection.findOne({ _id: new ObjectId(id) });

    if (!category) {
      throw new Error("Category not found");
    }
    
    const {deletedCount} = await categoryCollection.deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Category not deleted");
    }

    return;
  }
}