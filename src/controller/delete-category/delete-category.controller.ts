import { HttpRequest, HttpResponse } from "../interfaces";
import { IDeleteCategoryController, IDeleteCategoryRepository } from "./interfaces";

export class DeleteCategoryController implements IDeleteCategoryController {
  constructor(
    private readonly deleteCategoryRepository: IDeleteCategoryRepository
  ) {}

  async handle(httpRequest: HttpRequest<undefined>): Promise<HttpResponse<void>> {
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

      await this.deleteCategoryRepository.deleteCategory(id);

      return {
        statusCode: 204,
        body: undefined,
      };
    }
    catch (error) {
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