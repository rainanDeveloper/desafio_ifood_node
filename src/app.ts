import * as express from "express";
import router from "./routes";

const app = express();

app.use("/api", router);

app.use(express.json());

export default app;
