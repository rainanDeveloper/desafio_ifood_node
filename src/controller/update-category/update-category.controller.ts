import { Category } from "src/models/categories";
import { HttpRequest, HttpResponse } from "../interfaces";
import { IUpdateCategoryController, IUpdateCategoryRepository, UpdateCategoryParams } from "./interfaces";

export class UpdateCategoryController implements IUpdateCategoryController {
  constructor(private readonly categoriesRepository: IUpdateCategoryRepository) {}

  async handle(
    httpRequest: HttpRequest<UpdateCategoryParams>
  ): Promise<HttpResponse<Category>> {
    try {
      const id = httpRequest?.params?.id;
      const { body } = httpRequest;

      if (!id) {
        return {
          statusCode: 400,
          body: {
            statusCode: 400,
            message: "You must provide an id",
          },
        };
      }

      if (!body) {
        return {
          statusCode: 400,
          body: {
            statusCode: 400,
            message: "You must provide a body",
          },
        };
      }

      const category = await this.categoriesRepository.updateCategory(id, body);

      return {
        statusCode: 200,
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
