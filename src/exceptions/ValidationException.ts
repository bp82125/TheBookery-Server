import HttpStatus from "http-status";
import { BaseException } from "./BaseException";

export class ValidationException extends BaseException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}