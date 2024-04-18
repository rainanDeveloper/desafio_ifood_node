import { Router } from "express";
import categoryRouter from "./category/category.router";

const router = Router();

router.use("/category", categoryRouter);

export default router;
