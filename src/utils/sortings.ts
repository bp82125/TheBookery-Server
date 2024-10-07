import { Request } from "express";
import { ValidationException } from "../exceptions/ValidationException";
import { ZodObject } from "zod";

export const getSortingClause = (
  req: Request,
  sortFieldsSchema: ZodObject<any>
) => {
  const { sortBy = "createdAt", order = "asc" } = req.query as {
    sortBy?: string;
    order?: string;
  };

  const validSortFields = Object.keys(sortFieldsSchema.shape);

  if (!validSortFields.includes(sortBy)) {
    throw new ValidationException(
      `Trường dùng để sắp xếp không hợp lệ: ${sortBy}, các trường hợp hợp lệ bao gồm: ${validSortFields.join(
        ", "
      )}`
    );
  }

  const sortByFields = sortBy.split(".");
  const orderByClause: { [key: string]: any } = {};
  let currentLevel = orderByClause;

  for (let i = 0; i < sortByFields.length; i++) {
    const field = sortByFields[i];
    if (i === sortByFields.length - 1) {
      currentLevel[field] = order;
    } else {
      currentLevel[field] = {};
      currentLevel = currentLevel[field];
    }
  }
  return orderByClause;
};
