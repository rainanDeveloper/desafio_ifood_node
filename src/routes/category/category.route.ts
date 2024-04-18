import { Router } from "express";
import { DatabaseSingleton } from "../../config/db";
import { CategoryService } from "../../services/category.service";
import { CategoryController } from "../../controllers/category.controller";

const categoryRouter = Router();

const db = DatabaseSingleton.getInstance();
const categoryService = new CategoryService(db);
const categoryController = new CategoryController(categoryService);

/**
 * @swagger
* /api/category:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
categoryRouter.get("/", categoryController.getCategories.bind(categoryController));

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: Get category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
categoryRouter.get("/:id", categoryController.getCategoryById.bind(categoryController));;


/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server error
 */
categoryRouter.post("/", categoryController.createCategory.bind(categoryController));;

/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Update category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Updated
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
categoryRouter.put("/:id", categoryController.updateCategory.bind(categoryController));

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Delete category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Deleted
 *       404:
 *         description: Category not found
 *       500:
 *         description: Server error
 */
categoryRouter.delete("/:id", categoryController.deleteCategory.bind(categoryController));

export {categoryRouter}