import { Router } from "express";
import { MongoCategoriesRepository } from "./repositories/categories/mongo-categories.repository";
import { CategoriesController } from "./controller/categories/categories.controller";

const router = Router();

router.get("/category", async (_req, res) => {
  const categoriesRepository = new MongoCategoriesRepository();
  const categoriesController = new CategoriesController(categoriesRepository);

  const categories = await categoriesController.getCategories();

  res.status(categories.statusCode).json(categories.body);
});

export default router;
