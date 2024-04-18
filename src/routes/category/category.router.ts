import { Router } from "express";
import { CreateCategoryController } from "../../controller/create-category/create-category.controller";
import { GetCategoriesController } from "../../controller/get-categories/get-categories.controller";
import { CreateCategoryMongoRepository } from "../../repositories/create-category/create-category-mongo.repository";
import { GetCategoriesMongoRepository } from "../../repositories/get-categories/get-categories-mongo.repository";

const categoryRouter = Router();

categoryRouter.get("", async (_req, res) => {
  const categoriesRepository = new GetCategoriesMongoRepository();
  const categoriesController = new GetCategoriesController(
    categoriesRepository
  );

  const categories = await categoriesController.handle();

  res.status(categories.statusCode).json(categories.body);
});

categoryRouter.post("", async (req, res) => {
  const createCategoriesRepository = new CreateCategoryMongoRepository();
  const createCategoriesController = new CreateCategoryController(
    createCategoriesRepository
  );

  const createdCategory = await createCategoriesController.handle(req);

  res.status(createdCategory.statusCode).json(createdCategory.body);
});

categoryRouter.patch("/:id", async (req, res) => {
  const updateCategoryRepository = new CreateCategoryMongoRepository();
  const createCategoriesController = new CreateCategoryController(
    updateCategoryRepository
  );

  const { params, body } = req;

  const updatedCategory = await createCategoriesController.handle({params, body});

  res.status(updatedCategory.statusCode).json(updatedCategory.body);
});

export default categoryRouter;
