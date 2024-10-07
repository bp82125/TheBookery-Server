import { query, validationResult } from "express-validator";
import { RequestHandler } from "express";
import { ValidationException } from "../exceptions/ValidationException";

export const validateSortingParams = (
  validSortFields: Array<string>
): RequestHandler[] => [
  query("sortBy")
    .optional()
    .isString()
    .withMessage("Trường sortBy phải là một chuỗi.")
    .isIn(validSortFields)
    .withMessage(
      `Trường sortBy không hợp lệ. Phải thuộc một trong các trường: ${validSortFields.join(
        ", "
      )}`
    ),

  query("order")
    .optional()
    .isString()
    .withMessage("Trường order phải là một chuỗi.")
    .isIn(["asc", "desc"])
    .withMessage("Trường order không hợp lệ. Phải là 'asc' hoặc 'desc'"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new ValidationException(
        errors
          .array()
          .map((err) => err.msg)
          .join(", ")
      );
    }

    next();
  },
];
