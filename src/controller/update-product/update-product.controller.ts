import { Product } from "../../models/product";
import { HttpRequest, HttpResponse } from "../interfaces";
import { IUpdateProductController, IUpdateProductRepository, UpdateProductParams } from "./interfaces";
import { isValidUpdateProductsParams } from "./utils";

export class UpdateProductController implements IUpdateProductController {
  constructor(private readonly updateProductRepository: IUpdateProductRepository) {}

  async handle(httpRequest: HttpRequest<UpdateProductParams>): Promise<HttpResponse<Product>> {
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

      const result = isValidUpdateProductsParams(body);

      if(result.success === false) {
        return {
          statusCode: 400,
          body: {
            statusCode: 400,
            message: JSON.parse(result.error.message),
          }
        };
      }

      const product = await this.updateProductRepository.updateProduct(id, body);

      return {
        statusCode: 200,
        body: product,
      };
    }
    catch(error) {
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