import { Product } from "../../models/product";
import { HttpResponse } from "../interfaces";
import { IGetProductsController, IGetProductsRepository } from "./interfaces";

export class GetProductsController implements IGetProductsController {
  constructor(private readonly getProductsRepository: IGetProductsRepository) {}

  async handle(): Promise<HttpResponse<Product[]>> {
    try{
      const products = await this.getProductsRepository.getProducts();
      return {
        statusCode: 200,
        body: products,
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