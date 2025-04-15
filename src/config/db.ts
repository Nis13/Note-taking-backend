import { DataSource } from "typeorm";
import config from "../config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.database.host,
  port: +(config.database.port ?? 5432),
  username: config.database.user,
  password: config.database.password,
  database: config.database.name,
  synchronize: true,

  entities: [__dirname + "/../entities/*.{ts,js}"],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});
