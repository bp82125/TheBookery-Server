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

export const getPaginationInfo = (
  total: number,
  page: number,
  limit: number
) => {
  const totalPages = Math.ceil(total / limit);
  const hasNextPage = page < totalPages;
  const hasPreviousPage = page > 1;

  return {
    total_records: total,
    current_page: page,
    total_pages: totalPages,
    next_page: hasNextPage ? page + 1 : null,
    prev_page: hasPreviousPage ? page - 1 : null,
  };
};
