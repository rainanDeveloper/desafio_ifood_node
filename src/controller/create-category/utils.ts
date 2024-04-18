import { z } from "zod";
import { CreateCategoryParams } from "./interfaces";

const createCategoryParamsSchema = z.object({
  title: z.string(),
  description: z.string(),
  ownerId: z.string(),
});

export function isValidCreateCategoryParams(params: CreateCategoryParams) {
  const result = createCategoryParamsSchema.safeParse(params);

  return result;
}
