import { NextFunction, Response } from "express";
import config from "../config";
import { verify } from "jsonwebtoken";
import { Request } from "../interface/auth";
import { UnauthenticatedError } from "../error/UnauthenticatedError";
import { UserPayloadDTO } from "../module/auth/dto/payload-dto";

export function authenticate(req: Request, _res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    next(new UnauthenticatedError("token not found"));
    return;
  }

  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    next(new UnauthenticatedError("unauthenticated"));
    return;
  }

  try {
    const user = verify(token[1], config.jwt.secret) as UserPayloadDTO;
    req.user = user;
  } catch {
    next(new UnauthenticatedError("unauthenicated"));
  }

  next();
}

export function authorize(allowedRoles: string[]) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const hasRole = allowedRoles.includes(user.role);

      if (!hasRole) {
        return next(new UnauthenticatedError("Forbidden"));
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}
