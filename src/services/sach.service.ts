import { plainToInstance } from "class-transformer";
import { CreateSachDto, UpdateSachDto } from "../dto/sach.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { prisma } from "../prisma/prismaClient";

export const getAllSach = async () => {
  return await prisma.sach.findMany({
    where: { DaXoa: false },
  });
};

export const getSachById = async (id: string) => {
  const sach = await prisma.sach.findUnique({
    where: { MaSach: id },
  });

  if (!sach) {
    throw new EntityNotFoundException(`Không tìm thấy sách với mã ${id}`);
  }

  return sach;
};

export const createSach = async (data: CreateSachDto) => {
  const sach = await prisma.sach.create({ data });
  return sach;
};

export const updateSach = async (id: string, data: UpdateSachDto) => {
  const oldSach = await prisma.sach.findUnique({
    where: { MaSach: id },
  });

  if (!oldSach) {
    throw new EntityNotFoundException(`Không tìm thấy sách với mã ${id}`);
  }

  const sachDto = plainToInstance(UpdateSachDto, data);
  const sachData = sachDto.toPrismaFormat();

  const updatedSach = await prisma.sach.update({
    where: { MaSach: id },
    data: {
      ...sachData,
    },
  });

  return updatedSach;
};

export const deleteSach = async (id: string) => {
  const oldSach = await prisma.sach.findUnique({
    where: { MaSach: id },
  });

  if (!oldSach) {
    throw new EntityNotFoundException(`Không tìm thấy sách với mã ${id}`);
  }

  await prisma.sach.update({
    where: { MaSach: id },
    data: {
      DaXoa: true,
    },
  });
};
