import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const nhaXuatBanFields = z
  .object({
    ...defaultFields,
    TenNXB: z.string().optional(),
    DiaChi: z.string().optional(),
  })
  .strict();
