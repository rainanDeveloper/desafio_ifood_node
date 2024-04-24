import { Router } from "express";
import { CreateProductMongoRepository } from "../../repositories/create-product/create-product-mongo.repository";
import { CreateProductController } from "../../controller/create-product/create-product.controller";

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

export { productRouter };