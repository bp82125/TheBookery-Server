import { Request, Response, NextFunction } from "express";
import passport from "../config/passport";
import { UnauthorizedException } from "../exceptions/UnauthorizedException";

export function protectRoute(req: Request, res: Response, next: NextFunction) {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: any, user: any, info: any) => {
      if (err) {
        return next(
          new UnauthorizedException("Server error during authentication")
        );
      }
      if (!user) {
        return next(
          new UnauthorizedException(
            "Token không hợp lệ hoặc không có quyền truy cập đến tài nguyên này"
          )
        );
      }

      // Attach the authenticated user to the request
      req.user = user;
      next();
    }
  )(req, res, next);
}
