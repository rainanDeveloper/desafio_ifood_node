import * as winston from "winston";

export class Logger {
  private readonly logger: winston.Logger;
  constructor(level: string, context?: string) {
    this.logger = winston.createLogger({
      level,
      format: winston.format.json(),
      defaultMeta: { service: context?.toUpperCase() || "MAIN" },
      transports: [
        new winston.transports.Console(),
      ],
    });
  }

  public info(message: string) {
    this.logger.info(message);
  }

  public error(message: string) {
    this.logger.error(message);
  }
}
