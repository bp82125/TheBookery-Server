import HttpStatus from "http-status";
import { BaseException } from "./BaseException";

export class UsernameAlreadyExistsException extends BaseException {
  constructor(message: string) {
    super(message, HttpStatus.CONFLICT);
  }
}
