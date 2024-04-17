import { config } from "dotenv";
import app from "./app";
import { Logger } from "./utils/logger";

config();

const port = process.env.PORT || 8080;

const startServer = () => {
  const logger = new Logger("info", "server");
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
};

startServer();
