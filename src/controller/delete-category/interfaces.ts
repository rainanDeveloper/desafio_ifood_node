import { HttpRequest, HttpResponse } from "../interfaces";

export interface IDeleteCategoryRepository {
  deleteCategory(id: string): Promise<void>;
}

export interface IDeleteCategoryController {
  handle(httpRequest: HttpRequest<undefined>): Promise<HttpResponse<void>>;
}