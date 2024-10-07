import { Request } from "express";

export const getPaginationParams = (req: Request) => {
  const { page = 1, limit = 10 } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const limitNumber = parseInt(limit as string, 10);

  return { pageNumber, limitNumber };
};
