import { Request } from "express";
import { z } from "zod";

const isValidObjectId = (value: string): boolean => {
  return typeof value === "string" && /^[0-9a-fA-F]{24}$/.test(value);
};

const isEnumField = (schema: z.ZodObject<any>, fieldName: string): boolean => {
  const field = schema.shape[fieldName];

  let unwrappedField = field;
  if (field instanceof z.ZodOptional || field instanceof z.ZodNullable) {
    unwrappedField = field._def.innerType;
  }

  return unwrappedField instanceof z.ZodEnum;
};

const handleObjectIdFilter = (
  key: string,
  value: string,
  currentLevel: any
) => {
  if (isValidObjectId(value)) {
    currentLevel[key] = {
      equals: value,
    };
  } else {
    throw new Error("Invalid Object ID");
  }
};

const handleCountFilter = (key: string, value: string, currentLevel: any) => {
  const countKey = key.replace(/_count$/, "");
  currentLevel[countKey] = {
    gte: Number(value),
  };
};

const handleDefaultFilter = (
  key: string,
  value: any,
  schema: z.ZodObject<any>,
  currentLevel: any
) => {
  schema.parse({ [key]: value });
  const keys = key.split(".");

  keys.forEach((fieldKey, index) => {
    if (index === keys.length - 1) {
      currentLevel[fieldKey] = {
        contains: value,
      };
    } else {
      if (!currentLevel[fieldKey]) {
        currentLevel[fieldKey] = {};
      }
      currentLevel = currentLevel[fieldKey];
    }
  });
};

const handleEnumFilter = (
  key: string,
  value: any,
  enumType: z.ZodEnum<any> | z.ZodNativeEnum<any>,
  currentLevel: any
) => {
  try {
    const enumValue = enumType.parse(value);
    currentLevel[key] = {
      equals: enumValue,
    };
  } catch (err) {
    throw new Error(`Invalid value for enum field ${key}`);
  }
};

export const getWhereClause = (req: Request, schema: z.ZodObject<any>) => {
  const filters = req.query;
  const whereClause: { [key: string]: any } = { DaXoa: false };

  let hasInvalidFilter = false;

  Object.entries(filters).forEach(([key, value]) => {
    if (!["page", "limit", "sortBy", "order"].includes(key)) {
      let currentLevel = whereClause;

      try {
        const fieldSchema = schema.shape[key];

        if (isEnumField(schema, key)) {
          handleEnumFilter(key, value, fieldSchema, currentLevel);
        } else if (key.startsWith("Ma")) {
          handleObjectIdFilter(key, value as string, currentLevel);
        } else if (key.endsWith("_count")) {
          handleCountFilter(key, value as string, currentLevel);
        } else {
          handleDefaultFilter(key, value, schema, currentLevel);
        }
      } catch (err) {
        hasInvalidFilter = true;
      }
    }
  });

  if (hasInvalidFilter) {
    return { createdAt: { lt: new Date("1970-01-01") } };
  }

  return whereClause;
};
