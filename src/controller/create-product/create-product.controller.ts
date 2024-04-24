import { Product } from "../../models/product";
import { HttpRequest, HttpResponse } from "../interfaces";
import {
  CreateProductParams,
  ICreateProductController,
  ICreateProductRepository,
} from "./interfaces";
import { isValidCreateProductsParams } from "./utils";

export class CreateProductController implements ICreateProductController {
  constructor(private readonly productsRepository: ICreateProductRepository) {}
  async handle(
    httpRequest: HttpRequest<CreateProductParams>
  ): Promise<HttpResponse<Product>> {
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

      const result = isValidCreateProductsParams(body);
      
      if(result.success === false) {
        return {
          statusCode: 400,
          body: {
            statusCode: 400,
            message: JSON.parse(result.error.message),
          }
        };
      }

      const product = await this.productsRepository.createProduct(body);

      return {
        statusCode: 201,
        body: product,
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
