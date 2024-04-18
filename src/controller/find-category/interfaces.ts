import { Category } from "src/models/categories";

export interface IFindCategoryRepository {
  findCategory(id: string): Promise<Category>;
}