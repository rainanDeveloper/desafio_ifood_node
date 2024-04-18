import { Category } from "src/models/categories";

export interface UpdateCategoryParams {
  title?: string;
  description?: string;
  ownerId?: string;
}

export interface IUpdateCategoryRepository {
  updateCategory(id: string, params: UpdateCategoryParams): Promise<Category>;
}
