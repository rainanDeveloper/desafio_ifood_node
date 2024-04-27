import { config, SNS, SQS } from "aws-sdk";
import { Logger } from "../utils/logger";

export class AwsSingleton {
  private static sqs: SQS;
  private static sns: SNS;
  private static readonly logger = new Logger("info", "AwsSingleton");

  public static init(): void {
    const region = process.env.AWS_REGION_NAME;
    if (!region) {
      throw new Error("AWS_REGION_NAME not set");
    }

    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    if (!accessKeyId) {
      throw new Error("AWS_ACCESS_KEY_ID not set");
    }

    const secretAccessKey = process.env.AWS_ACCESS_KEY_SECRET;
    if (!secretAccessKey) {
      throw new Error("AWS_ACCESS_KEY_SECRET not set");
    }

    if(!process.env.AWS_SNS_TOPIC_CATALOG_ARN) {
      throw new Error("AWS_SNS_TOPIC_CATALOG_ARN not set");
    }

    config.update({
      region,
      accessKeyId,
      secretAccessKey,
    });

    this.sqs = new SQS();
    this.sns = new SNS();
    this.logger.info("Initialized AWS SDK");
  }

  public static getSQS(): SQS {
    if (!this.sqs) {
      throw new Error("AwsSingleton not initialized");
    }
    return this.sqs;
  }

  public static getSNS(): SNS {
    if (!this.sns) {
      throw new Error("AwsSingleton not initialized");
    }
    return this.sns;
  }
}