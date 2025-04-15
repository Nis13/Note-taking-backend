import { NextFunction, Request, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import * as AuthService from "./auth-service";

export async function login(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  try {
    const data = await AuthService.login(body);
    res.status(HttpStatusCodes.OK).json(data);
  } catch (error) {
    next(error);
  }
}

export async function signup(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  try {
    const data = await AuthService.signup(body);
    res.status(HttpStatusCodes.CREATED).json(data);
  } catch (error) {
    next(error);
  }
}
