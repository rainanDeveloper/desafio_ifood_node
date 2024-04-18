import { Category } from "src/models/categories";
import { HttpRequest, HttpResponse } from "../interfaces";
import {
  CreateCategoryParams,
  ICreateCategoryController,
  ICreateCategoryRepository,
} from "./interfaces";

export class CreateCategoryController implements ICreateCategoryController {
  constructor(
    private readonly categoriesRepository: ICreateCategoryRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<CreateCategoryParams>
  ): Promise<HttpResponse<Category>> {
    try {
      const { body } = httpRequest;

      if (!body) {
        return {
          statusCode: 400,
          body: "You need to provide a body",
        };
      }
      const user = await this.categoriesRepository.createCategory(body);

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: error.message,
      };
    }
  }
}
