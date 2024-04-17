import { config } from "dotenv";
import app from "./app";

config();

const port = process.env.PORT || 8080;


const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
