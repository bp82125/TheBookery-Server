import { CreateTaiKhoanDto } from "../dtos/taiKhoan.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { prisma } from "../prisma/prismaClient";
import { UsernameAlreadyExistsException } from "../exceptions/UsernameAlreadyExistsException";
import { scryptSync, randomBytes } from "crypto";

export const getAllTaiKhoan = async () => {
  const taiKhoan = await prisma.taiKhoan.findMany({
    where: { DaXoa: false },
  });
  return taiKhoan || [];
};

export const getTaiKhoanById = async (id: string) => {
  const taiKhoan = await prisma.taiKhoan
    .findUnique({
      where: { MaTaiKhoan: id },
    })
    .catch(() => {
      throw new EntityNotFoundException(
        `Không tìm thấy tài khoản với mã ${id}`
      );
    });

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

export const deleteTaiKhoan = async (id: string) => {
  await prisma.taiKhoan
    .findUnique({
      where: { MaTaiKhoan: id },
    })
    .catch(() => {
      throw new EntityNotFoundException(
        `Không tìm thấy tài khoản với mã ${id}`
      );
    });

  await prisma.taiKhoan.update({
    where: { MaTaiKhoan: id },
    data: { DaXoa: true, KichHoat: false },
  });
};
