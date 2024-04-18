import { Request, Response } from "express";
import { Category } from "src/models/category.model";
import { CategoryService } from "src/services/category.service";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {
    console.log(this.categoryService);
  }

  async getCategories(_req: Request, res: Response) {
    try{
        const categories = await this.categoryService.getCategories();

        res.status(200).json(categories);
    }
    catch(error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCategoryById(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "É necessário informar o id da categoria" });
      return;
    }
    try{
        const category = await this.categoryService.getCategoryById(id);

        res.status(200).json(category);
    }
    catch(error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createCategory(req: Request, res: Response) {
    const category = req.body as Category;
    const success = await this.categoryService.createCategory(category);

    try{
        res.status(201).json({ success });
    }
    catch(error) {
        res.status(400).json({ message: error.message });
    }
  }

  async updateCategory(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "É necessário informar o id da categoria" });
      return;
    }
    const category = req.body as Partial<Category>;
    try{
        const success = await this.categoryService.updateCategory(id, category);
        
        res.status(200).json({ success });
    }
    catch(error) {
        res.status(400).json({ message: error });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "É necessário informar o id da categoria" });
      return;
    }
    await this.categoryService.deleteCategory(id);
  }
}