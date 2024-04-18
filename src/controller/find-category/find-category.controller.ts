import { Category } from "src/models/categories";
import { HttpRequest, HttpResponse } from "../interfaces";
import { IFindCategoryController, IFindCategoryRepository } from "./interfaces";

export class FindCategoryController implements IFindCategoryController {
  constructor(
    private readonly findCategoryRepository: IFindCategoryRepository
  ) {}

  async handle(
    httpRequest: HttpRequest<undefined>
  ): Promise<HttpResponse<Category>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return {
          statusCode: 400,
          body: {
            statusCode: 400,
            message: "You must provide an id",
          },
        };
      }

      const category = await this.findCategoryRepository.findCategory(id);

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
