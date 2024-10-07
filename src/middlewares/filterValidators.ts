import { query, validationResult } from "express-validator";
import { RequestHandler } from "express";
import { ValidationException } from "../exceptions/ValidationException";

const generateFilterValidators = (fields: any[]) => {
  return fields.map((field) => {
    switch (field.type) {
      case "string":
        return query(field.name)
          .optional()
          .isString()
          .withMessage(`Trường '${field.name}' phải là một chuỗi.`);
      case "date":
        return query(field.name)
          .optional()
          .isISO8601()
          .withMessage(`Trường '${field.name}' phải là một ngày hợp lệ.`);
      case "number":
        return query(field.name)
          .optional()
          .isNumeric()
          .withMessage(`Trường '${field.name}' phải là một số hợp lệ.`);
      case "boolean":
        return query(field.name)
          .optional()
          .isBoolean()
          .withMessage(`Trường '${field.name}' phải là một giá trị boolean.`);
      case "enum":
        return query(field.name)
          .optional()
          .isIn(field.enumValues)
          .withMessage(
            `Trường '${
              field.name
            }' phải là một trong các giá trị: ${field.enumValues.join(", ")}`
          );
      default:
        return query(field.name).optional();
    }
  });
};

export const validateFilterParams = (fields: any[]): RequestHandler[] => [
  ...generateFilterValidators(fields),
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
