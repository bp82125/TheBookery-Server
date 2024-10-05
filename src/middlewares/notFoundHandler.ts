import { Request, Response, NextFunction } from "express";
import { RouteNotFoundException } from "../exceptions/RouteNotFoundException";

export function notFoundHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  next(new RouteNotFoundException(req.originalUrl));
}
