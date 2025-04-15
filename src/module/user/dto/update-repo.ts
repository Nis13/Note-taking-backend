import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { Role } from "../../../constant/enum/role";

export class UpdateUserDTO {
  @IsOptional()
  @IsEmail({}, { message: "Invalid email format" })
  email?: string;

  @IsOptional()
  @IsString({ message: "Name must be a string" })
  @MinLength(2, { message: "Name must be at least 2 characters" })
  name?: string;

  @IsOptional()
  @IsEnum(Role, { message: "Role must be either admin or user" })
  role?: Role;
}
