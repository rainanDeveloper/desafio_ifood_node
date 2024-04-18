import { Category } from "src/models/categories";
import { ICategoriesController, ICategoriesRepository } from "./protocols";
import { HttpResponse } from "../protocols";

export class CategoriesController implements ICategoriesController {
  constructor(private readonly categoriesRepository: ICategoriesRepository) {}

  async getCategories(): Promise<HttpResponse<Category[]>> {
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