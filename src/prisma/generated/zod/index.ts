import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const DocGiaScalarFieldEnumSchema = z.enum(['MaDocGia','HoLot','Ten','HoTen','NgaySinh','GioiTinh','DiaChi','DienThoai','DaXoa','MaTaiKhoan','createdAt','updatedAt']);

export const SachScalarFieldEnumSchema = z.enum(['MaSach','TenSach','DonGia','SoQuyen','NamXuatBan','NguonGoc','HinhAnh','DaXoa','MaNXB','createdAt','updatedAt']);

export const NhaXuatBanScalarFieldEnumSchema = z.enum(['MaNXB','TenNXB','DiaChi','DaXoa','createdAt','updatedAt']);

export const TheoDoiMuonSachScalarFieldEnumSchema = z.enum(['MaTDMS','MaDocGia','MaSach','NgayYeuCau','NgayDuyet','NgayMuon','NgayTra','TrangThaiMuonSach','DaXoa','createdAt','updatedAt']);

export const NhanVienScalarFieldEnumSchema = z.enum(['MSNV','HoTenNV','ChucVu','DiaChi','SoDienThoai','DaXoa','MaTaiKhoan','createdAt','updatedAt']);

export const TaiKhoanScalarFieldEnumSchema = z.enum(['MaTaiKhoan','TenDangNhap','MatKhau','LoaiTaiKhoan','DaXoa','KichHoat','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const GioiTinhSchema = z.enum(['MALE','FEMALE','UNKNOWN']);

export type GioiTinhType = `${z.infer<typeof GioiTinhSchema>}`

export const LoaiTaiKhoanSchema = z.enum(['USER','EMPLOYEE','ADMINISTRATOR']);

export type LoaiTaiKhoanType = `${z.infer<typeof LoaiTaiKhoanSchema>}`

export const TrangThaiMuonSachSchema = z.enum(['PENDING','APPROVED','REJECTED','PICKED_UP','RETURNED']);

export type TrangThaiMuonSachType = `${z.infer<typeof TrangThaiMuonSachSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// DOC GIA SCHEMA
/////////////////////////////////////////

export const DocGiaSchema = z.object({
  GioiTinh: GioiTinhSchema,
  MaDocGia: z.string(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string(),
  NgaySinh: z.coerce.date(),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type DocGia = z.infer<typeof DocGiaSchema>

/////////////////////////////////////////
// SACH SCHEMA
/////////////////////////////////////////

export const SachSchema = z.object({
  MaSach: z.string(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().nullable(),
  HinhAnh: z.string().nullable(),
  DaXoa: z.boolean(),
  MaNXB: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Sach = z.infer<typeof SachSchema>

/////////////////////////////////////////
// NHA XUAT BAN SCHEMA
/////////////////////////////////////////

export const NhaXuatBanSchema = z.object({
  MaNXB: z.string(),
  TenNXB: z.string(),
  DiaChi: z.string(),
  DaXoa: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type NhaXuatBan = z.infer<typeof NhaXuatBanSchema>

/////////////////////////////////////////
// THEO DOI MUON SACH SCHEMA
/////////////////////////////////////////

export const TheoDoiMuonSachSchema = z.object({
  TrangThaiMuonSach: TrangThaiMuonSachSchema,
  MaTDMS: z.string(),
  MaDocGia: z.string(),
  MaSach: z.string(),
  NgayYeuCau: z.coerce.date(),
  NgayDuyet: z.coerce.date().nullable(),
  NgayMuon: z.coerce.date().nullable(),
  NgayTra: z.coerce.date().nullable(),
  DaXoa: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TheoDoiMuonSach = z.infer<typeof TheoDoiMuonSachSchema>

/////////////////////////////////////////
// NHAN VIEN SCHEMA
/////////////////////////////////////////

export const NhanVienSchema = z.object({
  MSNV: z.string(),
  HoTenNV: z.string(),
  ChucVu: z.string(),
  DiaChi: z.string(),
  SoDienThoai: z.string(),
  DaXoa: z.boolean(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type NhanVien = z.infer<typeof NhanVienSchema>

/////////////////////////////////////////
// TAI KHOAN SCHEMA
/////////////////////////////////////////

export const TaiKhoanSchema = z.object({
  LoaiTaiKhoan: LoaiTaiKhoanSchema,
  MaTaiKhoan: z.string(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  DaXoa: z.boolean(),
  KichHoat: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type TaiKhoan = z.infer<typeof TaiKhoanSchema>

/////////////////////////////////////////
// MONGODB TYPES
/////////////////////////////////////////

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// DOC GIA
//------------------------------------------------------

export const DocGiaIncludeSchema: z.ZodType<Prisma.DocGiaInclude> = z.object({
}).strict()

export const DocGiaArgsSchema: z.ZodType<Prisma.DocGiaDefaultArgs> = z.object({
  select: z.lazy(() => DocGiaSelectSchema).optional(),
  include: z.lazy(() => DocGiaIncludeSchema).optional(),
}).strict();

export const DocGiaCountOutputTypeArgsSchema: z.ZodType<Prisma.DocGiaCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DocGiaCountOutputTypeSelectSchema).nullish(),
}).strict();

export const DocGiaCountOutputTypeSelectSchema: z.ZodType<Prisma.DocGiaCountOutputTypeSelect> = z.object({
  TheoDoiMuonSach: z.boolean().optional(),
}).strict();

export const DocGiaSelectSchema: z.ZodType<Prisma.DocGiaSelect> = z.object({
  MaDocGia: z.boolean().optional(),
  HoLot: z.boolean().optional(),
  Ten: z.boolean().optional(),
  HoTen: z.boolean().optional(),
  NgaySinh: z.boolean().optional(),
  GioiTinh: z.boolean().optional(),
  DiaChi: z.boolean().optional(),
  DienThoai: z.boolean().optional(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  TheoDoiMuonSach: z.union([z.boolean(),z.lazy(() => TheoDoiMuonSachArgsSchema)]).optional(),
  TaiKhoan: z.union([z.boolean(),z.lazy(() => TaiKhoanArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => DocGiaCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SACH
//------------------------------------------------------

export const SachIncludeSchema: z.ZodType<Prisma.SachInclude> = z.object({
}).strict()

export const SachArgsSchema: z.ZodType<Prisma.SachDefaultArgs> = z.object({
  select: z.lazy(() => SachSelectSchema).optional(),
  include: z.lazy(() => SachIncludeSchema).optional(),
}).strict();

export const SachCountOutputTypeArgsSchema: z.ZodType<Prisma.SachCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => SachCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SachCountOutputTypeSelectSchema: z.ZodType<Prisma.SachCountOutputTypeSelect> = z.object({
  TheoDoiMuonSach: z.boolean().optional(),
}).strict();

export const SachSelectSchema: z.ZodType<Prisma.SachSelect> = z.object({
  MaSach: z.boolean().optional(),
  TenSach: z.boolean().optional(),
  DonGia: z.boolean().optional(),
  SoQuyen: z.boolean().optional(),
  NamXuatBan: z.boolean().optional(),
  NguonGoc: z.boolean().optional(),
  HinhAnh: z.boolean().optional(),
  DaXoa: z.boolean().optional(),
  MaNXB: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  TheoDoiMuonSach: z.union([z.boolean(),z.lazy(() => TheoDoiMuonSachArgsSchema)]).optional(),
  NhaXuatBan: z.union([z.boolean(),z.lazy(() => NhaXuatBanArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SachCountOutputTypeArgsSchema)]).optional(),
}).strict()

// NHA XUAT BAN
//------------------------------------------------------

export const NhaXuatBanIncludeSchema: z.ZodType<Prisma.NhaXuatBanInclude> = z.object({
}).strict()

export const NhaXuatBanArgsSchema: z.ZodType<Prisma.NhaXuatBanDefaultArgs> = z.object({
  select: z.lazy(() => NhaXuatBanSelectSchema).optional(),
  include: z.lazy(() => NhaXuatBanIncludeSchema).optional(),
}).strict();

export const NhaXuatBanCountOutputTypeArgsSchema: z.ZodType<Prisma.NhaXuatBanCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => NhaXuatBanCountOutputTypeSelectSchema).nullish(),
}).strict();

export const NhaXuatBanCountOutputTypeSelectSchema: z.ZodType<Prisma.NhaXuatBanCountOutputTypeSelect> = z.object({
  Sach: z.boolean().optional(),
}).strict();

export const NhaXuatBanSelectSchema: z.ZodType<Prisma.NhaXuatBanSelect> = z.object({
  MaNXB: z.boolean().optional(),
  TenNXB: z.boolean().optional(),
  DiaChi: z.boolean().optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  Sach: z.union([z.boolean(),z.lazy(() => SachArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NhaXuatBanCountOutputTypeArgsSchema)]).optional(),
}).strict()

// THEO DOI MUON SACH
//------------------------------------------------------

export const TheoDoiMuonSachIncludeSchema: z.ZodType<Prisma.TheoDoiMuonSachInclude> = z.object({
}).strict()

export const TheoDoiMuonSachArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachDefaultArgs> = z.object({
  select: z.lazy(() => TheoDoiMuonSachSelectSchema).optional(),
  include: z.lazy(() => TheoDoiMuonSachIncludeSchema).optional(),
}).strict();

export const TheoDoiMuonSachSelectSchema: z.ZodType<Prisma.TheoDoiMuonSachSelect> = z.object({
  MaTDMS: z.boolean().optional(),
  MaDocGia: z.boolean().optional(),
  MaSach: z.boolean().optional(),
  NgayYeuCau: z.boolean().optional(),
  NgayDuyet: z.boolean().optional(),
  NgayMuon: z.boolean().optional(),
  NgayTra: z.boolean().optional(),
  TrangThaiMuonSach: z.boolean().optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  DocGia: z.union([z.boolean(),z.lazy(() => DocGiaArgsSchema)]).optional(),
  Sach: z.union([z.boolean(),z.lazy(() => SachArgsSchema)]).optional(),
}).strict()

// NHAN VIEN
//------------------------------------------------------

export const NhanVienIncludeSchema: z.ZodType<Prisma.NhanVienInclude> = z.object({
}).strict()

export const NhanVienArgsSchema: z.ZodType<Prisma.NhanVienDefaultArgs> = z.object({
  select: z.lazy(() => NhanVienSelectSchema).optional(),
  include: z.lazy(() => NhanVienIncludeSchema).optional(),
}).strict();

export const NhanVienSelectSchema: z.ZodType<Prisma.NhanVienSelect> = z.object({
  MSNV: z.boolean().optional(),
  HoTenNV: z.boolean().optional(),
  ChucVu: z.boolean().optional(),
  DiaChi: z.boolean().optional(),
  SoDienThoai: z.boolean().optional(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  TaiKhoan: z.union([z.boolean(),z.lazy(() => TaiKhoanArgsSchema)]).optional(),
}).strict()

// TAI KHOAN
//------------------------------------------------------

export const TaiKhoanIncludeSchema: z.ZodType<Prisma.TaiKhoanInclude> = z.object({
}).strict()

export const TaiKhoanArgsSchema: z.ZodType<Prisma.TaiKhoanDefaultArgs> = z.object({
  select: z.lazy(() => TaiKhoanSelectSchema).optional(),
  include: z.lazy(() => TaiKhoanIncludeSchema).optional(),
}).strict();

export const TaiKhoanSelectSchema: z.ZodType<Prisma.TaiKhoanSelect> = z.object({
  MaTaiKhoan: z.boolean().optional(),
  TenDangNhap: z.boolean().optional(),
  MatKhau: z.boolean().optional(),
  LoaiTaiKhoan: z.boolean().optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  DocGia: z.union([z.boolean(),z.lazy(() => DocGiaArgsSchema)]).optional(),
  NhanVien: z.union([z.boolean(),z.lazy(() => NhanVienArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const DocGiaWhereInputSchema: z.ZodType<Prisma.DocGiaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => DocGiaWhereInputSchema),z.lazy(() => DocGiaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocGiaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocGiaWhereInputSchema),z.lazy(() => DocGiaWhereInputSchema).array() ]).optional(),
  MaDocGia: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HoLot: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Ten: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HoTen: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  NgaySinh: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  GioiTinh: z.union([ z.lazy(() => EnumGioiTinhFilterSchema),z.lazy(() => GioiTinhSchema) ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DienThoai: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  MaTaiKhoan: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachListRelationFilterSchema).optional(),
  TaiKhoan: z.union([ z.lazy(() => TaiKhoanNullableRelationFilterSchema),z.lazy(() => TaiKhoanWhereInputSchema) ]).optional().nullable(),
}).strict();

export const DocGiaOrderByWithRelationInputSchema: z.ZodType<Prisma.DocGiaOrderByWithRelationInput> = z.object({
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  HoLot: z.lazy(() => SortOrderSchema).optional(),
  Ten: z.lazy(() => SortOrderSchema).optional(),
  HoTen: z.lazy(() => SortOrderSchema).optional(),
  NgaySinh: z.lazy(() => SortOrderSchema).optional(),
  GioiTinh: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachOrderByRelationAggregateInputSchema).optional(),
  TaiKhoan: z.lazy(() => TaiKhoanOrderByWithRelationInputSchema).optional()
}).strict();

export const DocGiaWhereUniqueInputSchema: z.ZodType<Prisma.DocGiaWhereUniqueInput> = z.union([
  z.object({
    MaDocGia: z.string(),
    MaTaiKhoan: z.string()
  }),
  z.object({
    MaDocGia: z.string(),
  }),
  z.object({
    MaTaiKhoan: z.string(),
  }),
])
.and(z.object({
  MaDocGia: z.string().optional(),
  MaTaiKhoan: z.string().optional(),
  AND: z.union([ z.lazy(() => DocGiaWhereInputSchema),z.lazy(() => DocGiaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocGiaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocGiaWhereInputSchema),z.lazy(() => DocGiaWhereInputSchema).array() ]).optional(),
  HoLot: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Ten: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HoTen: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  NgaySinh: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  GioiTinh: z.union([ z.lazy(() => EnumGioiTinhFilterSchema),z.lazy(() => GioiTinhSchema) ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DienThoai: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachListRelationFilterSchema).optional(),
  TaiKhoan: z.union([ z.lazy(() => TaiKhoanNullableRelationFilterSchema),z.lazy(() => TaiKhoanWhereInputSchema) ]).optional().nullable(),
}).strict());

export const DocGiaOrderByWithAggregationInputSchema: z.ZodType<Prisma.DocGiaOrderByWithAggregationInput> = z.object({
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  HoLot: z.lazy(() => SortOrderSchema).optional(),
  Ten: z.lazy(() => SortOrderSchema).optional(),
  HoTen: z.lazy(() => SortOrderSchema).optional(),
  NgaySinh: z.lazy(() => SortOrderSchema).optional(),
  GioiTinh: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => DocGiaCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => DocGiaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => DocGiaMinOrderByAggregateInputSchema).optional()
}).strict();

export const DocGiaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.DocGiaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => DocGiaScalarWhereWithAggregatesInputSchema),z.lazy(() => DocGiaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => DocGiaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => DocGiaScalarWhereWithAggregatesInputSchema),z.lazy(() => DocGiaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  MaDocGia: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  HoLot: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  Ten: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  HoTen: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  NgaySinh: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  GioiTinh: z.union([ z.lazy(() => EnumGioiTinhWithAggregatesFilterSchema),z.lazy(() => GioiTinhSchema) ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DienThoai: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  MaTaiKhoan: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SachWhereInputSchema: z.ZodType<Prisma.SachWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SachWhereInputSchema),z.lazy(() => SachWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SachWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SachWhereInputSchema),z.lazy(() => SachWhereInputSchema).array() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  TenSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DonGia: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  SoQuyen: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  NamXuatBan: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  NguonGoc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HinhAnh: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  MaNXB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachListRelationFilterSchema).optional(),
  NhaXuatBan: z.union([ z.lazy(() => NhaXuatBanNullableRelationFilterSchema),z.lazy(() => NhaXuatBanWhereInputSchema) ]).optional().nullable(),
}).strict();

export const SachOrderByWithRelationInputSchema: z.ZodType<Prisma.SachOrderByWithRelationInput> = z.object({
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  TenSach: z.lazy(() => SortOrderSchema).optional(),
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional(),
  NguonGoc: z.lazy(() => SortOrderSchema).optional(),
  HinhAnh: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachOrderByRelationAggregateInputSchema).optional(),
  NhaXuatBan: z.lazy(() => NhaXuatBanOrderByWithRelationInputSchema).optional()
}).strict();

export const SachWhereUniqueInputSchema: z.ZodType<Prisma.SachWhereUniqueInput> = z.object({
  MaSach: z.string()
})
.and(z.object({
  MaSach: z.string().optional(),
  AND: z.union([ z.lazy(() => SachWhereInputSchema),z.lazy(() => SachWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SachWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SachWhereInputSchema),z.lazy(() => SachWhereInputSchema).array() ]).optional(),
  TenSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DonGia: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  SoQuyen: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  NamXuatBan: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  NguonGoc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HinhAnh: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  MaNXB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachListRelationFilterSchema).optional(),
  NhaXuatBan: z.union([ z.lazy(() => NhaXuatBanNullableRelationFilterSchema),z.lazy(() => NhaXuatBanWhereInputSchema) ]).optional().nullable(),
}).strict());

export const SachOrderByWithAggregationInputSchema: z.ZodType<Prisma.SachOrderByWithAggregationInput> = z.object({
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  TenSach: z.lazy(() => SortOrderSchema).optional(),
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional(),
  NguonGoc: z.lazy(() => SortOrderSchema).optional(),
  HinhAnh: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SachCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SachAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SachMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SachMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SachSumOrderByAggregateInputSchema).optional()
}).strict();

export const SachScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SachScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SachScalarWhereWithAggregatesInputSchema),z.lazy(() => SachScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SachScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SachScalarWhereWithAggregatesInputSchema),z.lazy(() => SachScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  TenSach: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DonGia: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  SoQuyen: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  NamXuatBan: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  NguonGoc: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  HinhAnh: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  DaXoa: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  MaNXB: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NhaXuatBanWhereInputSchema: z.ZodType<Prisma.NhaXuatBanWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NhaXuatBanWhereInputSchema),z.lazy(() => NhaXuatBanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NhaXuatBanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NhaXuatBanWhereInputSchema),z.lazy(() => NhaXuatBanWhereInputSchema).array() ]).optional(),
  MaNXB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  TenNXB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Sach: z.lazy(() => SachListRelationFilterSchema).optional()
}).strict();

export const NhaXuatBanOrderByWithRelationInputSchema: z.ZodType<Prisma.NhaXuatBanOrderByWithRelationInput> = z.object({
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  TenNXB: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  Sach: z.lazy(() => SachOrderByRelationAggregateInputSchema).optional()
}).strict();

export const NhaXuatBanWhereUniqueInputSchema: z.ZodType<Prisma.NhaXuatBanWhereUniqueInput> = z.object({
  MaNXB: z.string()
})
.and(z.object({
  MaNXB: z.string().optional(),
  AND: z.union([ z.lazy(() => NhaXuatBanWhereInputSchema),z.lazy(() => NhaXuatBanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NhaXuatBanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NhaXuatBanWhereInputSchema),z.lazy(() => NhaXuatBanWhereInputSchema).array() ]).optional(),
  TenNXB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Sach: z.lazy(() => SachListRelationFilterSchema).optional()
}).strict());

export const NhaXuatBanOrderByWithAggregationInputSchema: z.ZodType<Prisma.NhaXuatBanOrderByWithAggregationInput> = z.object({
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  TenNXB: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NhaXuatBanCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NhaXuatBanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NhaXuatBanMinOrderByAggregateInputSchema).optional()
}).strict();

export const NhaXuatBanScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NhaXuatBanScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NhaXuatBanScalarWhereWithAggregatesInputSchema),z.lazy(() => NhaXuatBanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NhaXuatBanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NhaXuatBanScalarWhereWithAggregatesInputSchema),z.lazy(() => NhaXuatBanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  MaNXB: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  TenNXB: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TheoDoiMuonSachWhereInputSchema: z.ZodType<Prisma.TheoDoiMuonSachWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TheoDoiMuonSachWhereInputSchema),z.lazy(() => TheoDoiMuonSachWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TheoDoiMuonSachWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TheoDoiMuonSachWhereInputSchema),z.lazy(() => TheoDoiMuonSachWhereInputSchema).array() ]).optional(),
  MaTDMS: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  MaDocGia: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  NgayYeuCau: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  NgayDuyet: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayMuon: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayTra: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => EnumTrangThaiMuonSachFilterSchema),z.lazy(() => TrangThaiMuonSachSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  DocGia: z.union([ z.lazy(() => DocGiaRelationFilterSchema),z.lazy(() => DocGiaWhereInputSchema) ]).optional(),
  Sach: z.union([ z.lazy(() => SachRelationFilterSchema),z.lazy(() => SachWhereInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachOrderByWithRelationInputSchema: z.ZodType<Prisma.TheoDoiMuonSachOrderByWithRelationInput> = z.object({
  MaTDMS: z.lazy(() => SortOrderSchema).optional(),
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  NgayYeuCau: z.lazy(() => SortOrderSchema).optional(),
  NgayDuyet: z.lazy(() => SortOrderSchema).optional(),
  NgayMuon: z.lazy(() => SortOrderSchema).optional(),
  NgayTra: z.lazy(() => SortOrderSchema).optional(),
  TrangThaiMuonSach: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  DocGia: z.lazy(() => DocGiaOrderByWithRelationInputSchema).optional(),
  Sach: z.lazy(() => SachOrderByWithRelationInputSchema).optional()
}).strict();

export const TheoDoiMuonSachWhereUniqueInputSchema: z.ZodType<Prisma.TheoDoiMuonSachWhereUniqueInput> = z.object({
  MaTDMS: z.string()
})
.and(z.object({
  MaTDMS: z.string().optional(),
  AND: z.union([ z.lazy(() => TheoDoiMuonSachWhereInputSchema),z.lazy(() => TheoDoiMuonSachWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TheoDoiMuonSachWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TheoDoiMuonSachWhereInputSchema),z.lazy(() => TheoDoiMuonSachWhereInputSchema).array() ]).optional(),
  MaDocGia: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  NgayYeuCau: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  NgayDuyet: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayMuon: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayTra: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => EnumTrangThaiMuonSachFilterSchema),z.lazy(() => TrangThaiMuonSachSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  DocGia: z.union([ z.lazy(() => DocGiaRelationFilterSchema),z.lazy(() => DocGiaWhereInputSchema) ]).optional(),
  Sach: z.union([ z.lazy(() => SachRelationFilterSchema),z.lazy(() => SachWhereInputSchema) ]).optional(),
}).strict());

export const TheoDoiMuonSachOrderByWithAggregationInputSchema: z.ZodType<Prisma.TheoDoiMuonSachOrderByWithAggregationInput> = z.object({
  MaTDMS: z.lazy(() => SortOrderSchema).optional(),
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  NgayYeuCau: z.lazy(() => SortOrderSchema).optional(),
  NgayDuyet: z.lazy(() => SortOrderSchema).optional(),
  NgayMuon: z.lazy(() => SortOrderSchema).optional(),
  NgayTra: z.lazy(() => SortOrderSchema).optional(),
  TrangThaiMuonSach: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TheoDoiMuonSachCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TheoDoiMuonSachMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TheoDoiMuonSachMinOrderByAggregateInputSchema).optional()
}).strict();

export const TheoDoiMuonSachScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TheoDoiMuonSachScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereWithAggregatesInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TheoDoiMuonSachScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereWithAggregatesInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  MaTDMS: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  MaDocGia: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  NgayYeuCau: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  NgayDuyet: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayMuon: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayTra: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => EnumTrangThaiMuonSachWithAggregatesFilterSchema),z.lazy(() => TrangThaiMuonSachSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const NhanVienWhereInputSchema: z.ZodType<Prisma.NhanVienWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NhanVienWhereInputSchema),z.lazy(() => NhanVienWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NhanVienWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NhanVienWhereInputSchema),z.lazy(() => NhanVienWhereInputSchema).array() ]).optional(),
  MSNV: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  HoTenNV: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ChucVu: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  SoDienThoai: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  MaTaiKhoan: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  TaiKhoan: z.union([ z.lazy(() => TaiKhoanNullableRelationFilterSchema),z.lazy(() => TaiKhoanWhereInputSchema) ]).optional().nullable(),
}).strict();

export const NhanVienOrderByWithRelationInputSchema: z.ZodType<Prisma.NhanVienOrderByWithRelationInput> = z.object({
  MSNV: z.lazy(() => SortOrderSchema).optional(),
  HoTenNV: z.lazy(() => SortOrderSchema).optional(),
  ChucVu: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  SoDienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  TaiKhoan: z.lazy(() => TaiKhoanOrderByWithRelationInputSchema).optional()
}).strict();

export const NhanVienWhereUniqueInputSchema: z.ZodType<Prisma.NhanVienWhereUniqueInput> = z.union([
  z.object({
    MSNV: z.string(),
    MaTaiKhoan: z.string()
  }),
  z.object({
    MSNV: z.string(),
  }),
  z.object({
    MaTaiKhoan: z.string(),
  }),
])
.and(z.object({
  MSNV: z.string().optional(),
  MaTaiKhoan: z.string().optional(),
  AND: z.union([ z.lazy(() => NhanVienWhereInputSchema),z.lazy(() => NhanVienWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NhanVienWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NhanVienWhereInputSchema),z.lazy(() => NhanVienWhereInputSchema).array() ]).optional(),
  HoTenNV: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ChucVu: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  SoDienThoai: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  TaiKhoan: z.union([ z.lazy(() => TaiKhoanNullableRelationFilterSchema),z.lazy(() => TaiKhoanWhereInputSchema) ]).optional().nullable(),
}).strict());

export const NhanVienOrderByWithAggregationInputSchema: z.ZodType<Prisma.NhanVienOrderByWithAggregationInput> = z.object({
  MSNV: z.lazy(() => SortOrderSchema).optional(),
  HoTenNV: z.lazy(() => SortOrderSchema).optional(),
  ChucVu: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  SoDienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NhanVienCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NhanVienMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NhanVienMinOrderByAggregateInputSchema).optional()
}).strict();

export const NhanVienScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NhanVienScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NhanVienScalarWhereWithAggregatesInputSchema),z.lazy(() => NhanVienScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NhanVienScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NhanVienScalarWhereWithAggregatesInputSchema),z.lazy(() => NhanVienScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  MSNV: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  HoTenNV: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ChucVu: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DiaChi: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  SoDienThoai: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  MaTaiKhoan: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TaiKhoanWhereInputSchema: z.ZodType<Prisma.TaiKhoanWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TaiKhoanWhereInputSchema),z.lazy(() => TaiKhoanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaiKhoanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaiKhoanWhereInputSchema),z.lazy(() => TaiKhoanWhereInputSchema).array() ]).optional(),
  MaTaiKhoan: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  TenDangNhap: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  MatKhau: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => EnumLoaiTaiKhoanFilterSchema),z.lazy(() => LoaiTaiKhoanSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  KichHoat: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  DocGia: z.union([ z.lazy(() => DocGiaNullableRelationFilterSchema),z.lazy(() => DocGiaWhereInputSchema) ]).optional().nullable(),
  NhanVien: z.union([ z.lazy(() => NhanVienNullableRelationFilterSchema),z.lazy(() => NhanVienWhereInputSchema) ]).optional().nullable(),
}).strict();

export const TaiKhoanOrderByWithRelationInputSchema: z.ZodType<Prisma.TaiKhoanOrderByWithRelationInput> = z.object({
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  TenDangNhap: z.lazy(() => SortOrderSchema).optional(),
  MatKhau: z.lazy(() => SortOrderSchema).optional(),
  LoaiTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  KichHoat: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  DocGia: z.lazy(() => DocGiaOrderByWithRelationInputSchema).optional(),
  NhanVien: z.lazy(() => NhanVienOrderByWithRelationInputSchema).optional()
}).strict();

export const TaiKhoanWhereUniqueInputSchema: z.ZodType<Prisma.TaiKhoanWhereUniqueInput> = z.union([
  z.object({
    MaTaiKhoan: z.string(),
    TenDangNhap: z.string()
  }),
  z.object({
    MaTaiKhoan: z.string(),
  }),
  z.object({
    TenDangNhap: z.string(),
  }),
])
.and(z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string().optional(),
  AND: z.union([ z.lazy(() => TaiKhoanWhereInputSchema),z.lazy(() => TaiKhoanWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaiKhoanWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaiKhoanWhereInputSchema),z.lazy(() => TaiKhoanWhereInputSchema).array() ]).optional(),
  MatKhau: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => EnumLoaiTaiKhoanFilterSchema),z.lazy(() => LoaiTaiKhoanSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  KichHoat: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  DocGia: z.union([ z.lazy(() => DocGiaNullableRelationFilterSchema),z.lazy(() => DocGiaWhereInputSchema) ]).optional().nullable(),
  NhanVien: z.union([ z.lazy(() => NhanVienNullableRelationFilterSchema),z.lazy(() => NhanVienWhereInputSchema) ]).optional().nullable(),
}).strict());

export const TaiKhoanOrderByWithAggregationInputSchema: z.ZodType<Prisma.TaiKhoanOrderByWithAggregationInput> = z.object({
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  TenDangNhap: z.lazy(() => SortOrderSchema).optional(),
  MatKhau: z.lazy(() => SortOrderSchema).optional(),
  LoaiTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  KichHoat: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TaiKhoanCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TaiKhoanMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TaiKhoanMinOrderByAggregateInputSchema).optional()
}).strict();

export const TaiKhoanScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TaiKhoanScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TaiKhoanScalarWhereWithAggregatesInputSchema),z.lazy(() => TaiKhoanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaiKhoanScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaiKhoanScalarWhereWithAggregatesInputSchema),z.lazy(() => TaiKhoanScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  MaTaiKhoan: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  TenDangNhap: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  MatKhau: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => EnumLoaiTaiKhoanWithAggregatesFilterSchema),z.lazy(() => LoaiTaiKhoanSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  KichHoat: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const DocGiaCreateInputSchema: z.ZodType<Prisma.DocGiaCreateInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachCreateNestedManyWithoutDocGiaInputSchema).optional(),
  TaiKhoan: z.lazy(() => TaiKhoanCreateNestedOneWithoutDocGiaInputSchema).optional()
}).strict();

export const DocGiaUncheckedCreateInputSchema: z.ZodType<Prisma.DocGiaUncheckedCreateInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedCreateNestedManyWithoutDocGiaInputSchema).optional()
}).strict();

export const DocGiaUpdateInputSchema: z.ZodType<Prisma.DocGiaUpdateInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUpdateManyWithoutDocGiaNestedInputSchema).optional(),
  TaiKhoan: z.lazy(() => TaiKhoanUpdateOneWithoutDocGiaNestedInputSchema).optional()
}).strict();

export const DocGiaUncheckedUpdateInputSchema: z.ZodType<Prisma.DocGiaUncheckedUpdateInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaTaiKhoan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaNestedInputSchema).optional()
}).strict();

export const DocGiaCreateManyInputSchema: z.ZodType<Prisma.DocGiaCreateManyInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DocGiaUpdateManyMutationInputSchema: z.ZodType<Prisma.DocGiaUpdateManyMutationInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const DocGiaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.DocGiaUncheckedUpdateManyInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaTaiKhoan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SachCreateInputSchema: z.ZodType<Prisma.SachCreateInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachCreateNestedManyWithoutSachInputSchema).optional(),
  NhaXuatBan: z.lazy(() => NhaXuatBanCreateNestedOneWithoutSachInputSchema).optional()
}).strict();

export const SachUncheckedCreateInputSchema: z.ZodType<Prisma.SachUncheckedCreateInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  MaNXB: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedCreateNestedManyWithoutSachInputSchema).optional()
}).strict();

export const SachUpdateInputSchema: z.ZodType<Prisma.SachUpdateInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUpdateManyWithoutSachNestedInputSchema).optional(),
  NhaXuatBan: z.lazy(() => NhaXuatBanUpdateOneWithoutSachNestedInputSchema).optional()
}).strict();

export const SachUncheckedUpdateInputSchema: z.ZodType<Prisma.SachUncheckedUpdateInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedUpdateManyWithoutSachNestedInputSchema).optional()
}).strict();

export const SachCreateManyInputSchema: z.ZodType<Prisma.SachCreateManyInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  MaNXB: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SachUpdateManyMutationInputSchema: z.ZodType<Prisma.SachUpdateManyMutationInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SachUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SachUncheckedUpdateManyInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhaXuatBanCreateInputSchema: z.ZodType<Prisma.NhaXuatBanCreateInput> = z.object({
  MaNXB: z.string().optional(),
  TenNXB: z.string(),
  DiaChi: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Sach: z.lazy(() => SachCreateNestedManyWithoutNhaXuatBanInputSchema).optional()
}).strict();

export const NhaXuatBanUncheckedCreateInputSchema: z.ZodType<Prisma.NhaXuatBanUncheckedCreateInput> = z.object({
  MaNXB: z.string().optional(),
  TenNXB: z.string(),
  DiaChi: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Sach: z.lazy(() => SachUncheckedCreateNestedManyWithoutNhaXuatBanInputSchema).optional()
}).strict();

export const NhaXuatBanUpdateInputSchema: z.ZodType<Prisma.NhaXuatBanUpdateInput> = z.object({
  TenNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Sach: z.lazy(() => SachUpdateManyWithoutNhaXuatBanNestedInputSchema).optional()
}).strict();

export const NhaXuatBanUncheckedUpdateInputSchema: z.ZodType<Prisma.NhaXuatBanUncheckedUpdateInput> = z.object({
  TenNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Sach: z.lazy(() => SachUncheckedUpdateManyWithoutNhaXuatBanNestedInputSchema).optional()
}).strict();

export const NhaXuatBanCreateManyInputSchema: z.ZodType<Prisma.NhaXuatBanCreateManyInput> = z.object({
  MaNXB: z.string().optional(),
  TenNXB: z.string(),
  DiaChi: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhaXuatBanUpdateManyMutationInputSchema: z.ZodType<Prisma.NhaXuatBanUpdateManyMutationInput> = z.object({
  TenNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhaXuatBanUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NhaXuatBanUncheckedUpdateManyInput> = z.object({
  TenNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachCreateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateInput> = z.object({
  MaTDMS: z.string().optional(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  DocGia: z.lazy(() => DocGiaCreateNestedOneWithoutTheoDoiMuonSachInputSchema),
  Sach: z.lazy(() => SachCreateNestedOneWithoutTheoDoiMuonSachInputSchema)
}).strict();

export const TheoDoiMuonSachUncheckedCreateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedCreateInput> = z.object({
  MaTDMS: z.string().optional(),
  MaDocGia: z.string(),
  MaSach: z.string(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TheoDoiMuonSachUpdateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateInput> = z.object({
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  DocGia: z.lazy(() => DocGiaUpdateOneRequiredWithoutTheoDoiMuonSachNestedInputSchema).optional(),
  Sach: z.lazy(() => SachUpdateOneRequiredWithoutTheoDoiMuonSachNestedInputSchema).optional()
}).strict();

export const TheoDoiMuonSachUncheckedUpdateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateInput> = z.object({
  MaDocGia: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MaSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachCreateManyInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateManyInput> = z.object({
  MaTDMS: z.string().optional(),
  MaDocGia: z.string(),
  MaSach: z.string(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TheoDoiMuonSachUpdateManyMutationInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateManyMutationInput> = z.object({
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateManyInput> = z.object({
  MaDocGia: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MaSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhanVienCreateInputSchema: z.ZodType<Prisma.NhanVienCreateInput> = z.object({
  MSNV: z.string().optional(),
  HoTenNV: z.string(),
  ChucVu: z.string(),
  DiaChi: z.string(),
  SoDienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TaiKhoan: z.lazy(() => TaiKhoanCreateNestedOneWithoutNhanVienInputSchema).optional()
}).strict();

export const NhanVienUncheckedCreateInputSchema: z.ZodType<Prisma.NhanVienUncheckedCreateInput> = z.object({
  MSNV: z.string().optional(),
  HoTenNV: z.string(),
  ChucVu: z.string(),
  DiaChi: z.string(),
  SoDienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhanVienUpdateInputSchema: z.ZodType<Prisma.NhanVienUpdateInput> = z.object({
  HoTenNV: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ChucVu: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  SoDienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TaiKhoan: z.lazy(() => TaiKhoanUpdateOneWithoutNhanVienNestedInputSchema).optional()
}).strict();

export const NhanVienUncheckedUpdateInputSchema: z.ZodType<Prisma.NhanVienUncheckedUpdateInput> = z.object({
  HoTenNV: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ChucVu: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  SoDienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaTaiKhoan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhanVienCreateManyInputSchema: z.ZodType<Prisma.NhanVienCreateManyInput> = z.object({
  MSNV: z.string().optional(),
  HoTenNV: z.string(),
  ChucVu: z.string(),
  DiaChi: z.string(),
  SoDienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhanVienUpdateManyMutationInputSchema: z.ZodType<Prisma.NhanVienUpdateManyMutationInput> = z.object({
  HoTenNV: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ChucVu: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  SoDienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhanVienUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NhanVienUncheckedUpdateManyInput> = z.object({
  HoTenNV: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ChucVu: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  SoDienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaTaiKhoan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaiKhoanCreateInputSchema: z.ZodType<Prisma.TaiKhoanCreateInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  DocGia: z.lazy(() => DocGiaCreateNestedOneWithoutTaiKhoanInputSchema).optional(),
  NhanVien: z.lazy(() => NhanVienCreateNestedOneWithoutTaiKhoanInputSchema).optional()
}).strict();

export const TaiKhoanUncheckedCreateInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedCreateInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  DocGia: z.lazy(() => DocGiaUncheckedCreateNestedOneWithoutTaiKhoanInputSchema).optional(),
  NhanVien: z.lazy(() => NhanVienUncheckedCreateNestedOneWithoutTaiKhoanInputSchema).optional()
}).strict();

export const TaiKhoanUpdateInputSchema: z.ZodType<Prisma.TaiKhoanUpdateInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  DocGia: z.lazy(() => DocGiaUpdateOneWithoutTaiKhoanNestedInputSchema).optional(),
  NhanVien: z.lazy(() => NhanVienUpdateOneWithoutTaiKhoanNestedInputSchema).optional()
}).strict();

export const TaiKhoanUncheckedUpdateInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedUpdateInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  DocGia: z.lazy(() => DocGiaUncheckedUpdateOneWithoutTaiKhoanNestedInputSchema).optional(),
  NhanVien: z.lazy(() => NhanVienUncheckedUpdateOneWithoutTaiKhoanNestedInputSchema).optional()
}).strict();

export const TaiKhoanCreateManyInputSchema: z.ZodType<Prisma.TaiKhoanCreateManyInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TaiKhoanUpdateManyMutationInputSchema: z.ZodType<Prisma.TaiKhoanUpdateManyMutationInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaiKhoanUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedUpdateManyInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const EnumGioiTinhFilterSchema: z.ZodType<Prisma.EnumGioiTinhFilter> = z.object({
  equals: z.lazy(() => GioiTinhSchema).optional(),
  in: z.lazy(() => GioiTinhSchema).array().optional(),
  notIn: z.lazy(() => GioiTinhSchema).array().optional(),
  not: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => NestedEnumGioiTinhFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachListRelationFilterSchema: z.ZodType<Prisma.TheoDoiMuonSachListRelationFilter> = z.object({
  every: z.lazy(() => TheoDoiMuonSachWhereInputSchema).optional(),
  some: z.lazy(() => TheoDoiMuonSachWhereInputSchema).optional(),
  none: z.lazy(() => TheoDoiMuonSachWhereInputSchema).optional()
}).strict();

export const TaiKhoanNullableRelationFilterSchema: z.ZodType<Prisma.TaiKhoanNullableRelationFilter> = z.object({
  is: z.lazy(() => TaiKhoanWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TaiKhoanWhereInputSchema).optional().nullable()
}).strict();

export const TheoDoiMuonSachOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DocGiaCountOrderByAggregateInputSchema: z.ZodType<Prisma.DocGiaCountOrderByAggregateInput> = z.object({
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  HoLot: z.lazy(() => SortOrderSchema).optional(),
  Ten: z.lazy(() => SortOrderSchema).optional(),
  HoTen: z.lazy(() => SortOrderSchema).optional(),
  NgaySinh: z.lazy(() => SortOrderSchema).optional(),
  GioiTinh: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DocGiaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.DocGiaMaxOrderByAggregateInput> = z.object({
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  HoLot: z.lazy(() => SortOrderSchema).optional(),
  Ten: z.lazy(() => SortOrderSchema).optional(),
  HoTen: z.lazy(() => SortOrderSchema).optional(),
  NgaySinh: z.lazy(() => SortOrderSchema).optional(),
  GioiTinh: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DocGiaMinOrderByAggregateInputSchema: z.ZodType<Prisma.DocGiaMinOrderByAggregateInput> = z.object({
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  HoLot: z.lazy(() => SortOrderSchema).optional(),
  Ten: z.lazy(() => SortOrderSchema).optional(),
  HoTen: z.lazy(() => SortOrderSchema).optional(),
  NgaySinh: z.lazy(() => SortOrderSchema).optional(),
  GioiTinh: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const EnumGioiTinhWithAggregatesFilterSchema: z.ZodType<Prisma.EnumGioiTinhWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GioiTinhSchema).optional(),
  in: z.lazy(() => GioiTinhSchema).array().optional(),
  notIn: z.lazy(() => GioiTinhSchema).array().optional(),
  not: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => NestedEnumGioiTinhWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGioiTinhFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGioiTinhFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NhaXuatBanNullableRelationFilterSchema: z.ZodType<Prisma.NhaXuatBanNullableRelationFilter> = z.object({
  is: z.lazy(() => NhaXuatBanWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => NhaXuatBanWhereInputSchema).optional().nullable()
}).strict();

export const SachCountOrderByAggregateInputSchema: z.ZodType<Prisma.SachCountOrderByAggregateInput> = z.object({
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  TenSach: z.lazy(() => SortOrderSchema).optional(),
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional(),
  NguonGoc: z.lazy(() => SortOrderSchema).optional(),
  HinhAnh: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SachAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SachAvgOrderByAggregateInput> = z.object({
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SachMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SachMaxOrderByAggregateInput> = z.object({
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  TenSach: z.lazy(() => SortOrderSchema).optional(),
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional(),
  NguonGoc: z.lazy(() => SortOrderSchema).optional(),
  HinhAnh: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SachMinOrderByAggregateInputSchema: z.ZodType<Prisma.SachMinOrderByAggregateInput> = z.object({
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  TenSach: z.lazy(() => SortOrderSchema).optional(),
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional(),
  NguonGoc: z.lazy(() => SortOrderSchema).optional(),
  HinhAnh: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SachSumOrderByAggregateInputSchema: z.ZodType<Prisma.SachSumOrderByAggregateInput> = z.object({
  DonGia: z.lazy(() => SortOrderSchema).optional(),
  SoQuyen: z.lazy(() => SortOrderSchema).optional(),
  NamXuatBan: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const SachListRelationFilterSchema: z.ZodType<Prisma.SachListRelationFilter> = z.object({
  every: z.lazy(() => SachWhereInputSchema).optional(),
  some: z.lazy(() => SachWhereInputSchema).optional(),
  none: z.lazy(() => SachWhereInputSchema).optional()
}).strict();

export const SachOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SachOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NhaXuatBanCountOrderByAggregateInputSchema: z.ZodType<Prisma.NhaXuatBanCountOrderByAggregateInput> = z.object({
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  TenNXB: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NhaXuatBanMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NhaXuatBanMaxOrderByAggregateInput> = z.object({
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  TenNXB: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NhaXuatBanMinOrderByAggregateInputSchema: z.ZodType<Prisma.NhaXuatBanMinOrderByAggregateInput> = z.object({
  MaNXB: z.lazy(() => SortOrderSchema).optional(),
  TenNXB: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EnumTrangThaiMuonSachFilterSchema: z.ZodType<Prisma.EnumTrangThaiMuonSachFilter> = z.object({
  equals: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  in: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  notIn: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  not: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => NestedEnumTrangThaiMuonSachFilterSchema) ]).optional(),
}).strict();

export const DocGiaRelationFilterSchema: z.ZodType<Prisma.DocGiaRelationFilter> = z.object({
  is: z.lazy(() => DocGiaWhereInputSchema).optional(),
  isNot: z.lazy(() => DocGiaWhereInputSchema).optional()
}).strict();

export const SachRelationFilterSchema: z.ZodType<Prisma.SachRelationFilter> = z.object({
  is: z.lazy(() => SachWhereInputSchema).optional(),
  isNot: z.lazy(() => SachWhereInputSchema).optional()
}).strict();

export const TheoDoiMuonSachCountOrderByAggregateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCountOrderByAggregateInput> = z.object({
  MaTDMS: z.lazy(() => SortOrderSchema).optional(),
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  NgayYeuCau: z.lazy(() => SortOrderSchema).optional(),
  NgayDuyet: z.lazy(() => SortOrderSchema).optional(),
  NgayMuon: z.lazy(() => SortOrderSchema).optional(),
  NgayTra: z.lazy(() => SortOrderSchema).optional(),
  TrangThaiMuonSach: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TheoDoiMuonSachMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachMaxOrderByAggregateInput> = z.object({
  MaTDMS: z.lazy(() => SortOrderSchema).optional(),
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  NgayYeuCau: z.lazy(() => SortOrderSchema).optional(),
  NgayDuyet: z.lazy(() => SortOrderSchema).optional(),
  NgayMuon: z.lazy(() => SortOrderSchema).optional(),
  NgayTra: z.lazy(() => SortOrderSchema).optional(),
  TrangThaiMuonSach: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TheoDoiMuonSachMinOrderByAggregateInputSchema: z.ZodType<Prisma.TheoDoiMuonSachMinOrderByAggregateInput> = z.object({
  MaTDMS: z.lazy(() => SortOrderSchema).optional(),
  MaDocGia: z.lazy(() => SortOrderSchema).optional(),
  MaSach: z.lazy(() => SortOrderSchema).optional(),
  NgayYeuCau: z.lazy(() => SortOrderSchema).optional(),
  NgayDuyet: z.lazy(() => SortOrderSchema).optional(),
  NgayMuon: z.lazy(() => SortOrderSchema).optional(),
  NgayTra: z.lazy(() => SortOrderSchema).optional(),
  TrangThaiMuonSach: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const EnumTrangThaiMuonSachWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTrangThaiMuonSachWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  in: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  notIn: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  not: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => NestedEnumTrangThaiMuonSachWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTrangThaiMuonSachFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTrangThaiMuonSachFilterSchema).optional()
}).strict();

export const NhanVienCountOrderByAggregateInputSchema: z.ZodType<Prisma.NhanVienCountOrderByAggregateInput> = z.object({
  MSNV: z.lazy(() => SortOrderSchema).optional(),
  HoTenNV: z.lazy(() => SortOrderSchema).optional(),
  ChucVu: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  SoDienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NhanVienMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NhanVienMaxOrderByAggregateInput> = z.object({
  MSNV: z.lazy(() => SortOrderSchema).optional(),
  HoTenNV: z.lazy(() => SortOrderSchema).optional(),
  ChucVu: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  SoDienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NhanVienMinOrderByAggregateInputSchema: z.ZodType<Prisma.NhanVienMinOrderByAggregateInput> = z.object({
  MSNV: z.lazy(() => SortOrderSchema).optional(),
  HoTenNV: z.lazy(() => SortOrderSchema).optional(),
  ChucVu: z.lazy(() => SortOrderSchema).optional(),
  DiaChi: z.lazy(() => SortOrderSchema).optional(),
  SoDienThoai: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumLoaiTaiKhoanFilterSchema: z.ZodType<Prisma.EnumLoaiTaiKhoanFilter> = z.object({
  equals: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  in: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  notIn: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  not: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => NestedEnumLoaiTaiKhoanFilterSchema) ]).optional(),
}).strict();

export const DocGiaNullableRelationFilterSchema: z.ZodType<Prisma.DocGiaNullableRelationFilter> = z.object({
  is: z.lazy(() => DocGiaWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => DocGiaWhereInputSchema).optional().nullable()
}).strict();

export const NhanVienNullableRelationFilterSchema: z.ZodType<Prisma.NhanVienNullableRelationFilter> = z.object({
  is: z.lazy(() => NhanVienWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => NhanVienWhereInputSchema).optional().nullable()
}).strict();

export const TaiKhoanCountOrderByAggregateInputSchema: z.ZodType<Prisma.TaiKhoanCountOrderByAggregateInput> = z.object({
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  TenDangNhap: z.lazy(() => SortOrderSchema).optional(),
  MatKhau: z.lazy(() => SortOrderSchema).optional(),
  LoaiTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  KichHoat: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaiKhoanMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TaiKhoanMaxOrderByAggregateInput> = z.object({
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  TenDangNhap: z.lazy(() => SortOrderSchema).optional(),
  MatKhau: z.lazy(() => SortOrderSchema).optional(),
  LoaiTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  KichHoat: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TaiKhoanMinOrderByAggregateInputSchema: z.ZodType<Prisma.TaiKhoanMinOrderByAggregateInput> = z.object({
  MaTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  TenDangNhap: z.lazy(() => SortOrderSchema).optional(),
  MatKhau: z.lazy(() => SortOrderSchema).optional(),
  LoaiTaiKhoan: z.lazy(() => SortOrderSchema).optional(),
  DaXoa: z.lazy(() => SortOrderSchema).optional(),
  KichHoat: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumLoaiTaiKhoanWithAggregatesFilterSchema: z.ZodType<Prisma.EnumLoaiTaiKhoanWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  in: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  notIn: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  not: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => NestedEnumLoaiTaiKhoanWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLoaiTaiKhoanFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLoaiTaiKhoanFilterSchema).optional()
}).strict();

export const TheoDoiMuonSachCreateNestedManyWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateNestedManyWithoutDocGiaInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManyDocGiaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TaiKhoanCreateNestedOneWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanCreateNestedOneWithoutDocGiaInput> = z.object({
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutDocGiaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaiKhoanCreateOrConnectWithoutDocGiaInputSchema).optional(),
  connect: z.lazy(() => TaiKhoanWhereUniqueInputSchema).optional()
}).strict();

export const TheoDoiMuonSachUncheckedCreateNestedManyWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedCreateNestedManyWithoutDocGiaInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManyDocGiaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const EnumGioiTinhFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumGioiTinhFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => GioiTinhSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const TheoDoiMuonSachUpdateManyWithoutDocGiaNestedInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateManyWithoutDocGiaNestedInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutDocGiaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManyDocGiaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutDocGiaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutDocGiaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TaiKhoanUpdateOneWithoutDocGiaNestedInputSchema: z.ZodType<Prisma.TaiKhoanUpdateOneWithoutDocGiaNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutDocGiaInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaiKhoanCreateOrConnectWithoutDocGiaInputSchema).optional(),
  upsert: z.lazy(() => TaiKhoanUpsertWithoutDocGiaInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TaiKhoanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TaiKhoanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaiKhoanUpdateToOneWithWhereWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUpdateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedUpdateWithoutDocGiaInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaNestedInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaNestedInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutDocGiaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManyDocGiaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutDocGiaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutDocGiaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TheoDoiMuonSachCreateNestedManyWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateNestedManyWithoutSachInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManySachInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NhaXuatBanCreateNestedOneWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanCreateNestedOneWithoutSachInput> = z.object({
  create: z.union([ z.lazy(() => NhaXuatBanCreateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedCreateWithoutSachInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NhaXuatBanCreateOrConnectWithoutSachInputSchema).optional(),
  connect: z.lazy(() => NhaXuatBanWhereUniqueInputSchema).optional()
}).strict();

export const TheoDoiMuonSachUncheckedCreateNestedManyWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedCreateNestedManyWithoutSachInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManySachInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const TheoDoiMuonSachUpdateManyWithoutSachNestedInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateManyWithoutSachNestedInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutSachInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManySachInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutSachInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutSachInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NhaXuatBanUpdateOneWithoutSachNestedInputSchema: z.ZodType<Prisma.NhaXuatBanUpdateOneWithoutSachNestedInput> = z.object({
  create: z.union([ z.lazy(() => NhaXuatBanCreateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedCreateWithoutSachInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NhaXuatBanCreateOrConnectWithoutSachInputSchema).optional(),
  upsert: z.lazy(() => NhaXuatBanUpsertWithoutSachInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NhaXuatBanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NhaXuatBanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NhaXuatBanUpdateToOneWithWhereWithoutSachInputSchema),z.lazy(() => NhaXuatBanUpdateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedUpdateWithoutSachInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachUncheckedUpdateManyWithoutSachNestedInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateManyWithoutSachNestedInput> = z.object({
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema).array(),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUpsertWithWhereUniqueWithoutSachInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TheoDoiMuonSachCreateManySachInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUpdateWithWhereUniqueWithoutSachInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUpdateManyWithWhereWithoutSachInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SachCreateNestedManyWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachCreateNestedManyWithoutNhaXuatBanInput> = z.object({
  create: z.union([ z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema).array(),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SachCreateManyNhaXuatBanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SachUncheckedCreateNestedManyWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUncheckedCreateNestedManyWithoutNhaXuatBanInput> = z.object({
  create: z.union([ z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema).array(),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SachCreateManyNhaXuatBanInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SachUpdateManyWithoutNhaXuatBanNestedInputSchema: z.ZodType<Prisma.SachUpdateManyWithoutNhaXuatBanNestedInput> = z.object({
  create: z.union([ z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema).array(),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SachUpsertWithWhereUniqueWithoutNhaXuatBanInputSchema),z.lazy(() => SachUpsertWithWhereUniqueWithoutNhaXuatBanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SachCreateManyNhaXuatBanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SachUpdateWithWhereUniqueWithoutNhaXuatBanInputSchema),z.lazy(() => SachUpdateWithWhereUniqueWithoutNhaXuatBanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SachUpdateManyWithWhereWithoutNhaXuatBanInputSchema),z.lazy(() => SachUpdateManyWithWhereWithoutNhaXuatBanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SachScalarWhereInputSchema),z.lazy(() => SachScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SachUncheckedUpdateManyWithoutNhaXuatBanNestedInputSchema: z.ZodType<Prisma.SachUncheckedUpdateManyWithoutNhaXuatBanNestedInput> = z.object({
  create: z.union([ z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema).array(),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema),z.lazy(() => SachCreateOrConnectWithoutNhaXuatBanInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SachUpsertWithWhereUniqueWithoutNhaXuatBanInputSchema),z.lazy(() => SachUpsertWithWhereUniqueWithoutNhaXuatBanInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SachCreateManyNhaXuatBanInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SachWhereUniqueInputSchema),z.lazy(() => SachWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SachUpdateWithWhereUniqueWithoutNhaXuatBanInputSchema),z.lazy(() => SachUpdateWithWhereUniqueWithoutNhaXuatBanInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SachUpdateManyWithWhereWithoutNhaXuatBanInputSchema),z.lazy(() => SachUpdateManyWithWhereWithoutNhaXuatBanInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SachScalarWhereInputSchema),z.lazy(() => SachScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const DocGiaCreateNestedOneWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaCreateNestedOneWithoutTheoDoiMuonSachInput> = z.object({
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocGiaCreateOrConnectWithoutTheoDoiMuonSachInputSchema).optional(),
  connect: z.lazy(() => DocGiaWhereUniqueInputSchema).optional()
}).strict();

export const SachCreateNestedOneWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachCreateNestedOneWithoutTheoDoiMuonSachInput> = z.object({
  create: z.union([ z.lazy(() => SachCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SachCreateOrConnectWithoutTheoDoiMuonSachInputSchema).optional(),
  connect: z.lazy(() => SachWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTrangThaiMuonSachFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TrangThaiMuonSachSchema).optional()
}).strict();

export const DocGiaUpdateOneRequiredWithoutTheoDoiMuonSachNestedInputSchema: z.ZodType<Prisma.DocGiaUpdateOneRequiredWithoutTheoDoiMuonSachNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocGiaCreateOrConnectWithoutTheoDoiMuonSachInputSchema).optional(),
  upsert: z.lazy(() => DocGiaUpsertWithoutTheoDoiMuonSachInputSchema).optional(),
  connect: z.lazy(() => DocGiaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocGiaUpdateToOneWithWhereWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUpdateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTheoDoiMuonSachInputSchema) ]).optional(),
}).strict();

export const SachUpdateOneRequiredWithoutTheoDoiMuonSachNestedInputSchema: z.ZodType<Prisma.SachUpdateOneRequiredWithoutTheoDoiMuonSachNestedInput> = z.object({
  create: z.union([ z.lazy(() => SachCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SachCreateOrConnectWithoutTheoDoiMuonSachInputSchema).optional(),
  upsert: z.lazy(() => SachUpsertWithoutTheoDoiMuonSachInputSchema).optional(),
  connect: z.lazy(() => SachWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SachUpdateToOneWithWhereWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUpdateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedUpdateWithoutTheoDoiMuonSachInputSchema) ]).optional(),
}).strict();

export const TaiKhoanCreateNestedOneWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanCreateNestedOneWithoutNhanVienInput> = z.object({
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutNhanVienInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaiKhoanCreateOrConnectWithoutNhanVienInputSchema).optional(),
  connect: z.lazy(() => TaiKhoanWhereUniqueInputSchema).optional()
}).strict();

export const TaiKhoanUpdateOneWithoutNhanVienNestedInputSchema: z.ZodType<Prisma.TaiKhoanUpdateOneWithoutNhanVienNestedInput> = z.object({
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutNhanVienInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TaiKhoanCreateOrConnectWithoutNhanVienInputSchema).optional(),
  upsert: z.lazy(() => TaiKhoanUpsertWithoutNhanVienInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TaiKhoanWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TaiKhoanWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TaiKhoanUpdateToOneWithWhereWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUpdateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedUpdateWithoutNhanVienInputSchema) ]).optional(),
}).strict();

export const DocGiaCreateNestedOneWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaCreateNestedOneWithoutTaiKhoanInput> = z.object({
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocGiaCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  connect: z.lazy(() => DocGiaWhereUniqueInputSchema).optional()
}).strict();

export const NhanVienCreateNestedOneWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienCreateNestedOneWithoutTaiKhoanInput> = z.object({
  create: z.union([ z.lazy(() => NhanVienCreateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NhanVienCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  connect: z.lazy(() => NhanVienWhereUniqueInputSchema).optional()
}).strict();

export const DocGiaUncheckedCreateNestedOneWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaUncheckedCreateNestedOneWithoutTaiKhoanInput> = z.object({
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocGiaCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  connect: z.lazy(() => DocGiaWhereUniqueInputSchema).optional()
}).strict();

export const NhanVienUncheckedCreateNestedOneWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienUncheckedCreateNestedOneWithoutTaiKhoanInput> = z.object({
  create: z.union([ z.lazy(() => NhanVienCreateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NhanVienCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  connect: z.lazy(() => NhanVienWhereUniqueInputSchema).optional()
}).strict();

export const EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLoaiTaiKhoanFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LoaiTaiKhoanSchema).optional()
}).strict();

export const DocGiaUpdateOneWithoutTaiKhoanNestedInputSchema: z.ZodType<Prisma.DocGiaUpdateOneWithoutTaiKhoanNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocGiaCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  upsert: z.lazy(() => DocGiaUpsertWithoutTaiKhoanInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DocGiaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DocGiaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DocGiaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocGiaUpdateToOneWithWhereWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUpdateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTaiKhoanInputSchema) ]).optional(),
}).strict();

export const NhanVienUpdateOneWithoutTaiKhoanNestedInputSchema: z.ZodType<Prisma.NhanVienUpdateOneWithoutTaiKhoanNestedInput> = z.object({
  create: z.union([ z.lazy(() => NhanVienCreateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NhanVienCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  upsert: z.lazy(() => NhanVienUpsertWithoutTaiKhoanInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => NhanVienWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NhanVienWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NhanVienWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NhanVienUpdateToOneWithWhereWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUpdateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedUpdateWithoutTaiKhoanInputSchema) ]).optional(),
}).strict();

export const DocGiaUncheckedUpdateOneWithoutTaiKhoanNestedInputSchema: z.ZodType<Prisma.DocGiaUncheckedUpdateOneWithoutTaiKhoanNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocGiaCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  upsert: z.lazy(() => DocGiaUpsertWithoutTaiKhoanInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => DocGiaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => DocGiaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => DocGiaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocGiaUpdateToOneWithWhereWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUpdateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTaiKhoanInputSchema) ]).optional(),
}).strict();

export const NhanVienUncheckedUpdateOneWithoutTaiKhoanNestedInputSchema: z.ZodType<Prisma.NhanVienUncheckedUpdateOneWithoutTaiKhoanNestedInput> = z.object({
  create: z.union([ z.lazy(() => NhanVienCreateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedCreateWithoutTaiKhoanInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NhanVienCreateOrConnectWithoutTaiKhoanInputSchema).optional(),
  upsert: z.lazy(() => NhanVienUpsertWithoutTaiKhoanInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => NhanVienWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NhanVienWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NhanVienWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NhanVienUpdateToOneWithWhereWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUpdateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedUpdateWithoutTaiKhoanInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumGioiTinhFilterSchema: z.ZodType<Prisma.NestedEnumGioiTinhFilter> = z.object({
  equals: z.lazy(() => GioiTinhSchema).optional(),
  in: z.lazy(() => GioiTinhSchema).array().optional(),
  notIn: z.lazy(() => GioiTinhSchema).array().optional(),
  not: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => NestedEnumGioiTinhFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedEnumGioiTinhWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumGioiTinhWithAggregatesFilter> = z.object({
  equals: z.lazy(() => GioiTinhSchema).optional(),
  in: z.lazy(() => GioiTinhSchema).array().optional(),
  notIn: z.lazy(() => GioiTinhSchema).array().optional(),
  not: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => NestedEnumGioiTinhWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumGioiTinhFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumGioiTinhFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumTrangThaiMuonSachFilterSchema: z.ZodType<Prisma.NestedEnumTrangThaiMuonSachFilter> = z.object({
  equals: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  in: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  notIn: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  not: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => NestedEnumTrangThaiMuonSachFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedEnumTrangThaiMuonSachWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTrangThaiMuonSachWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  in: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  notIn: z.lazy(() => TrangThaiMuonSachSchema).array().optional(),
  not: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => NestedEnumTrangThaiMuonSachWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTrangThaiMuonSachFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTrangThaiMuonSachFilterSchema).optional()
}).strict();

export const NestedEnumLoaiTaiKhoanFilterSchema: z.ZodType<Prisma.NestedEnumLoaiTaiKhoanFilter> = z.object({
  equals: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  in: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  notIn: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  not: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => NestedEnumLoaiTaiKhoanFilterSchema) ]).optional(),
}).strict();

export const NestedEnumLoaiTaiKhoanWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumLoaiTaiKhoanWithAggregatesFilter> = z.object({
  equals: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  in: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  notIn: z.lazy(() => LoaiTaiKhoanSchema).array().optional(),
  not: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => NestedEnumLoaiTaiKhoanWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumLoaiTaiKhoanFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumLoaiTaiKhoanFilterSchema).optional()
}).strict();

export const TheoDoiMuonSachCreateWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateWithoutDocGiaInput> = z.object({
  MaTDMS: z.string().optional(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Sach: z.lazy(() => SachCreateNestedOneWithoutTheoDoiMuonSachInputSchema)
}).strict();

export const TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedCreateWithoutDocGiaInput> = z.object({
  MaTDMS: z.string().optional(),
  MaSach: z.string(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TheoDoiMuonSachCreateOrConnectWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateOrConnectWithoutDocGiaInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema) ]),
}).strict();

export const TheoDoiMuonSachCreateManyDocGiaInputEnvelopeSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateManyDocGiaInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TheoDoiMuonSachCreateManyDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachCreateManyDocGiaInputSchema).array() ]),
}).strict();

export const TaiKhoanCreateWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanCreateWithoutDocGiaInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  NhanVien: z.lazy(() => NhanVienCreateNestedOneWithoutTaiKhoanInputSchema).optional()
}).strict();

export const TaiKhoanUncheckedCreateWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedCreateWithoutDocGiaInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  NhanVien: z.lazy(() => NhanVienUncheckedCreateNestedOneWithoutTaiKhoanInputSchema).optional()
}).strict();

export const TaiKhoanCreateOrConnectWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanCreateOrConnectWithoutDocGiaInput> = z.object({
  where: z.lazy(() => TaiKhoanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutDocGiaInputSchema) ]),
}).strict();

export const TheoDoiMuonSachUpsertWithWhereUniqueWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpsertWithWhereUniqueWithoutDocGiaInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedUpdateWithoutDocGiaInputSchema) ]),
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutDocGiaInputSchema) ]),
}).strict();

export const TheoDoiMuonSachUpdateWithWhereUniqueWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateWithWhereUniqueWithoutDocGiaInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithoutDocGiaInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedUpdateWithoutDocGiaInputSchema) ]),
}).strict();

export const TheoDoiMuonSachUpdateManyWithWhereWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateManyWithWhereWithoutDocGiaInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TheoDoiMuonSachUpdateManyMutationInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaInputSchema) ]),
}).strict();

export const TheoDoiMuonSachScalarWhereInputSchema: z.ZodType<Prisma.TheoDoiMuonSachScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema).array() ]).optional(),
  MaTDMS: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  MaDocGia: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  NgayYeuCau: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  NgayDuyet: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayMuon: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  NgayTra: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => EnumTrangThaiMuonSachFilterSchema),z.lazy(() => TrangThaiMuonSachSchema) ]).optional(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TaiKhoanUpsertWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanUpsertWithoutDocGiaInput> = z.object({
  update: z.union([ z.lazy(() => TaiKhoanUpdateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedUpdateWithoutDocGiaInputSchema) ]),
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutDocGiaInputSchema) ]),
  where: z.lazy(() => TaiKhoanWhereInputSchema).optional()
}).strict();

export const TaiKhoanUpdateToOneWithWhereWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanUpdateToOneWithWhereWithoutDocGiaInput> = z.object({
  where: z.lazy(() => TaiKhoanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaiKhoanUpdateWithoutDocGiaInputSchema),z.lazy(() => TaiKhoanUncheckedUpdateWithoutDocGiaInputSchema) ]),
}).strict();

export const TaiKhoanUpdateWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanUpdateWithoutDocGiaInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NhanVien: z.lazy(() => NhanVienUpdateOneWithoutTaiKhoanNestedInputSchema).optional()
}).strict();

export const TaiKhoanUncheckedUpdateWithoutDocGiaInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedUpdateWithoutDocGiaInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NhanVien: z.lazy(() => NhanVienUncheckedUpdateOneWithoutTaiKhoanNestedInputSchema).optional()
}).strict();

export const TheoDoiMuonSachCreateWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateWithoutSachInput> = z.object({
  MaTDMS: z.string().optional(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  DocGia: z.lazy(() => DocGiaCreateNestedOneWithoutTheoDoiMuonSachInputSchema)
}).strict();

export const TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedCreateWithoutSachInput> = z.object({
  MaTDMS: z.string().optional(),
  MaDocGia: z.string(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TheoDoiMuonSachCreateOrConnectWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateOrConnectWithoutSachInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema) ]),
}).strict();

export const TheoDoiMuonSachCreateManySachInputEnvelopeSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateManySachInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TheoDoiMuonSachCreateManySachInputSchema),z.lazy(() => TheoDoiMuonSachCreateManySachInputSchema).array() ]),
}).strict();

export const NhaXuatBanCreateWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanCreateWithoutSachInput> = z.object({
  MaNXB: z.string().optional(),
  TenNXB: z.string(),
  DiaChi: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhaXuatBanUncheckedCreateWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanUncheckedCreateWithoutSachInput> = z.object({
  MaNXB: z.string().optional(),
  TenNXB: z.string(),
  DiaChi: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhaXuatBanCreateOrConnectWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanCreateOrConnectWithoutSachInput> = z.object({
  where: z.lazy(() => NhaXuatBanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NhaXuatBanCreateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedCreateWithoutSachInputSchema) ]),
}).strict();

export const TheoDoiMuonSachUpsertWithWhereUniqueWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpsertWithWhereUniqueWithoutSachInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedUpdateWithoutSachInputSchema) ]),
  create: z.union([ z.lazy(() => TheoDoiMuonSachCreateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedCreateWithoutSachInputSchema) ]),
}).strict();

export const TheoDoiMuonSachUpdateWithWhereUniqueWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateWithWhereUniqueWithoutSachInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TheoDoiMuonSachUpdateWithoutSachInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedUpdateWithoutSachInputSchema) ]),
}).strict();

export const TheoDoiMuonSachUpdateManyWithWhereWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateManyWithWhereWithoutSachInput> = z.object({
  where: z.lazy(() => TheoDoiMuonSachScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TheoDoiMuonSachUpdateManyMutationInputSchema),z.lazy(() => TheoDoiMuonSachUncheckedUpdateManyWithoutSachInputSchema) ]),
}).strict();

export const NhaXuatBanUpsertWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanUpsertWithoutSachInput> = z.object({
  update: z.union([ z.lazy(() => NhaXuatBanUpdateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedUpdateWithoutSachInputSchema) ]),
  create: z.union([ z.lazy(() => NhaXuatBanCreateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedCreateWithoutSachInputSchema) ]),
  where: z.lazy(() => NhaXuatBanWhereInputSchema).optional()
}).strict();

export const NhaXuatBanUpdateToOneWithWhereWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanUpdateToOneWithWhereWithoutSachInput> = z.object({
  where: z.lazy(() => NhaXuatBanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NhaXuatBanUpdateWithoutSachInputSchema),z.lazy(() => NhaXuatBanUncheckedUpdateWithoutSachInputSchema) ]),
}).strict();

export const NhaXuatBanUpdateWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanUpdateWithoutSachInput> = z.object({
  TenNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhaXuatBanUncheckedUpdateWithoutSachInputSchema: z.ZodType<Prisma.NhaXuatBanUncheckedUpdateWithoutSachInput> = z.object({
  TenNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SachCreateWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachCreateWithoutNhaXuatBanInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachCreateNestedManyWithoutSachInputSchema).optional()
}).strict();

export const SachUncheckedCreateWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUncheckedCreateWithoutNhaXuatBanInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedCreateNestedManyWithoutSachInputSchema).optional()
}).strict();

export const SachCreateOrConnectWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachCreateOrConnectWithoutNhaXuatBanInput> = z.object({
  where: z.lazy(() => SachWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema) ]),
}).strict();

export const SachCreateManyNhaXuatBanInputEnvelopeSchema: z.ZodType<Prisma.SachCreateManyNhaXuatBanInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SachCreateManyNhaXuatBanInputSchema),z.lazy(() => SachCreateManyNhaXuatBanInputSchema).array() ]),
}).strict();

export const SachUpsertWithWhereUniqueWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUpsertWithWhereUniqueWithoutNhaXuatBanInput> = z.object({
  where: z.lazy(() => SachWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SachUpdateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedUpdateWithoutNhaXuatBanInputSchema) ]),
  create: z.union([ z.lazy(() => SachCreateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedCreateWithoutNhaXuatBanInputSchema) ]),
}).strict();

export const SachUpdateWithWhereUniqueWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUpdateWithWhereUniqueWithoutNhaXuatBanInput> = z.object({
  where: z.lazy(() => SachWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SachUpdateWithoutNhaXuatBanInputSchema),z.lazy(() => SachUncheckedUpdateWithoutNhaXuatBanInputSchema) ]),
}).strict();

export const SachUpdateManyWithWhereWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUpdateManyWithWhereWithoutNhaXuatBanInput> = z.object({
  where: z.lazy(() => SachScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SachUpdateManyMutationInputSchema),z.lazy(() => SachUncheckedUpdateManyWithoutNhaXuatBanInputSchema) ]),
}).strict();

export const SachScalarWhereInputSchema: z.ZodType<Prisma.SachScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SachScalarWhereInputSchema),z.lazy(() => SachScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SachScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SachScalarWhereInputSchema),z.lazy(() => SachScalarWhereInputSchema).array() ]).optional(),
  MaSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  TenSach: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  DonGia: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  SoQuyen: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  NamXuatBan: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  NguonGoc: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  HinhAnh: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  DaXoa: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  MaNXB: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const DocGiaCreateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaCreateWithoutTheoDoiMuonSachInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TaiKhoan: z.lazy(() => TaiKhoanCreateNestedOneWithoutDocGiaInputSchema).optional()
}).strict();

export const DocGiaUncheckedCreateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaUncheckedCreateWithoutTheoDoiMuonSachInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  MaTaiKhoan: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const DocGiaCreateOrConnectWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaCreateOrConnectWithoutTheoDoiMuonSachInput> = z.object({
  where: z.lazy(() => DocGiaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]),
}).strict();

export const SachCreateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachCreateWithoutTheoDoiMuonSachInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  NhaXuatBan: z.lazy(() => NhaXuatBanCreateNestedOneWithoutSachInputSchema).optional()
}).strict();

export const SachUncheckedCreateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachUncheckedCreateWithoutTheoDoiMuonSachInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  MaNXB: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SachCreateOrConnectWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachCreateOrConnectWithoutTheoDoiMuonSachInput> = z.object({
  where: z.lazy(() => SachWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SachCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]),
}).strict();

export const DocGiaUpsertWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaUpsertWithoutTheoDoiMuonSachInput> = z.object({
  update: z.union([ z.lazy(() => DocGiaUpdateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTheoDoiMuonSachInputSchema) ]),
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]),
  where: z.lazy(() => DocGiaWhereInputSchema).optional()
}).strict();

export const DocGiaUpdateToOneWithWhereWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaUpdateToOneWithWhereWithoutTheoDoiMuonSachInput> = z.object({
  where: z.lazy(() => DocGiaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocGiaUpdateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTheoDoiMuonSachInputSchema) ]),
}).strict();

export const DocGiaUpdateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaUpdateWithoutTheoDoiMuonSachInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TaiKhoan: z.lazy(() => TaiKhoanUpdateOneWithoutDocGiaNestedInputSchema).optional()
}).strict();

export const DocGiaUncheckedUpdateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.DocGiaUncheckedUpdateWithoutTheoDoiMuonSachInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaTaiKhoan: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SachUpsertWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachUpsertWithoutTheoDoiMuonSachInput> = z.object({
  update: z.union([ z.lazy(() => SachUpdateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedUpdateWithoutTheoDoiMuonSachInputSchema) ]),
  create: z.union([ z.lazy(() => SachCreateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedCreateWithoutTheoDoiMuonSachInputSchema) ]),
  where: z.lazy(() => SachWhereInputSchema).optional()
}).strict();

export const SachUpdateToOneWithWhereWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachUpdateToOneWithWhereWithoutTheoDoiMuonSachInput> = z.object({
  where: z.lazy(() => SachWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SachUpdateWithoutTheoDoiMuonSachInputSchema),z.lazy(() => SachUncheckedUpdateWithoutTheoDoiMuonSachInputSchema) ]),
}).strict();

export const SachUpdateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachUpdateWithoutTheoDoiMuonSachInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NhaXuatBan: z.lazy(() => NhaXuatBanUpdateOneWithoutSachNestedInputSchema).optional()
}).strict();

export const SachUncheckedUpdateWithoutTheoDoiMuonSachInputSchema: z.ZodType<Prisma.SachUncheckedUpdateWithoutTheoDoiMuonSachInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  MaNXB: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TaiKhoanCreateWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanCreateWithoutNhanVienInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  DocGia: z.lazy(() => DocGiaCreateNestedOneWithoutTaiKhoanInputSchema).optional()
}).strict();

export const TaiKhoanUncheckedCreateWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedCreateWithoutNhanVienInput> = z.object({
  MaTaiKhoan: z.string().optional(),
  TenDangNhap: z.string(),
  MatKhau: z.string(),
  LoaiTaiKhoan: z.lazy(() => LoaiTaiKhoanSchema).optional(),
  DaXoa: z.boolean().optional(),
  KichHoat: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  DocGia: z.lazy(() => DocGiaUncheckedCreateNestedOneWithoutTaiKhoanInputSchema).optional()
}).strict();

export const TaiKhoanCreateOrConnectWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanCreateOrConnectWithoutNhanVienInput> = z.object({
  where: z.lazy(() => TaiKhoanWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutNhanVienInputSchema) ]),
}).strict();

export const TaiKhoanUpsertWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanUpsertWithoutNhanVienInput> = z.object({
  update: z.union([ z.lazy(() => TaiKhoanUpdateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedUpdateWithoutNhanVienInputSchema) ]),
  create: z.union([ z.lazy(() => TaiKhoanCreateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedCreateWithoutNhanVienInputSchema) ]),
  where: z.lazy(() => TaiKhoanWhereInputSchema).optional()
}).strict();

export const TaiKhoanUpdateToOneWithWhereWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanUpdateToOneWithWhereWithoutNhanVienInput> = z.object({
  where: z.lazy(() => TaiKhoanWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TaiKhoanUpdateWithoutNhanVienInputSchema),z.lazy(() => TaiKhoanUncheckedUpdateWithoutNhanVienInputSchema) ]),
}).strict();

export const TaiKhoanUpdateWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanUpdateWithoutNhanVienInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  DocGia: z.lazy(() => DocGiaUpdateOneWithoutTaiKhoanNestedInputSchema).optional()
}).strict();

export const TaiKhoanUncheckedUpdateWithoutNhanVienInputSchema: z.ZodType<Prisma.TaiKhoanUncheckedUpdateWithoutNhanVienInput> = z.object({
  TenDangNhap: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MatKhau: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  LoaiTaiKhoan: z.union([ z.lazy(() => LoaiTaiKhoanSchema),z.lazy(() => EnumLoaiTaiKhoanFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  KichHoat: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  DocGia: z.lazy(() => DocGiaUncheckedUpdateOneWithoutTaiKhoanNestedInputSchema).optional()
}).strict();

export const DocGiaCreateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaCreateWithoutTaiKhoanInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachCreateNestedManyWithoutDocGiaInputSchema).optional()
}).strict();

export const DocGiaUncheckedCreateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaUncheckedCreateWithoutTaiKhoanInput> = z.object({
  MaDocGia: z.string().optional(),
  HoLot: z.string(),
  Ten: z.string(),
  HoTen: z.string().optional(),
  NgaySinh: z.coerce.date(),
  GioiTinh: z.lazy(() => GioiTinhSchema),
  DiaChi: z.string(),
  DienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedCreateNestedManyWithoutDocGiaInputSchema).optional()
}).strict();

export const DocGiaCreateOrConnectWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaCreateOrConnectWithoutTaiKhoanInput> = z.object({
  where: z.lazy(() => DocGiaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTaiKhoanInputSchema) ]),
}).strict();

export const NhanVienCreateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienCreateWithoutTaiKhoanInput> = z.object({
  MSNV: z.string().optional(),
  HoTenNV: z.string(),
  ChucVu: z.string(),
  DiaChi: z.string(),
  SoDienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhanVienUncheckedCreateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienUncheckedCreateWithoutTaiKhoanInput> = z.object({
  MSNV: z.string().optional(),
  HoTenNV: z.string(),
  ChucVu: z.string(),
  DiaChi: z.string(),
  SoDienThoai: z.string(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const NhanVienCreateOrConnectWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienCreateOrConnectWithoutTaiKhoanInput> = z.object({
  where: z.lazy(() => NhanVienWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NhanVienCreateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedCreateWithoutTaiKhoanInputSchema) ]),
}).strict();

export const DocGiaUpsertWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaUpsertWithoutTaiKhoanInput> = z.object({
  update: z.union([ z.lazy(() => DocGiaUpdateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTaiKhoanInputSchema) ]),
  create: z.union([ z.lazy(() => DocGiaCreateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedCreateWithoutTaiKhoanInputSchema) ]),
  where: z.lazy(() => DocGiaWhereInputSchema).optional()
}).strict();

export const DocGiaUpdateToOneWithWhereWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaUpdateToOneWithWhereWithoutTaiKhoanInput> = z.object({
  where: z.lazy(() => DocGiaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocGiaUpdateWithoutTaiKhoanInputSchema),z.lazy(() => DocGiaUncheckedUpdateWithoutTaiKhoanInputSchema) ]),
}).strict();

export const DocGiaUpdateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaUpdateWithoutTaiKhoanInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUpdateManyWithoutDocGiaNestedInputSchema).optional()
}).strict();

export const DocGiaUncheckedUpdateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.DocGiaUncheckedUpdateWithoutTaiKhoanInput> = z.object({
  HoLot: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ten: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  HoTen: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgaySinh: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  GioiTinh: z.union([ z.lazy(() => GioiTinhSchema),z.lazy(() => EnumGioiTinhFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaNestedInputSchema).optional()
}).strict();

export const NhanVienUpsertWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienUpsertWithoutTaiKhoanInput> = z.object({
  update: z.union([ z.lazy(() => NhanVienUpdateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedUpdateWithoutTaiKhoanInputSchema) ]),
  create: z.union([ z.lazy(() => NhanVienCreateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedCreateWithoutTaiKhoanInputSchema) ]),
  where: z.lazy(() => NhanVienWhereInputSchema).optional()
}).strict();

export const NhanVienUpdateToOneWithWhereWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienUpdateToOneWithWhereWithoutTaiKhoanInput> = z.object({
  where: z.lazy(() => NhanVienWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NhanVienUpdateWithoutTaiKhoanInputSchema),z.lazy(() => NhanVienUncheckedUpdateWithoutTaiKhoanInputSchema) ]),
}).strict();

export const NhanVienUpdateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienUpdateWithoutTaiKhoanInput> = z.object({
  HoTenNV: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ChucVu: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  SoDienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NhanVienUncheckedUpdateWithoutTaiKhoanInputSchema: z.ZodType<Prisma.NhanVienUncheckedUpdateWithoutTaiKhoanInput> = z.object({
  HoTenNV: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ChucVu: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DiaChi: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  SoDienThoai: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachCreateManyDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateManyDocGiaInput> = z.object({
  MaTDMS: z.string().optional(),
  MaSach: z.string(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TheoDoiMuonSachUpdateWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateWithoutDocGiaInput> = z.object({
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Sach: z.lazy(() => SachUpdateOneRequiredWithoutTheoDoiMuonSachNestedInputSchema).optional()
}).strict();

export const TheoDoiMuonSachUncheckedUpdateWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateWithoutDocGiaInput> = z.object({
  MaSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateManyWithoutDocGiaInput> = z.object({
  MaSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachCreateManySachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateManySachInput> = z.object({
  MaTDMS: z.string().optional(),
  MaDocGia: z.string(),
  NgayYeuCau: z.coerce.date().optional(),
  NgayDuyet: z.coerce.date().optional().nullable(),
  NgayMuon: z.coerce.date().optional().nullable(),
  NgayTra: z.coerce.date().optional().nullable(),
  TrangThaiMuonSach: z.lazy(() => TrangThaiMuonSachSchema).optional(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TheoDoiMuonSachUpdateWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateWithoutSachInput> = z.object({
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  DocGia: z.lazy(() => DocGiaUpdateOneRequiredWithoutTheoDoiMuonSachNestedInputSchema).optional()
}).strict();

export const TheoDoiMuonSachUncheckedUpdateWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateWithoutSachInput> = z.object({
  MaDocGia: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TheoDoiMuonSachUncheckedUpdateManyWithoutSachInputSchema: z.ZodType<Prisma.TheoDoiMuonSachUncheckedUpdateManyWithoutSachInput> = z.object({
  MaDocGia: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  NgayYeuCau: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  NgayDuyet: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayMuon: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  NgayTra: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  TrangThaiMuonSach: z.union([ z.lazy(() => TrangThaiMuonSachSchema),z.lazy(() => EnumTrangThaiMuonSachFieldUpdateOperationsInputSchema) ]).optional(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SachCreateManyNhaXuatBanInputSchema: z.ZodType<Prisma.SachCreateManyNhaXuatBanInput> = z.object({
  MaSach: z.string().optional(),
  TenSach: z.string(),
  DonGia: z.number(),
  SoQuyen: z.number().int(),
  NamXuatBan: z.number().int(),
  NguonGoc: z.string().optional().nullable(),
  HinhAnh: z.string().optional().nullable(),
  DaXoa: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SachUpdateWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUpdateWithoutNhaXuatBanInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUpdateManyWithoutSachNestedInputSchema).optional()
}).strict();

export const SachUncheckedUpdateWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUncheckedUpdateWithoutNhaXuatBanInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  TheoDoiMuonSach: z.lazy(() => TheoDoiMuonSachUncheckedUpdateManyWithoutSachNestedInputSchema).optional()
}).strict();

export const SachUncheckedUpdateManyWithoutNhaXuatBanInputSchema: z.ZodType<Prisma.SachUncheckedUpdateManyWithoutNhaXuatBanInput> = z.object({
  TenSach: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  DonGia: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  SoQuyen: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NamXuatBan: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  NguonGoc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  HinhAnh: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  DaXoa: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const DocGiaFindFirstArgsSchema: z.ZodType<Prisma.DocGiaFindFirstArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereInputSchema.optional(),
  orderBy: z.union([ DocGiaOrderByWithRelationInputSchema.array(),DocGiaOrderByWithRelationInputSchema ]).optional(),
  cursor: DocGiaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocGiaScalarFieldEnumSchema,DocGiaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DocGiaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.DocGiaFindFirstOrThrowArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereInputSchema.optional(),
  orderBy: z.union([ DocGiaOrderByWithRelationInputSchema.array(),DocGiaOrderByWithRelationInputSchema ]).optional(),
  cursor: DocGiaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocGiaScalarFieldEnumSchema,DocGiaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DocGiaFindManyArgsSchema: z.ZodType<Prisma.DocGiaFindManyArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereInputSchema.optional(),
  orderBy: z.union([ DocGiaOrderByWithRelationInputSchema.array(),DocGiaOrderByWithRelationInputSchema ]).optional(),
  cursor: DocGiaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DocGiaScalarFieldEnumSchema,DocGiaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const DocGiaAggregateArgsSchema: z.ZodType<Prisma.DocGiaAggregateArgs> = z.object({
  where: DocGiaWhereInputSchema.optional(),
  orderBy: z.union([ DocGiaOrderByWithRelationInputSchema.array(),DocGiaOrderByWithRelationInputSchema ]).optional(),
  cursor: DocGiaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DocGiaGroupByArgsSchema: z.ZodType<Prisma.DocGiaGroupByArgs> = z.object({
  where: DocGiaWhereInputSchema.optional(),
  orderBy: z.union([ DocGiaOrderByWithAggregationInputSchema.array(),DocGiaOrderByWithAggregationInputSchema ]).optional(),
  by: DocGiaScalarFieldEnumSchema.array(),
  having: DocGiaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const DocGiaFindUniqueArgsSchema: z.ZodType<Prisma.DocGiaFindUniqueArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereUniqueInputSchema,
}).strict() ;

export const DocGiaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DocGiaFindUniqueOrThrowArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereUniqueInputSchema,
}).strict() ;

export const SachFindFirstArgsSchema: z.ZodType<Prisma.SachFindFirstArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereInputSchema.optional(),
  orderBy: z.union([ SachOrderByWithRelationInputSchema.array(),SachOrderByWithRelationInputSchema ]).optional(),
  cursor: SachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SachScalarFieldEnumSchema,SachScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SachFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SachFindFirstOrThrowArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereInputSchema.optional(),
  orderBy: z.union([ SachOrderByWithRelationInputSchema.array(),SachOrderByWithRelationInputSchema ]).optional(),
  cursor: SachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SachScalarFieldEnumSchema,SachScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SachFindManyArgsSchema: z.ZodType<Prisma.SachFindManyArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereInputSchema.optional(),
  orderBy: z.union([ SachOrderByWithRelationInputSchema.array(),SachOrderByWithRelationInputSchema ]).optional(),
  cursor: SachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SachScalarFieldEnumSchema,SachScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SachAggregateArgsSchema: z.ZodType<Prisma.SachAggregateArgs> = z.object({
  where: SachWhereInputSchema.optional(),
  orderBy: z.union([ SachOrderByWithRelationInputSchema.array(),SachOrderByWithRelationInputSchema ]).optional(),
  cursor: SachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SachGroupByArgsSchema: z.ZodType<Prisma.SachGroupByArgs> = z.object({
  where: SachWhereInputSchema.optional(),
  orderBy: z.union([ SachOrderByWithAggregationInputSchema.array(),SachOrderByWithAggregationInputSchema ]).optional(),
  by: SachScalarFieldEnumSchema.array(),
  having: SachScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SachFindUniqueArgsSchema: z.ZodType<Prisma.SachFindUniqueArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereUniqueInputSchema,
}).strict() ;

export const SachFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SachFindUniqueOrThrowArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereUniqueInputSchema,
}).strict() ;

export const NhaXuatBanFindFirstArgsSchema: z.ZodType<Prisma.NhaXuatBanFindFirstArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereInputSchema.optional(),
  orderBy: z.union([ NhaXuatBanOrderByWithRelationInputSchema.array(),NhaXuatBanOrderByWithRelationInputSchema ]).optional(),
  cursor: NhaXuatBanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NhaXuatBanScalarFieldEnumSchema,NhaXuatBanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NhaXuatBanFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NhaXuatBanFindFirstOrThrowArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereInputSchema.optional(),
  orderBy: z.union([ NhaXuatBanOrderByWithRelationInputSchema.array(),NhaXuatBanOrderByWithRelationInputSchema ]).optional(),
  cursor: NhaXuatBanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NhaXuatBanScalarFieldEnumSchema,NhaXuatBanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NhaXuatBanFindManyArgsSchema: z.ZodType<Prisma.NhaXuatBanFindManyArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereInputSchema.optional(),
  orderBy: z.union([ NhaXuatBanOrderByWithRelationInputSchema.array(),NhaXuatBanOrderByWithRelationInputSchema ]).optional(),
  cursor: NhaXuatBanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NhaXuatBanScalarFieldEnumSchema,NhaXuatBanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NhaXuatBanAggregateArgsSchema: z.ZodType<Prisma.NhaXuatBanAggregateArgs> = z.object({
  where: NhaXuatBanWhereInputSchema.optional(),
  orderBy: z.union([ NhaXuatBanOrderByWithRelationInputSchema.array(),NhaXuatBanOrderByWithRelationInputSchema ]).optional(),
  cursor: NhaXuatBanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NhaXuatBanGroupByArgsSchema: z.ZodType<Prisma.NhaXuatBanGroupByArgs> = z.object({
  where: NhaXuatBanWhereInputSchema.optional(),
  orderBy: z.union([ NhaXuatBanOrderByWithAggregationInputSchema.array(),NhaXuatBanOrderByWithAggregationInputSchema ]).optional(),
  by: NhaXuatBanScalarFieldEnumSchema.array(),
  having: NhaXuatBanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NhaXuatBanFindUniqueArgsSchema: z.ZodType<Prisma.NhaXuatBanFindUniqueArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereUniqueInputSchema,
}).strict() ;

export const NhaXuatBanFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NhaXuatBanFindUniqueOrThrowArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereUniqueInputSchema,
}).strict() ;

export const TheoDoiMuonSachFindFirstArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachFindFirstArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereInputSchema.optional(),
  orderBy: z.union([ TheoDoiMuonSachOrderByWithRelationInputSchema.array(),TheoDoiMuonSachOrderByWithRelationInputSchema ]).optional(),
  cursor: TheoDoiMuonSachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TheoDoiMuonSachScalarFieldEnumSchema,TheoDoiMuonSachScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TheoDoiMuonSachFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachFindFirstOrThrowArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereInputSchema.optional(),
  orderBy: z.union([ TheoDoiMuonSachOrderByWithRelationInputSchema.array(),TheoDoiMuonSachOrderByWithRelationInputSchema ]).optional(),
  cursor: TheoDoiMuonSachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TheoDoiMuonSachScalarFieldEnumSchema,TheoDoiMuonSachScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TheoDoiMuonSachFindManyArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachFindManyArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereInputSchema.optional(),
  orderBy: z.union([ TheoDoiMuonSachOrderByWithRelationInputSchema.array(),TheoDoiMuonSachOrderByWithRelationInputSchema ]).optional(),
  cursor: TheoDoiMuonSachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TheoDoiMuonSachScalarFieldEnumSchema,TheoDoiMuonSachScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TheoDoiMuonSachAggregateArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachAggregateArgs> = z.object({
  where: TheoDoiMuonSachWhereInputSchema.optional(),
  orderBy: z.union([ TheoDoiMuonSachOrderByWithRelationInputSchema.array(),TheoDoiMuonSachOrderByWithRelationInputSchema ]).optional(),
  cursor: TheoDoiMuonSachWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TheoDoiMuonSachGroupByArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachGroupByArgs> = z.object({
  where: TheoDoiMuonSachWhereInputSchema.optional(),
  orderBy: z.union([ TheoDoiMuonSachOrderByWithAggregationInputSchema.array(),TheoDoiMuonSachOrderByWithAggregationInputSchema ]).optional(),
  by: TheoDoiMuonSachScalarFieldEnumSchema.array(),
  having: TheoDoiMuonSachScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TheoDoiMuonSachFindUniqueArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachFindUniqueArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereUniqueInputSchema,
}).strict() ;

export const TheoDoiMuonSachFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachFindUniqueOrThrowArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereUniqueInputSchema,
}).strict() ;

export const NhanVienFindFirstArgsSchema: z.ZodType<Prisma.NhanVienFindFirstArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereInputSchema.optional(),
  orderBy: z.union([ NhanVienOrderByWithRelationInputSchema.array(),NhanVienOrderByWithRelationInputSchema ]).optional(),
  cursor: NhanVienWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NhanVienScalarFieldEnumSchema,NhanVienScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NhanVienFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NhanVienFindFirstOrThrowArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereInputSchema.optional(),
  orderBy: z.union([ NhanVienOrderByWithRelationInputSchema.array(),NhanVienOrderByWithRelationInputSchema ]).optional(),
  cursor: NhanVienWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NhanVienScalarFieldEnumSchema,NhanVienScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NhanVienFindManyArgsSchema: z.ZodType<Prisma.NhanVienFindManyArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereInputSchema.optional(),
  orderBy: z.union([ NhanVienOrderByWithRelationInputSchema.array(),NhanVienOrderByWithRelationInputSchema ]).optional(),
  cursor: NhanVienWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NhanVienScalarFieldEnumSchema,NhanVienScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NhanVienAggregateArgsSchema: z.ZodType<Prisma.NhanVienAggregateArgs> = z.object({
  where: NhanVienWhereInputSchema.optional(),
  orderBy: z.union([ NhanVienOrderByWithRelationInputSchema.array(),NhanVienOrderByWithRelationInputSchema ]).optional(),
  cursor: NhanVienWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NhanVienGroupByArgsSchema: z.ZodType<Prisma.NhanVienGroupByArgs> = z.object({
  where: NhanVienWhereInputSchema.optional(),
  orderBy: z.union([ NhanVienOrderByWithAggregationInputSchema.array(),NhanVienOrderByWithAggregationInputSchema ]).optional(),
  by: NhanVienScalarFieldEnumSchema.array(),
  having: NhanVienScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NhanVienFindUniqueArgsSchema: z.ZodType<Prisma.NhanVienFindUniqueArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereUniqueInputSchema,
}).strict() ;

export const NhanVienFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NhanVienFindUniqueOrThrowArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereUniqueInputSchema,
}).strict() ;

export const TaiKhoanFindFirstArgsSchema: z.ZodType<Prisma.TaiKhoanFindFirstArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereInputSchema.optional(),
  orderBy: z.union([ TaiKhoanOrderByWithRelationInputSchema.array(),TaiKhoanOrderByWithRelationInputSchema ]).optional(),
  cursor: TaiKhoanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaiKhoanScalarFieldEnumSchema,TaiKhoanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TaiKhoanFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TaiKhoanFindFirstOrThrowArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereInputSchema.optional(),
  orderBy: z.union([ TaiKhoanOrderByWithRelationInputSchema.array(),TaiKhoanOrderByWithRelationInputSchema ]).optional(),
  cursor: TaiKhoanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaiKhoanScalarFieldEnumSchema,TaiKhoanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TaiKhoanFindManyArgsSchema: z.ZodType<Prisma.TaiKhoanFindManyArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereInputSchema.optional(),
  orderBy: z.union([ TaiKhoanOrderByWithRelationInputSchema.array(),TaiKhoanOrderByWithRelationInputSchema ]).optional(),
  cursor: TaiKhoanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TaiKhoanScalarFieldEnumSchema,TaiKhoanScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TaiKhoanAggregateArgsSchema: z.ZodType<Prisma.TaiKhoanAggregateArgs> = z.object({
  where: TaiKhoanWhereInputSchema.optional(),
  orderBy: z.union([ TaiKhoanOrderByWithRelationInputSchema.array(),TaiKhoanOrderByWithRelationInputSchema ]).optional(),
  cursor: TaiKhoanWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TaiKhoanGroupByArgsSchema: z.ZodType<Prisma.TaiKhoanGroupByArgs> = z.object({
  where: TaiKhoanWhereInputSchema.optional(),
  orderBy: z.union([ TaiKhoanOrderByWithAggregationInputSchema.array(),TaiKhoanOrderByWithAggregationInputSchema ]).optional(),
  by: TaiKhoanScalarFieldEnumSchema.array(),
  having: TaiKhoanScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TaiKhoanFindUniqueArgsSchema: z.ZodType<Prisma.TaiKhoanFindUniqueArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereUniqueInputSchema,
}).strict() ;

export const TaiKhoanFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TaiKhoanFindUniqueOrThrowArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereUniqueInputSchema,
}).strict() ;

export const DocGiaCreateArgsSchema: z.ZodType<Prisma.DocGiaCreateArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  data: z.union([ DocGiaCreateInputSchema,DocGiaUncheckedCreateInputSchema ]),
}).strict() ;

export const DocGiaUpsertArgsSchema: z.ZodType<Prisma.DocGiaUpsertArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereUniqueInputSchema,
  create: z.union([ DocGiaCreateInputSchema,DocGiaUncheckedCreateInputSchema ]),
  update: z.union([ DocGiaUpdateInputSchema,DocGiaUncheckedUpdateInputSchema ]),
}).strict() ;

export const DocGiaCreateManyArgsSchema: z.ZodType<Prisma.DocGiaCreateManyArgs> = z.object({
  data: z.union([ DocGiaCreateManyInputSchema,DocGiaCreateManyInputSchema.array() ]),
}).strict() ;

export const DocGiaDeleteArgsSchema: z.ZodType<Prisma.DocGiaDeleteArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  where: DocGiaWhereUniqueInputSchema,
}).strict() ;

export const DocGiaUpdateArgsSchema: z.ZodType<Prisma.DocGiaUpdateArgs> = z.object({
  select: DocGiaSelectSchema.optional(),
  include: DocGiaIncludeSchema.optional(),
  data: z.union([ DocGiaUpdateInputSchema,DocGiaUncheckedUpdateInputSchema ]),
  where: DocGiaWhereUniqueInputSchema,
}).strict() ;

export const DocGiaUpdateManyArgsSchema: z.ZodType<Prisma.DocGiaUpdateManyArgs> = z.object({
  data: z.union([ DocGiaUpdateManyMutationInputSchema,DocGiaUncheckedUpdateManyInputSchema ]),
  where: DocGiaWhereInputSchema.optional(),
}).strict() ;

export const DocGiaDeleteManyArgsSchema: z.ZodType<Prisma.DocGiaDeleteManyArgs> = z.object({
  where: DocGiaWhereInputSchema.optional(),
}).strict() ;

export const SachCreateArgsSchema: z.ZodType<Prisma.SachCreateArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  data: z.union([ SachCreateInputSchema,SachUncheckedCreateInputSchema ]),
}).strict() ;

export const SachUpsertArgsSchema: z.ZodType<Prisma.SachUpsertArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereUniqueInputSchema,
  create: z.union([ SachCreateInputSchema,SachUncheckedCreateInputSchema ]),
  update: z.union([ SachUpdateInputSchema,SachUncheckedUpdateInputSchema ]),
}).strict() ;

export const SachCreateManyArgsSchema: z.ZodType<Prisma.SachCreateManyArgs> = z.object({
  data: z.union([ SachCreateManyInputSchema,SachCreateManyInputSchema.array() ]),
}).strict() ;

export const SachDeleteArgsSchema: z.ZodType<Prisma.SachDeleteArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  where: SachWhereUniqueInputSchema,
}).strict() ;

export const SachUpdateArgsSchema: z.ZodType<Prisma.SachUpdateArgs> = z.object({
  select: SachSelectSchema.optional(),
  include: SachIncludeSchema.optional(),
  data: z.union([ SachUpdateInputSchema,SachUncheckedUpdateInputSchema ]),
  where: SachWhereUniqueInputSchema,
}).strict() ;

export const SachUpdateManyArgsSchema: z.ZodType<Prisma.SachUpdateManyArgs> = z.object({
  data: z.union([ SachUpdateManyMutationInputSchema,SachUncheckedUpdateManyInputSchema ]),
  where: SachWhereInputSchema.optional(),
}).strict() ;

export const SachDeleteManyArgsSchema: z.ZodType<Prisma.SachDeleteManyArgs> = z.object({
  where: SachWhereInputSchema.optional(),
}).strict() ;

export const NhaXuatBanCreateArgsSchema: z.ZodType<Prisma.NhaXuatBanCreateArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  data: z.union([ NhaXuatBanCreateInputSchema,NhaXuatBanUncheckedCreateInputSchema ]),
}).strict() ;

export const NhaXuatBanUpsertArgsSchema: z.ZodType<Prisma.NhaXuatBanUpsertArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereUniqueInputSchema,
  create: z.union([ NhaXuatBanCreateInputSchema,NhaXuatBanUncheckedCreateInputSchema ]),
  update: z.union([ NhaXuatBanUpdateInputSchema,NhaXuatBanUncheckedUpdateInputSchema ]),
}).strict() ;

export const NhaXuatBanCreateManyArgsSchema: z.ZodType<Prisma.NhaXuatBanCreateManyArgs> = z.object({
  data: z.union([ NhaXuatBanCreateManyInputSchema,NhaXuatBanCreateManyInputSchema.array() ]),
}).strict() ;

export const NhaXuatBanDeleteArgsSchema: z.ZodType<Prisma.NhaXuatBanDeleteArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  where: NhaXuatBanWhereUniqueInputSchema,
}).strict() ;

export const NhaXuatBanUpdateArgsSchema: z.ZodType<Prisma.NhaXuatBanUpdateArgs> = z.object({
  select: NhaXuatBanSelectSchema.optional(),
  include: NhaXuatBanIncludeSchema.optional(),
  data: z.union([ NhaXuatBanUpdateInputSchema,NhaXuatBanUncheckedUpdateInputSchema ]),
  where: NhaXuatBanWhereUniqueInputSchema,
}).strict() ;

export const NhaXuatBanUpdateManyArgsSchema: z.ZodType<Prisma.NhaXuatBanUpdateManyArgs> = z.object({
  data: z.union([ NhaXuatBanUpdateManyMutationInputSchema,NhaXuatBanUncheckedUpdateManyInputSchema ]),
  where: NhaXuatBanWhereInputSchema.optional(),
}).strict() ;

export const NhaXuatBanDeleteManyArgsSchema: z.ZodType<Prisma.NhaXuatBanDeleteManyArgs> = z.object({
  where: NhaXuatBanWhereInputSchema.optional(),
}).strict() ;

export const TheoDoiMuonSachCreateArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  data: z.union([ TheoDoiMuonSachCreateInputSchema,TheoDoiMuonSachUncheckedCreateInputSchema ]),
}).strict() ;

export const TheoDoiMuonSachUpsertArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachUpsertArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereUniqueInputSchema,
  create: z.union([ TheoDoiMuonSachCreateInputSchema,TheoDoiMuonSachUncheckedCreateInputSchema ]),
  update: z.union([ TheoDoiMuonSachUpdateInputSchema,TheoDoiMuonSachUncheckedUpdateInputSchema ]),
}).strict() ;

export const TheoDoiMuonSachCreateManyArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachCreateManyArgs> = z.object({
  data: z.union([ TheoDoiMuonSachCreateManyInputSchema,TheoDoiMuonSachCreateManyInputSchema.array() ]),
}).strict() ;

export const TheoDoiMuonSachDeleteArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachDeleteArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  where: TheoDoiMuonSachWhereUniqueInputSchema,
}).strict() ;

export const TheoDoiMuonSachUpdateArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateArgs> = z.object({
  select: TheoDoiMuonSachSelectSchema.optional(),
  include: TheoDoiMuonSachIncludeSchema.optional(),
  data: z.union([ TheoDoiMuonSachUpdateInputSchema,TheoDoiMuonSachUncheckedUpdateInputSchema ]),
  where: TheoDoiMuonSachWhereUniqueInputSchema,
}).strict() ;

export const TheoDoiMuonSachUpdateManyArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachUpdateManyArgs> = z.object({
  data: z.union([ TheoDoiMuonSachUpdateManyMutationInputSchema,TheoDoiMuonSachUncheckedUpdateManyInputSchema ]),
  where: TheoDoiMuonSachWhereInputSchema.optional(),
}).strict() ;

export const TheoDoiMuonSachDeleteManyArgsSchema: z.ZodType<Prisma.TheoDoiMuonSachDeleteManyArgs> = z.object({
  where: TheoDoiMuonSachWhereInputSchema.optional(),
}).strict() ;

export const NhanVienCreateArgsSchema: z.ZodType<Prisma.NhanVienCreateArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  data: z.union([ NhanVienCreateInputSchema,NhanVienUncheckedCreateInputSchema ]),
}).strict() ;

export const NhanVienUpsertArgsSchema: z.ZodType<Prisma.NhanVienUpsertArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereUniqueInputSchema,
  create: z.union([ NhanVienCreateInputSchema,NhanVienUncheckedCreateInputSchema ]),
  update: z.union([ NhanVienUpdateInputSchema,NhanVienUncheckedUpdateInputSchema ]),
}).strict() ;

export const NhanVienCreateManyArgsSchema: z.ZodType<Prisma.NhanVienCreateManyArgs> = z.object({
  data: z.union([ NhanVienCreateManyInputSchema,NhanVienCreateManyInputSchema.array() ]),
}).strict() ;

export const NhanVienDeleteArgsSchema: z.ZodType<Prisma.NhanVienDeleteArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  where: NhanVienWhereUniqueInputSchema,
}).strict() ;

export const NhanVienUpdateArgsSchema: z.ZodType<Prisma.NhanVienUpdateArgs> = z.object({
  select: NhanVienSelectSchema.optional(),
  include: NhanVienIncludeSchema.optional(),
  data: z.union([ NhanVienUpdateInputSchema,NhanVienUncheckedUpdateInputSchema ]),
  where: NhanVienWhereUniqueInputSchema,
}).strict() ;

export const NhanVienUpdateManyArgsSchema: z.ZodType<Prisma.NhanVienUpdateManyArgs> = z.object({
  data: z.union([ NhanVienUpdateManyMutationInputSchema,NhanVienUncheckedUpdateManyInputSchema ]),
  where: NhanVienWhereInputSchema.optional(),
}).strict() ;

export const NhanVienDeleteManyArgsSchema: z.ZodType<Prisma.NhanVienDeleteManyArgs> = z.object({
  where: NhanVienWhereInputSchema.optional(),
}).strict() ;

export const TaiKhoanCreateArgsSchema: z.ZodType<Prisma.TaiKhoanCreateArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  data: z.union([ TaiKhoanCreateInputSchema,TaiKhoanUncheckedCreateInputSchema ]),
}).strict() ;

export const TaiKhoanUpsertArgsSchema: z.ZodType<Prisma.TaiKhoanUpsertArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereUniqueInputSchema,
  create: z.union([ TaiKhoanCreateInputSchema,TaiKhoanUncheckedCreateInputSchema ]),
  update: z.union([ TaiKhoanUpdateInputSchema,TaiKhoanUncheckedUpdateInputSchema ]),
}).strict() ;

export const TaiKhoanCreateManyArgsSchema: z.ZodType<Prisma.TaiKhoanCreateManyArgs> = z.object({
  data: z.union([ TaiKhoanCreateManyInputSchema,TaiKhoanCreateManyInputSchema.array() ]),
}).strict() ;

export const TaiKhoanDeleteArgsSchema: z.ZodType<Prisma.TaiKhoanDeleteArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  where: TaiKhoanWhereUniqueInputSchema,
}).strict() ;

export const TaiKhoanUpdateArgsSchema: z.ZodType<Prisma.TaiKhoanUpdateArgs> = z.object({
  select: TaiKhoanSelectSchema.optional(),
  include: TaiKhoanIncludeSchema.optional(),
  data: z.union([ TaiKhoanUpdateInputSchema,TaiKhoanUncheckedUpdateInputSchema ]),
  where: TaiKhoanWhereUniqueInputSchema,
}).strict() ;

export const TaiKhoanUpdateManyArgsSchema: z.ZodType<Prisma.TaiKhoanUpdateManyArgs> = z.object({
  data: z.union([ TaiKhoanUpdateManyMutationInputSchema,TaiKhoanUncheckedUpdateManyInputSchema ]),
  where: TaiKhoanWhereInputSchema.optional(),
}).strict() ;

export const TaiKhoanDeleteManyArgsSchema: z.ZodType<Prisma.TaiKhoanDeleteManyArgs> = z.object({
  where: TaiKhoanWhereInputSchema.optional(),
}).strict() ;