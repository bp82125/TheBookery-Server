import { Request } from "express";
import { z } from "zod";

export const getWhereClause = (req: Request, schema: z.ZodObject<any>) => {
  const filters = req.query;
  const whereClause: { [key: string]: any } = { DaXoa: false };

  let hasInvalidFilter = false;

  Object.entries(filters).forEach(([key, value]) => {
    if (!["page", "limit", "sortBy", "order"].includes(key)) {
      const keys = key.split(".");
      let currentLevel = whereClause;

      try {
        schema.parse({ [key]: value });
        keys.forEach((fieldKey, index) => {
          if (index === keys.length - 1) {
            currentLevel[fieldKey] = value;
          } else {
            if (!currentLevel[fieldKey]) {
              currentLevel[fieldKey] = {};
            }
            currentLevel = currentLevel[fieldKey];
          }
        });
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
