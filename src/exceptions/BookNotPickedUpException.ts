import { ValidationException } from "./ValidationException";

export class BookNotPickedUpException extends ValidationException {
  constructor(message = "Sách phải được mượn trước khi trả") {
    super(message);
    this.name = "BookNotPickedUpException";
  }
}
