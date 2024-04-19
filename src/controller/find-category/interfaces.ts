import { Category } from "../../models/category";
import { HttpRequest, HttpResponse } from "../interfaces";

export interface IFindCategoryRepository {
  findCategory(id: string): Promise<Category>;
}

export interface IFindCategoryController {
  handle(httpRequest: HttpRequest<undefined>): Promise<HttpResponse<Category>>;
}