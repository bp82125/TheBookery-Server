import { CreateTaiKhoanDto, LoginTaiKhoanDto } from "../dtos/taiKhoan.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { prisma } from "../prisma/prismaClient";
import { UsernameAlreadyExistsException } from "../exceptions/UsernameAlreadyExistsException";
import { scryptSync, randomBytes, timingSafeEqual } from "crypto";
import { InvalidPasswordException } from "../exceptions/InvalidPasswordException";
import jwt from "jsonwebtoken";

export const getAllTaiKhoan = async (
  page: number,
  limit: number,
  orderByClause: object,
  whereClause: object
) => {
  const skip = (page - 1) * limit;
  const [taiKhoans, total] = await Promise.all([
    prisma.taiKhoan.findMany({
      where: whereClause,
      skip: skip,
      take: limit,
      orderBy: orderByClause,
      include: { DocGia: true, NhanVien: true },
    }),
    prisma.taiKhoan.count({ where: whereClause }),
  ]);

  return { taiKhoans, total };
};

export const getTaiKhoanById = async (id: string) => {
  const taiKhoan = await prisma.taiKhoan.findUnique({
    where: { MaTaiKhoan: id },
  });

  if (!taiKhoan) {
    throw new EntityNotFoundException(`Không tìm thấy tài khoản với mã ${id}`);
  }

  return taiKhoan;
};

export const createTaiKhoan = async (data: CreateTaiKhoanDto) => {
  const existingTaiKhoan = await prisma.taiKhoan.findUnique({
    where: { TenDangNhap: data.TenDangNhap },
  });

  if (existingTaiKhoan) {
    throw new UsernameAlreadyExistsException(
      `Tên đăng nhập ${data.TenDangNhap} đã tồn tại`
    );
  }

  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(data.MatKhau, salt, 64).toString("hex");

  const taiKhoan = await prisma.taiKhoan.create({
    data: {
      ...data,
      MatKhau: `${salt}:${hashedPassword}`,
    },
  });

  return taiKhoan;
};

export const loginTaiKhoan = async (data: LoginTaiKhoanDto) => {
  const user = await prisma.taiKhoan.findUnique({
    where: { TenDangNhap: data.TenDangNhap },
    include: {
      DocGia: true,
      NhanVien: true,
    },
  });

  if (!user) {
    throw new Error("Tài khoản hoặc mật khẩu không tồn tại");
  }

  const [salt, hash] = user.MatKhau.split(":");
  const hashedPassword = scryptSync(data.MatKhau, salt, 64).toString("hex");

  if (hashedPassword !== hash) {
    throw new Error("Tài khoản hoặc mật khẩu không tồn tại");
  }

  const token = jwt.sign(
    { id: user.MaTaiKhoan },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );

  return { user, token };
};

export const toggleTaiKhoan = async (id: string) => {
  const taiKhoan = await prisma.taiKhoan.findUnique({
    where: { MaTaiKhoan: id },
  });

  if (!taiKhoan) {
    throw new EntityNotFoundException(`Không tìm thấy tài khoản với mã ${id}`);
  }

  const updatedTaiKhoan = await prisma.taiKhoan.update({
    where: { MaTaiKhoan: id },
    data: { KichHoat: !taiKhoan.KichHoat },
  });

  return updatedTaiKhoan;
};

export const resetMatKhauTaiKhoan = async (id: string, newMatKhau: string) => {
  const taiKhoan = await prisma.taiKhoan.findUnique({
    where: { MaTaiKhoan: id },
  });

  if (!taiKhoan) {
    throw new EntityNotFoundException(`Không tìm thấy tài khoản với mã ${id}`);
  }

  const salt = randomBytes(16).toString("hex");
  const hashedPassword = scryptSync(newMatKhau, salt, 64).toString("hex");

  const updatedTaiKhoan = await prisma.taiKhoan.update({
    where: { MaTaiKhoan: id },
    data: { MatKhau: `${salt}:${hashedPassword}` },
  });

  return updatedTaiKhoan;
};

export const changeMatKhauTaiKhoan = async (
  id: string,
  currentPassword: string,
  newPassword: string
) => {
  // Find the account by its ID
  const taiKhoan = await prisma.taiKhoan.findUnique({
    where: { MaTaiKhoan: id },
  });

  if (!taiKhoan) {
    throw new EntityNotFoundException(`Không tìm thấy tài khoản với mã ${id}`);
  }

  const [salt, storedHash] = taiKhoan.MatKhau.split(":");
  const hashedCurrentPassword = scryptSync(currentPassword, salt, 64);
  const storedPasswordBuffer = Buffer.from(storedHash, "hex");

  if (!timingSafeEqual(hashedCurrentPassword, storedPasswordBuffer)) {
    throw new InvalidPasswordException("Mật khẩu hiện tại không đúng");
  }

  const newSalt = randomBytes(16).toString("hex");
  const hashedNewPassword = scryptSync(newPassword, newSalt, 64).toString(
    "hex"
  );

  const updatedTaiKhoan = await prisma.taiKhoan.update({
    where: { MaTaiKhoan: id },
    data: { MatKhau: `${newSalt}:${hashedNewPassword}` },
  });

  return updatedTaiKhoan;
};

export const deleteTaiKhoan = async (id: string) => {
  const taiKhoan = await prisma.taiKhoan.findUnique({
    where: { MaTaiKhoan: id },
    include: {
      DocGia: true,
      NhanVien: true,
    },
  });

  if (!taiKhoan) {
    throw new EntityNotFoundException(`Không tìm thấy tài khoản với mã ${id}`);
  }

  if (taiKhoan.DocGia) {
    await prisma.docGia.update({
      where: { MaDocGia: taiKhoan.DocGia.MaDocGia },
      data: { DaXoa: true },
    });
  }

  if (taiKhoan.NhanVien) {
    await prisma.nhanVien.update({
      where: { MSNV: taiKhoan.NhanVien.MSNV },
      data: { DaXoa: true },
    });
  }

  await prisma.taiKhoan.update({
    where: { MaTaiKhoan: id },
    data: { DaXoa: true, KichHoat: false },
  });
};
