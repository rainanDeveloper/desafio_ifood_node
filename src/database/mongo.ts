import { MongoClient, Db } from"mongodb";
import { Logger } from "../utils/logger";

export class MongoDBClient {
  private static client: MongoClient;
  public static db: Db;
  private static readonly logger = new Logger("info", "MongoDBClient");

  public static async connect(): Promise<void> {
    const url = process.env.MONGODB_URI;
    if (!url) {
      throw new Error("MONGODB_URI not set");
    }
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    this.client = await MongoClient.connect(url, { auth: { username, password } });
    const dbName = process.env.MONGODB_NAME;
    if (!dbName) {
      throw new Error("MONGODB_NAME not set");
    }
    this.db = this.client.db(dbName);
    this.logger.info("Connected to MongoDB");
  }

  public static getDbInstance(): Db {
    if (!this.db) {
      throw new Error("MongoDBClient not connected");
    }
    return this.db;
  }
}