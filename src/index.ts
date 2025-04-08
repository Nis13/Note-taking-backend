import express from "express";
import config from "./config/config";
import router from "./routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(config.port ?? 3000, () => {
  console.log(`Server running on port ${config.port ?? 3000}`);
});

export default app;
