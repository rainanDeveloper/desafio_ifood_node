import { Category } from "src/models/categories";
import { IGetCategoriesController, IGetCategoriesRepository } from "./interfaces";
import { HttpResponse } from "../interfaces";

export class GetCategoriesController implements IGetCategoriesController {
  constructor(private readonly categoriesRepository: IGetCategoriesRepository) {}

  async handle(): Promise<HttpResponse<Category[]>> {
    try{
      const categories = await this.categoriesRepository.getCategories();

      return {
        statusCode: 200,
        body: categories
      };
    }  
    catch (err) {
      return {
        statusCode: 500,
        body: err.message
      };
    }
  }
}