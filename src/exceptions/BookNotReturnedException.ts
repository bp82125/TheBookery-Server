import { BaseException } from "./BaseException";
import httpStatus from "http-status";

export class BookNotReturnedException extends BaseException {
  constructor(
    message: string = "This book has not been returned yet and cannot be borrowed again."
  ) {
    super(message, httpStatus.BAD_REQUEST);
  }
}
