import { User } from "../../entities/user";
import { NotFoundError } from "../../error/NotFoundError";
import { SignupDTO } from "../auth/dto/signup-dto";
import { UpdateUserDTO } from "./dto/update-repo";
import { UserRepo } from "./user-repo";

export class UserService {
  static async getById(id: string) {
    const user = await UserRepo.getById(id);
    if (!user) {
      throw new NotFoundError(`User of Id: ${id} not found`);
    }
    return user;
  }

  static async getAll() {
    return UserRepo.getall();
  }

  static async getByEmail(email: string) {
    return UserRepo.getByEmail(email);
  }

  static async create(user: SignupDTO): Promise<User> {
    return UserRepo.create(user);
  }

  static async update(id: string, user: UpdateUserDTO) {
    return UserRepo.update(id, user);
  }

  static async deleteById(id: string) {
    this.getById(id);
    return UserRepo.deleteById(id);
  }
}
