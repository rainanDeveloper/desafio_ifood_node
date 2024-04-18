import * as express from "express";
import { swaggerDocs } from "./utils/swagger";
import {routes} from "./routes/routes";

const app = express();

swaggerDocs(app);

app.use(express.json());

app.use('/api', routes);


export default app;
