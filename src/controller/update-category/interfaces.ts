import { Category } from "src/models/categories";
import { HttpRequest, HttpResponse } from "../interfaces";

export interface UpdateCategoryParams {
  title?: string;
  description?: string;
  ownerId?: string;
}

export interface IUpdateCategoryRepository {
  updateCategory(id: string, params: UpdateCategoryParams): Promise<Category>;
}

export interface IUpdateCategoryController {
  handle(httpRequest: HttpRequest<UpdateCategoryParams>): Promise<HttpResponse<Category>>;
}
