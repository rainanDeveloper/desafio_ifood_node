import { Category } from "src/models/categories";
import { HttpResponse } from "../interfaces";

export interface ICategoriesRepository {
  getCategories(): Promise<Category[]>;
}

export interface ICategoriesController {
  getCategories(): Promise<HttpResponse<Category[]>>;
}
