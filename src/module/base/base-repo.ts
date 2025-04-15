import { AppDataSource } from "../../config/db";

export class BaseRepo {
  static readonly connection = AppDataSource;

  static db() {
    return this.connection;
  }
}
