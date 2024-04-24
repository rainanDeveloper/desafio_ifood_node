import { z } from "zod";
import { CreateProductParams } from "./interfaces";

const createProductsSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number().positive(),
  categoryId: z.string(),
  ownerId: z.string(),
});

export const isValidCreateProductsParams = (params: CreateProductParams) => {
  const result = createProductsSchema.safeParse(params);

  return result;
};
