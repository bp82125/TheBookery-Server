import HttpStatus from "http-status";
import { BaseException } from "./BaseException";

export class RouteNotFoundException extends BaseException {
  constructor(url: string) {
    super(`Cannot find ${url} on this server`, HttpStatus.NOT_FOUND);
  }
}
