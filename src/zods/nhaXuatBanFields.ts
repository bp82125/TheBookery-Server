import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const nhaXuatBanFields = z
  .object({
    ...defaultFields,
    MaNXB: z.string().optional(),
    TenNXB: z.string().optional(),
    DiaChi: z.string().optional(),
    "Sach._count": z.number().optional(),
  })
  .strict();
