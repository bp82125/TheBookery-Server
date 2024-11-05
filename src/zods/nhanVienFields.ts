import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const nhanVienFields = z
  .object({
    ...defaultFields,
    MSNV: z.string().optional(),
    HoTenNV: z.string().optional(),
    ChucVu: z.string().optional(),
    DiaChi: z.string().optional(),
    SoDienThoai: z.string().optional(),
    "TaiKhoan.TenDangNhap": z.string().optional(),
  })
  .strict();
