import { scryptSync, timingSafeEqual } from "crypto";

export const verifyPassword = (
  storedPassword: string,
  inputPassword: string
) => {
  const [salt, key] = storedPassword.split(":");

  const hashedInputPassword = scryptSync(inputPassword, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  return timingSafeEqual(keyBuffer, hashedInputPassword);
};
