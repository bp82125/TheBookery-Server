import { plainToInstance } from "class-transformer";
import { CreateSachDto, UpdateSachDto } from "../dtos/sach.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { prisma } from "../prisma/prismaClient";

export const getAllSach = async (
  page: number,
  limit: number,
  orderByClause: object,
  whereClause: object
) => {
  const skip = (page - 1) * limit;
  const [sachs, total] = await Promise.all([
    prisma.sach.findMany({
      where: whereClause,
      skip: skip,
      take: limit,
      orderBy: orderByClause,
      include: { NhaXuatBan: true },
    }),
    prisma.sach.count({ where: whereClause }),
  ]);

  return { sachs, total };
};

export const getSachById = async (id: string) => {
  const sach = await prisma.sach.findUnique({
    where: { MaSach: id },
    include: { NhaXuatBan: true },
  });

  if (!sach) {
    throw new EntityNotFoundException(`Không tìm thấy sách với mã ${id}`);
  }

  return sach;
};

export const createSach = async (data: CreateSachDto) => {
  const NXB = await prisma.nhaXuatBan.findUnique({
    where: { MaNXB: data.MaNXB },
  });

  if (!NXB) {
    throw new EntityNotFoundException(
      `Nhà xuất bản với mã ${data.MaNXB} không tìm thấy`
    );
  }

  const sach = await prisma.sach.create({
    data: data,
    include: { NhaXuatBan: true },
  });
  return sach;
};

export const updateSach = async (id: string, data: UpdateSachDto) => {
  const oldSach = await prisma.sach.findUnique({
    where: { MaSach: id },
    include: { NhaXuatBan: true },
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
    include: { NhaXuatBan: true },
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
