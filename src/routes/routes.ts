import { Router } from "express";
import categoryRouter from "./category/category.router";
import { productRouter } from "./product/product.router";

const router = Router();

router.use("/category", categoryRouter);
router.use("/product", productRouter);

export default router;
