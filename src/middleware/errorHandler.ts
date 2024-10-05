import { Request, Response, NextFunction } from "express";
import HttpStatus from "http-status";
import { BaseException } from "../exceptions/BaseException";
import { apiResponse } from "../utils/apiResponse";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof BaseException) {
    apiResponse(res, false, err.statusCode, null, err.name, err.message);
  } else {
    console.log(err);
    apiResponse(
      res,
      false,
      HttpStatus.INTERNAL_SERVER_ERROR,
      null,
      "Internal Server Error",
      "Unknown Error"
    );
  }
}
