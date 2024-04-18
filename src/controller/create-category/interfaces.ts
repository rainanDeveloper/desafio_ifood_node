import { Category } from "../../models/categories";
import { HttpRequest, HttpResponse } from "../interfaces";

export interface ICreateCategoryController {
    handle(httpRequest: HttpRequest<CreateCategoryParams>): Promise<HttpResponse<Category>>;
}

export interface CreateCategoryParams {
    title: string;
    description: string;
    ownerId: string;
}

export interface ICreateCategoryRepository {
    createCategory(params: CreateCategoryParams): Promise<Category>;
}