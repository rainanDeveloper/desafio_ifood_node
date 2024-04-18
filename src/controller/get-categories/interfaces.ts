import { Category } from "src/models/categories";
import { HttpResponse } from "../interfaces";

export interface IGetCategoriesRepository {
  getCategories(): Promise<Category[]>;
}

export interface IGetCategoriesController {
  handle(): Promise<HttpResponse<Category[]>>;
}
