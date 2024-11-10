import { Request, Response, NextFunction } from "express";
import ObjectId from "bson-objectid";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";

export function validateMongoId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  if (!ObjectId.isValid(id)) {
    return next(new EntityNotFoundException("ID không tồn tại"));
  }

  next();
}
