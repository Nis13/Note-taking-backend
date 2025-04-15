import { In } from "typeorm";
import { Category } from "../../entities/category";
import { BaseRepo } from "../base/base-repo";
import { CreateCategoryDto } from "./dto/create-category-dto";

export class CategoryRepo extends BaseRepo {
  static readonly categoryTable = this.db().getRepository(Category);

  static getAll(userId: string): Promise<Category[]> {
    return this.categoryTable.find({ where: { createdBy: { id: userId } } });
  }

  static findByIds(ids: string[]): Promise<Category[]> {
    return this.categoryTable.find({
      where: {
        id: In(ids),
      },
    });
  }

  static getById(id: string, userId: string): Promise<Category | null> {
    return this.categoryTable.findOne({
      where: {
        id,
        createdBy: { id: userId },
      },
    });
  }

  static getByUserId(userId: string): Promise<Category[]> {
    return this.categoryTable.findBy({ createdBy: { id: userId } });
  }

  static create(category: CreateCategoryDto) {
    return this.categoryTable.save(category);
  }

  static update(id: string, data: CreateCategoryDto) {
    return this.categoryTable.update({ id }, data);
  }

  static delete(id: string) {
    return this.categoryTable.delete({ id });
  }
}
