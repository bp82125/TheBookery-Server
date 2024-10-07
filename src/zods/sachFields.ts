import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const sachFields = z
  .object({
    ...defaultFields,
    TenSach: z.string().optional(),
    DonGia: z.number().optional(),
    SoQuyen: z.number().optional(),
    NamXuatBan: z.number().optional(),
    NguonGoc: z.string().optional(),
    HinhAnh: z.string().optional(),
  })
  .strict();
