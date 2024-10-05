import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/ValidationException";

export function validateRequest<T extends object>(dtoClass: new () => T) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(dtoClass, req.body);
    const errors = await validate(instance);

    if (errors.length > 0) {
      const message = errors
        .map((error) => Object.values(error.constraints || {}).join(", "))
        .join(", ");
      return next(new ValidationException(message));
    }

    next();
  };
}
