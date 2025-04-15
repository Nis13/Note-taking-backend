import { IsNotEmpty, IsStrongPassword } from "class-validator";
import { UserDTO } from "./user.dto";

export class CreateUserDTO extends UserDTO {
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
