import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const sachFields = z
  .object({
    ...defaultFields,
    MaSach: z.string().optional(),
    TenSach: z.string().optional(),
    DonGia: z.number().optional(),
    SoQuyen: z.number().optional(),
    NamXuatBan: z.number().optional(),
    NguonGoc: z.string().optional(),
  })
  .strict();
