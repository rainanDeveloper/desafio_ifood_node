import * as express from "express";
import { swaggerDocs } from "./utils/swagger";

const app = express();

swaggerDocs(app);

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

export default app;
