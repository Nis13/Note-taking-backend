import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from "class-validator";
import { Role } from "../../../constant/enum/role";

export class SignupDTO {
  @IsEmail({}, { message: "Invalid email format" })
  @IsNotEmpty({ message: "Email should not be empty" })
  email: string;

  @IsNotEmpty({ message: "Password should not be empty" })
  @IsStrongPassword()
  password: string;

  @IsOptional()
  @IsString({ message: "Name must be a string" })
  name?: string;

  @IsOptional()
  @IsEnum(Role, { message: "Role must be either admin or user" })
  role?: Role;
}
