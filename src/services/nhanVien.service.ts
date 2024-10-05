// src/services/nhanVien.service.ts
import { prisma } from "../prisma/prismaClient";
import { CreateNhanVienDto, UpdateNhanVienDto } from "../dtos/nhanVien.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { plainToInstance } from "class-transformer";

export const getAllNhanVien = async () => {
  return await prisma.nhanVien.findMany({
    where: { DaXoa: false },
  });
};

export const getNhanVienById = async (id: string) => {
  const nhanVien = await prisma.nhanVien.findUnique({
    where: { MSNV: id },
  });

  if (!nhanVien) {
    throw new EntityNotFoundException(`Không tìm thấy nhân viên với mã ${id}`);
  }

  return nhanVien;
};

export const createNhanVien = async (data: CreateNhanVienDto) => {
  const nhanVien = await prisma.nhanVien.create({
    data: data,
  });

  return nhanVien;
};

export const updateNhanVien = async (id: string, data: UpdateNhanVienDto) => {
  const oldNhanVien = await prisma.nhanVien.findUnique({
    where: { MSNV: id },
  });

  if (!oldNhanVien) {
    throw new EntityNotFoundException(`Không tìm thấy nhân viên với mã ${id}`);
  }

  const nhanVienDto = plainToInstance(UpdateNhanVienDto, data);
  const nhanVienData = nhanVienDto.toPrismaFormat();

  const updatedNhanVien = await prisma.nhanVien.update({
    where: { MSNV: id },
    data: {
      ...nhanVienData,
    },
  });

  return updatedNhanVien;
};

export const deleteNhanVien = async (id: string) => {
  const nhanVien = await prisma.nhanVien.findUnique({
    where: { MSNV: id },
  });

  if (!nhanVien) {
    throw new EntityNotFoundException(`Không tìm thấy nhân viên với mã ${id}`);
  }

  await prisma.nhanVien.update({
    where: { MSNV: id },
    data: { DaXoa: true },
  });
};
