import HttpStatus from "http-status";
import { BaseException } from "./BaseException";

export class InvalidPasswordException extends BaseException {
  constructor(message: string) {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}
