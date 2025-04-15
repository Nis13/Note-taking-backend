import express from "express";
import config from "./config";
import { AppDataSource } from "./config/db";
import routes from "./routes";
import errorHandler from "./middleware/errorValidator";
import cors from "cors";

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
AppDataSource.initialize()
  .then(() => {
    app.use(routes);
    app.use(errorHandler);

    app.listen(config.port, () => {
      console.log(`Port is listening on ${config.port}`);
    });
  })
  .catch((err) => console.log("Error connecting to database:", err));
