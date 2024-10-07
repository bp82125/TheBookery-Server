const defaultFields = [
  { name: "createdAt", type: "date" },
  { name: "updatedAt", type: "date" },
];

export const docGiaFields = [
  ...defaultFields,
  { name: "HoLot", type: "string" },
  { name: "Ten", type: "string" },
  { name: "NgaySinh", type: "date" },
  { name: "GioiTinh", type: "enum", enumValues: ["MALE", "FEMALE", "UNKNOWN"] },
  { name: "DiaChi", type: "string" },
  { name: "DienThoai", type: "string" },
  { name: "TaiKhoan.TenDangNhap", type: "string" },
];

export const nhanVienFields = [
  ...defaultFields,
  { name: "HoTenNV", type: "string" },
  { name: "ChucVu", type: "string" },
  { name: "DiaChi", type: "string" },
  { name: "SoDienThoai", type: "string" },
  { name: "TaiKhoan.TenDangNhap", type: "string" },
  { name: "NhaXuatBan.TenNXB", type: "string" },
];

export const sachFields = [
  ...defaultFields,
  { name: "TenSach", type: "string" },
  { name: "DonGia", type: "number" },
  { name: "SoQuyen", type: "number" },
  { name: "NamXuatBan", type: "number" },
  { name: "NguonGoc", type: "string" },
  { name: "HinhAnh", type: "string" },
];

export const nhaXuatBanFields = [
  ...defaultFields,
  { name: "TenNXB", type: "string" },
  { name: "DiaChi", type: "string" },
];

export const theoDoiMuonSachFields = [
  ...defaultFields,
  { name: "NgayYeuCau", type: "date" },
  { name: "NgayDuyet", type: "date" },
  { name: "NgayMuon", type: "date" },
  { name: "NgayTra", type: "date" },
  {
    name: "TrangThaiMuonSach",
    type: "enum",
    enumValues: ["PENDING", "APPROVED", "REJECTED", "PICKED_UP", "RETURNED"],
  },
  { name: "DocGia.Ten", type: "string" },
  { name: "Sach.TenSach", type: "string" },
];

export const TaiKhoan = [
  ...defaultFields,
  { name: "TenDangNhap", type: "string" },
  {
    name: "LoaiTaiKhoan",
    type: "enum",
    enumValues: ["USER", "EMPLOYEE", "ADMINISTRATOR"],
  },
  { name: "DocGia.Ten", type: "string" },
  { name: "NhanVien.HoTenNV", type: "string" },
  { name: "KichHoat", type: "boolean" },
];
