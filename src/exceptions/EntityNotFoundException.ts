import HttpStatus from "http-status";
import { BaseException } from "./BaseException";

export class EntityNotFoundException extends BaseException {
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
}