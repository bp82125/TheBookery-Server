import { z } from "zod";

export const defaultFields = {
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
};
