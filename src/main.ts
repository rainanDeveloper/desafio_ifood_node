import { config } from "dotenv";
import app from "./app";
import { Logger } from "./utils/logger";
import { MongoDBClient } from "./database/mongo";
import { AwsSingleton } from "./external/aws";

const startServer = async () => {
  config();
  const port = process.env.PORT || 8080;
  const logger = new Logger("info", "server");
  await MongoDBClient.connect();
  AwsSingleton.init();
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
};

startServer();
