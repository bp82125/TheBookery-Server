import { Request } from "express";
import { ValidationException } from "../exceptions/ValidationException";
import { paginationFields } from "../zods/paginationFields";

export const getPaginationParams = (req: Request) => {
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 10;

  const parsedQuery = paginationFields.safeParse({ page, limit });

  if (!parsedQuery.success) {
    throw new ValidationException(
      parsedQuery.error.errors.map((err) => err.message).join(", ")
    );
  }

  return parsedQuery.data;
};
