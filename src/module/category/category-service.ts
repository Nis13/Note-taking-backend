import { CategoryRepo } from "./category-repo";
import { CreateCategoryDto } from "./dto/create-category-dto";

export class CategoryService {
  static async create(userId: string, category: CreateCategoryDto) {
    const categoryToCreate = {
      ...category,
      createdBy: userId,
    };
    return await CategoryRepo.create(categoryToCreate);
  }

  static async findByIds(ids: string[]) {
    return await CategoryRepo.findByIds(ids);
  }

  static getAll(userId: string) {
    return CategoryRepo.getAll(userId);
  }

  static getById(id: string, userId: string) {
    return CategoryRepo.getById(id, userId);
  }

  static deleteById(id: string) {
    return CategoryRepo.delete(id);
  }

  static updateById(id: string, category: CreateCategoryDto) {
    return CategoryRepo.update(id, category);
  }

  static getByUserId(userId: string) {
    return CategoryRepo.getByUserId(userId);
  }
}
