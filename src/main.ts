import { config } from "dotenv";
import app from "./app";
import { Logger } from "./utils/logger";
import { MongoDBClient } from "./database/mongo";

const startServer = async () => {
  config();
  const port = process.env.PORT || 8080;
  const logger = new Logger("info", "server");
  await MongoDBClient.connect();
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
};

startServer();
