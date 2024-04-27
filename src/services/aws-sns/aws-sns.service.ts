import { SNS } from "aws-sdk";
import { IAWSSNSService } from "./interfaces";
import { AwsSingleton } from "../../external/aws";

export class AWSSNSService implements IAWSSNSService {
  private readonly sns: SNS;
  constructor() {
    this.sns = AwsSingleton.getSNS();
  }

  public async publish(message: string): Promise<void> {
    const topicArn = process.env.AWS_SNS_TOPIC_CATALOG_ARN;

    return new Promise((resolve, reject) => {
      this.sns.publish({
        TopicArn: topicArn,
        Message: message,
      }, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
}