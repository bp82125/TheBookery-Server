import { plainToInstance } from "class-transformer";
import {
  CreateNhaXuatBanDto,
  UpdateNhaXuatBanDto,
} from "../dto/nhaXuatBan.dto";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { prisma } from "../prisma/prismaClient";

export const getAllNhaXuatBan = async () => {
  return await prisma.nhaXuatBan.findMany({
    where: { DaXoa: false },
  });
};

export const getNhaXuatBanById = async (id: string) => {
  const nhaXuatBan = await prisma.nhaXuatBan.findUnique({
    where: { MaNXB: id },
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
