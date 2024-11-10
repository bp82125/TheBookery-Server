// passport.ts
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { scryptSync } from "crypto";
import { prisma } from "../prisma/prismaClient";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await prisma.taiKhoan.findUnique({
        where: { TenDangNhap: username },
      });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }

      const [salt, hash] = user.MatKhau.split(":");
      const hashedPassword = scryptSync(password, salt, 64).toString("hex");

      if (hashedPassword !== hash) {
        return done(null, false, { message: "Incorrect password." });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET as string,
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
      const user = await prisma.taiKhoan.findUnique({
        where: { MaTaiKhoan: jwt_payload.id },
      });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

export default passport;
