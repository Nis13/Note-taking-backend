import { NextFunction, Response } from "express";
import { UserService } from "./user-service";
import { Request } from "../../interface/auth";

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
export async function getAll(_req: Request, res: Response, next: NextFunction) {
  try {
    const users = await UserService.getAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export async function getMyProfile(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userId = req.user.id;
    const user = await UserService.getById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const user = req.body;
    const result = await UserService.update(id, user);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
export async function deleteById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const result = await UserService.deleteById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
