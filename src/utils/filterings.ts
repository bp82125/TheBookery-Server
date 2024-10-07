import { Request } from "express";

export const getWhereClause = (
  req: Request,
  validFields: Array<{ name: string }>
) => {
  const filters = req.query;

  const whereClause: { [key: string]: any } = {
    DaXoa: false,
  };

  let hasInvalidFilter = false;
  Object.entries(filters).forEach(([key, value]) => {
    if (!["pageNumber", "limitNumber", "sortBy", "order"].includes(key)) {
      const field = validFields.find((field) => field.name === key);

      if (field) {
        const keys = key.split(".");
        let currentLevel = whereClause;

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
      } else {
        hasInvalidFilter = true;
      }
    }
  });

  if (hasInvalidFilter) {
    return { createdAt: { lt: new Date("1970-01-01") } };
  }

  return whereClause;
};
