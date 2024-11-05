import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const docGiaFields = z
  .object({
    ...defaultFields,
    MaDocGia: z.string().optional(),
    HoLot: z.string().optional(),
    Ten: z.string().optional(),
    NgaySinh: z.date().optional(),
    GioiTinh: z.enum(["MALE", "FEMALE", "UNKNOWN"]).optional(),
    DiaChi: z.string().optional(),
    DienThoai: z.string().optional(),
    "TaiKhoan.TenDangNhap": z.string().optional(),
  })
  .strict();
