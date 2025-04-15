import { User } from "../../entities/user";
import { SignupDTO } from "../auth/dto/signup-dto";
import { BaseRepo } from "../base/base-repo";

export class UserRepo extends BaseRepo {
  static readonly userTable = this.db().getRepository(User);

  static create(user: SignupDTO): Promise<User> {
    return this.userTable.save(user);
  }

  static getall() {
    return this.userTable.find();
  }

  static getById(id: string) {
    return this.userTable.findOneBy({ id });
  }

  static deleteById(id: string) {
    return this.userTable.softDelete({ id });
  }

  static update(id: string, user: any) {
    return this.userTable.update({ id }, user);
  }

  static getByEmail(email: string) {
    return this.userTable.findOneBy({ email });
  }
}
