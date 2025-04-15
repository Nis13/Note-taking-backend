import { NextFunction, Response } from "express";
import { NoteService } from "./note-service";
import { Request } from "../../interface/auth";
import { NotFoundError } from "../../error/NotFoundError";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const note = req.body;
    const userId = req.user.id;
    const result = await NoteService.create(userId, note);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function getall(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user.id;
    const title = req.query.title as string | undefined;
    const categoryId = req.query.categoryId as string | undefined;
    const notes = await NoteService.getall(userId, { title, categoryId });
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const note = await NoteService.getById(id, userId);
    if (!note) {
      throw new NotFoundError(`Note with Id: ${id} not found`);
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
}

export async function getByUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req.params;
    const notes = await NoteService.getByUserId(userId);
    if (!notes) {
      throw new NotFoundError(`Notes of User Id: ${userId} not found`);
    }
    res.status(200).json(notes);
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
    const result = await NoteService.deleteById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

export async function updateById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const note = req.body;
    const result = await NoteService.updateById(id, note);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}
