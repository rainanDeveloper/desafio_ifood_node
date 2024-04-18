import { z } from "zod";
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - owner_id
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the category
 *         title:
 *           type: string
 *           description: The title of the category
 *         description:
 *           type: string
 *           description: The description of the category
 *         owner_id:
 *           type: string
 *           description: The id of the user that owns the category
 *     PartialCategory:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the category
 *         description:
 *           type: string
 *           description: The description of the category 
 *         owner_id:
 *           type: string
 *           description: The id of the user that owns the category
 *
 **/ 
export interface Category {
  id?: string;
  title: string;
  description: string;
  owner_id: string;
}

export interface PartialCategory {
  title?: string;
  description?: string;
  owner_id?: string;
}

export const categorySchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  owner_id: z.string(),
});

export const partialCategorySchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  owner_id: z.string().optional(),
});

export const categoryArraySchema = z.array(categorySchema);
