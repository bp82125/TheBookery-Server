import { ValidationException } from "./ValidationException";

export class InvalidPickupStatusException extends ValidationException {
  constructor(message = "Chỉ có sách đã được duyệt mới có thể lấy") {
    super(message);
    this.name = "InvalidPickupStatusException";
  }
}
