import { ValidationException } from "./ValidationException";

export class NoCopiesAvailableException extends ValidationException {
  constructor(message = "Không còn sách để cho mượn") {
    super(message);
    this.name = "NoCopiesAvailableException";
  }
}
