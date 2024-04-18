import * as express from "express";
import router from "./routes/routes";

const app = express();

app.use(express.json());

app.use("/api", router);

export default app;
