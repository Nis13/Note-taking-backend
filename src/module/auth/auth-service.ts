import config from "../../config";
import { CreateUserDTO } from "../../DTO/createUser.dto";
import { LoginDTO } from "../../DTO/login.dto";
import { LoginReturnDTO } from "../../DTO/loginReturn.dto";
import { UnauthenticatedError } from "../../error/UnauthenticatedError";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { UserService } from "../user/user-service";

export async function login(
  loginCredential: LoginDTO
): Promise<LoginReturnDTO> {
  const existingUser = await UserService.getByEmail(loginCredential.email);
  if (!existingUser) {
    throw new UnauthenticatedError("Credentials don't match");
  }
  const isValidPassword = await bcrypt.compare(
    loginCredential.password,
    existingUser.password
  );
  if (!isValidPassword) {
    throw new UnauthenticatedError("Credentials don't match");
  }

  const payload = {
    id: existingUser.id,
    email: existingUser.email,
    role: existingUser.role,
  };
  const accessToken = sign(payload, config.jwt.secret);

  return {
    message: "login successful",
    accessToken,
  };
}

export async function signup(user: CreateUserDTO) {
  const existingUser = await UserService.getByEmail(user.email);
  if (existingUser) {
    throw new UnauthenticatedError("user already exists");
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const newUser = await UserService.create({
    ...user,
    password: hashedPassword,
  });
  return newUser;
}
