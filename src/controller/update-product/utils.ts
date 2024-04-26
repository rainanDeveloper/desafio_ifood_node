import { z } from "zod";
import { UpdateProductParams } from "./interfaces";

const updateProductSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  categoryId: z.string().optional(),
  ownerId: z.string().optional(),
});

export const isValidUpdateProductsParams = (params: UpdateProductParams) => {
  const result = updateProductSchema.safeParse(params);

  return result;
};