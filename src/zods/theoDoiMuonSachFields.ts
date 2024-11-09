import { z } from "zod";
import { defaultFields } from "./defaultFields";

export const theoDoiMuonSachFields = z
  .object({
    ...defaultFields,
    MaTDMS: z.string().optional(),
    NgayYeuCau: z.date().optional(),
    NgayDuyet: z.date().optional(),
    NgayMuon: z.date().optional(),
    NgayTra: z.date().optional(),
    TrangThaiMuonSach: z
      .enum(["PENDING", "APPROVED", "REJECTED", "PICKED_UP", "RETURNED"])
      .optional(),
    "DocGia.Ten": z.string().optional(),
    "Sach.TenSach": z.string().optional(),
  })
  .strict();
