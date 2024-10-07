import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const taiKhoanFields = z
  .object({
    ...defaultFields,
    TenDangNhap: z.string().optional(),
    LoaiTaiKhoan: z.enum(["USER", "EMPLOYEE", "ADMINISTRATOR"]).optional(),
    "DocGia.Ten": z.string().optional(),
    "NhanVien.HoTenNV": z.string().optional(),
    KichHoat: z.boolean().optional(),
  })
  .strict();
