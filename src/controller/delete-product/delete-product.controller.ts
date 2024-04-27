import { HttpRequest, HttpResponse } from "../interfaces";
import { IDeleteProductController, IDeleteProductRepository } from "./interfaces";

export class DeleteProductController implements IDeleteProductController {
  constructor(private readonly deleteProductRepository: IDeleteProductRepository) {}

  async handle(httpRequest: HttpRequest<string>): Promise<HttpResponse<void>> {
    try {
      const { params } = httpRequest;

      await this.deleteProductRepository.deleteProduct(params.id);

      return {
        statusCode: 204,
        body: "",
      };
    }
    catch (error) {
      return {
        statusCode: 400,
        body: {
          statusCode: 400,
          message: error.message,
        },
      };
    }
  }
}