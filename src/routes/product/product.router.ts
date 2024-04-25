import { Router } from "express";
import { CreateProductMongoRepository } from "../../repositories/create-product/create-product-mongo.repository";
import { CreateProductController } from "../../controller/create-product/create-product.controller";
import { GetProductsMongoRepository } from "../../repositories/get-products/get-products-mongo.repository";
import { GetProductsController } from "../../controller/get-products/get-products.controller";

const productRouter = Router();

productRouter.post("", async (req, res) => {
  const createProductRepository = new CreateProductMongoRepository();
  const createProductController = new CreateProductController(
    createProductRepository
  );
  
  const { body } = req;

  const createdProduct = await createProductController.handle({ body });

  return res.status(createdProduct.statusCode).json(createdProduct.body);
});

productRouter.get("", async (req, res) => {
  const getProductsRepository = new GetProductsMongoRepository();
  const getProductsController = new GetProductsController(
    getProductsRepository
  );

  const products = await getProductsController.handle();
  
  return res.status(products.statusCode).json(products.body);
});

export { productRouter };