import { plainToInstance } from "class-transformer";
import {
  CreateNhaXuatBanDto,
  UpdateNhaXuatBanDto,
} from "../dtos/nhaXuatBan.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { prisma } from "../prisma/prismaClient";

export const getAllNhaXuatBan = async (
  page: number,
  limit: number,
  orderByClause: object,
  whereClause: object
) => {
  const skip = (page - 1) * limit;
  const [nhaXuatBans, total] = await Promise.all([
    prisma.nhaXuatBan.findMany({
      where: whereClause,
      skip: skip,
      take: limit,
      orderBy: orderByClause,
      include: {
        _count: {
          select: { Sach: true },
        },
      },
    }),

    prisma.nhaXuatBan.count({ where: whereClause }),
  ]);

  return { nhaXuatBans, total };
};

export const getNhaXuatBanById = async (id: string) => {
  const nhaXuatBan = await prisma.nhaXuatBan.findUnique({
    where: { MaNXB: id },
    include: {
      _count: {
        select: { Sach: true },
      },
    },
  });

  if (!nhaXuatBan) {
    throw new EntityNotFoundException(
      `Không tìm thấy nhà xuất bản với mã ${id}`
    );
  }

  return nhaXuatBan;
};

export const createNhaXuatBan = async (data: CreateNhaXuatBanDto) => {
  const nhaXuatBan = await prisma.nhaXuatBan.create({ data });
  return nhaXuatBan;
};

export const updateNhaXuatBan = async (
  id: string,
  data: UpdateNhaXuatBanDto
) => {
  const oldNhaXuatBan = await prisma.nhaXuatBan.findUnique({
    where: { MaNXB: id },
  });

  if (!oldNhaXuatBan) {
    throw new EntityNotFoundException(
      `Không tìm thấy nhà xuất bản với mã ${id}`
    );
  }

  const nhaXuatBanDto = plainToInstance(UpdateNhaXuatBanDto, data);
  const nhaXuatBanData = nhaXuatBanDto.toPrismaFormat();

  const updatedNhaXuatBan = await prisma.nhaXuatBan.update({
    where: { MaNXB: id },
    data: {
      ...nhaXuatBanData,
    },
  });

  return updatedNhaXuatBan;
};

export const deleteNhaXuatBan = async (id: string) => {
  const oldNhaXuatBan = await prisma.nhaXuatBan.findUnique({
    where: { MaNXB: id },
  });

  if (!oldNhaXuatBan) {
    throw new EntityNotFoundException(
      `Không tìm thấy nhà xuất bản với mã ${id}`
    );
  }

  await prisma.nhaXuatBan.update({
    where: { MaNXB: id },
    data: { DaXoa: true },
  });
};
