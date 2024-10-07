import { Request } from "express";

export const getSortingParams = (req: Request) => {
  const { sortBy = "createdAt", order = "asc" } = req.query as {
    sortBy?: string;
    order?: string;
  };

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
