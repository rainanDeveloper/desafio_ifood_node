import { ICategoriesRepository } from "src/controller/categories/interfaces";
import { Category } from "src/models/categories";

export class MongoCategoriesRepository implements ICategoriesRepository {
  async getCategories(): Promise<Category[]> {
    return [
      {
        id: "1",
        title: "Category 1",
        description: "Category 1 description",
        ownerId: "1"
      }
    ];
  }
}