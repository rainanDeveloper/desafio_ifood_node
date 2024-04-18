import { Router } from "express";
import { categoryRouter } from "./category/category.route";

const routes = Router();

routes.get("/", (_req, res) => {
  res.json({
    status: "OK",
  });
});

routes.use("/category", categoryRouter);

export {routes}