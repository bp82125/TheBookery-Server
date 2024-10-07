export const getFieldNames = (
  fields: { name: string; type: string; enumValues?: string[] }[]
): string[] => {
  return fields.map((field) => field.name);
};
