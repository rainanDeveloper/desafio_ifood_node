import { Express } from "express";
import * as swaggerJSDoc from "swagger-jsdoc";
import * as swaggerUI from "swagger-ui-express";
import { version } from "../../package.json";
import { Logger } from "./logger";

const logger = new Logger("info", "swagger");

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API - Desafio Ifood Backend",
      version,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/**/*.ts", "./src/schemas/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export function swaggerDocs(app: Express) {
  logger.info("Swagger docs are running at /docs");
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}
