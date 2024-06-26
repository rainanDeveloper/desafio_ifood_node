import { Router } from "express";
import { CreateProductMongoRepository } from "../../repositories/create-product/create-product-mongo.repository";
import { CreateProductController } from "../../controller/create-product/create-product.controller";
import { GetProductsMongoRepository } from "../../repositories/get-products/get-products-mongo.repository";
import { GetProductsController } from "../../controller/get-products/get-products.controller";
import { UpdateProductMongoRepository } from "../../repositories/update-product/update-product-mongo.repository";
import { UpdateProductController } from "../../controller/update-product/update-product.controller";
import { FindProductMongoRepository } from "../../repositories/find-product/find-product-mongo.repository";
import { FindProductController } from "../../controller/find-product/find-product.controller";
import { DeleteProductMongoRepository } from "../../repositories/delete-product/delete-product-mongo.repository";
import { DeleteProductController } from "../../controller/delete-product/delete-product.controller";
import { AWSSNSService } from "../../services/aws-sns/aws-sns.service";

const productRouter = Router();

productRouter.post("", async (req, res) => {
  const createProductRepository = new CreateProductMongoRepository();
  const AwsSnsService = new AWSSNSService();
  const createProductController = new CreateProductController(
    createProductRepository,
    AwsSnsService,
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

productRouter.patch("/:id", async (req, res) => {
  const updateProductRepository = new UpdateProductMongoRepository();
  const AwsSnsService = new AWSSNSService();
  const updateProductController = new UpdateProductController(
    updateProductRepository,
    AwsSnsService,
  );
  const { params, body } = req;

  const updatedProduct = await updateProductController.handle({ params, body });

  return res.status(updatedProduct.statusCode).json(updatedProduct.body);
});

productRouter.get("/:id", async (req, res) => {
  const findProductRepository = new FindProductMongoRepository();
  const findProductController = new FindProductController(
    findProductRepository
  );
  const { params } = req;

  const product = await findProductController.handle({ params });

  return res.status(product.statusCode).json(product.body);
});

productRouter.delete("/:id", async (req, res) => {
  const deleteProductRepository = new DeleteProductMongoRepository();
  const deleteProductController = new DeleteProductController(
    deleteProductRepository
  );

  const { params } = req;

  const deletedProduct = await deleteProductController.handle({ params });

  return res.status(deletedProduct.statusCode).json(deletedProduct.body);
});

export { productRouter };