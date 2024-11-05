import { Request } from "express";
import { z } from "zod";

const isValidObjectId = (value: string): boolean => {
  return typeof value === "string" && /^[0-9a-fA-F]{24}$/.test(value);
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

export const getWhereClause = (req: Request, schema: z.ZodObject<any>) => {
  const filters = req.query;
  const whereClause: { [key: string]: any } = { DaXoa: false };

  let hasInvalidFilter = false;

  Object.entries(filters).forEach(([key, value]) => {
    if (!["page", "limit", "sortBy", "order"].includes(key)) {
      let currentLevel = whereClause;

      try {
        if (key.startsWith("Ma")) {
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
