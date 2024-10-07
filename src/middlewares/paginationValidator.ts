import { query, validationResult } from "express-validator";
import { RequestHandler } from "express";
import { ValidationException } from "../exceptions/ValidationException";

export const validatePaginationParams = (): RequestHandler[] => [
  query("page")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Số trang phải là một số dương."),

  query("limit")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("Số lượng phải là một số dương."),

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
