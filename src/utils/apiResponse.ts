import { Response } from "express";

export const apiResponse = (
  res: Response,
  success: boolean,
  statusCode: number,
  data: any = null,
  error: any = null,
  message: string = ""
) => {
  res.status(statusCode).json({
    success,
    statusCode,
    data,
    error,
    message,
  });
};
