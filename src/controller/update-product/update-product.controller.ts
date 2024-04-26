import { IUpdateProductRepository } from "./interfaces";

export class UpdateProductController implements IUpdateProductController {
  constructor(private readonly updateProductRepository: IUpdateProductRepository) {}

  async handle(httpRequest: HttpRequest<UpdateProductParams>): Promise<HttpResponse<Product>> {
    try {
      const id = httpRequest?.params?.id;
      const { body } = httpRequest;

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