import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const taiKhoanFields = z
  .object({
    ...defaultFields,
    MaTaiKhoan: z.string().optional(),
    TenDangNhap: z.string().optional(),
    LoaiTaiKhoan: z.enum(["USER", "EMPLOYEE", "ADMINISTRATOR"]).optional(),
    KichHoat: z.boolean().optional(),
  })
  .strict();
