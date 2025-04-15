import { NextFunction, Response } from "express";
import { Request } from "../../interface/auth";
import { CategoryService } from "./category-service";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user.id;
    const categories = await CategoryService.getAll(userId);
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const category = await CategoryService.getById(id, userId);
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user.id;
    const category = req.body;
    const result = await CategoryService.create(userId, category);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
