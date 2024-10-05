import { BaseException } from "./BaseException";
import httpStatus from "http-status";

export class AccountAlreadyLinkedException extends BaseException {
  constructor(message: string) {
    super(message, httpStatus.BAD_REQUEST);
  }
}
