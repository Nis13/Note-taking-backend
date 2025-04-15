import { NextFunction, Response } from "express";
import { Request } from "../interface/auth";
import BadRequestError from "../error/BadRequestError";
import { NotFoundError } from "../error/NotFoundError";
import HttpStatusCodes from "http-status-codes";

export default function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof NotFoundError) {
    res.status(HttpStatusCodes.NOT_FOUND).json({ message: error.message });
  }
  if (error instanceof BadRequestError) {
    res.status(HttpStatusCodes.BAD_REQUEST).json({ message: error.message });
  }
  if (error instanceof NotFoundError) {
    res.status(HttpStatusCodes.NOT_FOUND).json({ message: error.message });
  }
  res
    .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: error.message });
}
