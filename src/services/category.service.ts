import { Db, Collection } from "mongodb";
import {randomUUID} from "crypto";
import { Category, PartialCategory, categoryArraySchema, categorySchema, partialCategorySchema } from "../models/category.model";

export class CategoryService {
  private categoryCollection: Collection<Category>;
  constructor(db: Promise<Db>) {
    void db.then((db) => {
      this.categoryCollection = db.collection("categories");
    });
  }

  async getCategories(): Promise<Category[]> {
    const categories: Category[] = await this.categoryCollection.find({}).toArray() as any;

    try{
      const result: Category[] = categoryArraySchema.parse(categories);

      return result;
    }
    catch(error) {
      throw new Error(error);
    }
  }

  async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoryCollection.findOne({ id });

    try{
      const result: Category = categorySchema.parse(category);
      
      return result;
    }
    catch(error) {
      throw new Error(error);
    }
  }

  async createCategory(category: Category): Promise<boolean> {  
      category.id = randomUUID();  
      const validCategory = categorySchema.parse(category);

      const result = await this.categoryCollection.insertOne(validCategory);

      return result.acknowledged;
  }

  async updateCategory(id: string, category: PartialCategory): Promise<boolean | null> {
    try{
      const validCategory = partialCategorySchema.parse(category);

      const result = await this.categoryCollection.updateOne({ id }, { $set: validCategory });

      return result.acknowledged;
    }
    catch(_) {
      throw new Error("Erro na validação da categoria");
    }
  }

  async deleteCategory(id: string): Promise<void> {
    try{
      await this.categoryCollection.deleteOne({ id });
    }
    catch(_) {
      throw new Error("Erro ao deletar categoria");
    }
  }
}
