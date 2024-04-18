import { MongoClient, Db } from "mongodb";
import { config } from "dotenv";
import { Logger } from "../utils/logger";

config();

const url = process.env["MONGODB_URL"];

export class DatabaseSingleton {
  private static client: MongoClient;
  private static db: Db;
  private static readonly logger = new Logger("info", "database");

  constructor() {
    throw new Error("Use DatabaseSingleton.getInstance() instead of new.");
  }

  public static async getInstance() {
    if (!this.client && !this.db) {
      await this.connect();
      return this.db;
    }
    return this.db;
  }

  private static async connect() {
    if (!url) {
      this.logger.error("MONGODB_URL is not defined");
      throw new Error("MONGODB_URL is not defined");
    }
    this.client = new MongoClient(url);
    await this.client.connect();

    const dbName = process.env["MONGODB_NAME"];

    if (!dbName) {
      this.logger.error("MONGODB_NAME is not defined");
      throw new Error("MONGODB_NAME is not defined");
    }

    this.db = this.client.db(dbName);
  }
}
