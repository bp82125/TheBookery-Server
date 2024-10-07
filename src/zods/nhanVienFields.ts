import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const nhanVienFields = z
  .object({
    ...defaultFields,
    HoTenNV: z.string().optional(),
    ChucVu: z.string().optional(),
    DiaChi: z.string().optional(),
    SoDienThoai: z.string().optional(),
    "TaiKhoan.TenDangNhap": z.string().optional(),
    "NhaXuatBan.TenNXB": z.string().optional(),
  })
  .strict();
