import "reflect-metadata";
import app from "./server";
import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";
dotenv.config();

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
