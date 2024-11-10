import { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { LoginTaiKhoanDto } from "../dtos/taiKhoan.dto";
import { ValidationException } from "../exceptions/ValidationException";
import { UnauthorizedException } from "../exceptions/UnauthorizedException";

export async function validateAuthPayload(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Basic ")) {
      throw new UnauthorizedException(
        "Missing or invalid Authorization header"
      );
    }

    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64")
      .toString("utf-8")
      .split(":");

    if (credentials.length !== 2) {
      throw new UnauthorizedException("Invalid credentials format");
    }

    const [TenDangNhap, MatKhau] = credentials;

    const loginDto = plainToInstance(LoginTaiKhoanDto, {
      TenDangNhap,
      MatKhau,
    });

    const errors = await validate(loginDto);
    if (errors.length > 0) {
      const message = errors
        .map((error) => Object.values(error.constraints || {}).join(", "))
        .join(", ");
      throw new ValidationException(message);
    }

    req.body = loginDto;

    next();
  } catch (error) {
    next(error);
  }
}
