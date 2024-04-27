import { Product } from "../../models/product";
import { HttpRequest, HttpResponse } from "../interfaces";
import { IFindProductController, IFindProductRepository } from "./interfaces";

export class FindProductController implements IFindProductController {
  constructor(private readonly findProductRepository: IFindProductRepository) {}

  async handle(httpRequest: HttpRequest<string>): Promise<HttpResponse<Product>> {
    try {
      const { params } = httpRequest;

      const product = await this.findProductRepository.findProduct(params.id);

      return {
        statusCode: 200,
        body: product,
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