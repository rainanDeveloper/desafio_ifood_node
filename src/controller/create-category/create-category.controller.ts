import { Category } from "../../models/category";
import { HttpRequest, HttpResponse } from "../interfaces";
import {
  CreateCategoryParams,
  ICreateCategoryController,
  ICreateCategoryRepository,
} from "./interfaces";
import { isValidCreateCategoryParams } from "./utils";

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
          body: {
            statusCode: 400,
            message: "You must provide a body",
          },
        };
      }

      const result = isValidCreateCategoryParams(body);

      if(result.success === false) {
        return {
          statusCode: 400,
          body: {
            statusCode: 400,
            message: JSON.parse(result.error.message),
          }
        };
      }

      const category = await this.categoriesRepository.createCategory(body);

      return {
        statusCode: 201,
        body: category,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: {
          statusCode: 500,
          message: error.message,
        },
      };
    }
  }
}
