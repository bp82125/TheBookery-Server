import { plainToInstance } from "class-transformer";
import {
  ApproveOrRejectTDMSDto,
  CreateTDMSDto,
  PickUpTDMSDto,
} from "../dtos/theoDoiMuonSach.dto";
import { BookNotPickedUpException } from "../exceptions/BookNotPickedUpException";
import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { InvalidPickupStatusException } from "../exceptions/InvalidPickupStatusException";
import { NoCopiesAvailableException } from "../exceptions/NoCopiesAvailableException";
import { prisma } from "../prisma/prismaClient";

export const getAllTDMS = async () => {
  return prisma.theoDoiMuonSach.findMany({
    include: {
      DocGia: true,
      Sach: true,
    },
  });
};

export const getTDMSById = async (id: string) => {
  const TDMS = await prisma.theoDoiMuonSach.findUnique({
    where: { MaTDMS: id },
    include: {
      DocGia: true,
      Sach: true,
    },
  });

  if (!TDMS) {
    throw new EntityNotFoundException(
      `Không thể tìm thấy theo dõi mượn sách với mã ${id}`
    );
  }

  return TDMS;
};

export const createTDMS = async (data: CreateTDMSDto) => {
  const TDMS = await prisma.theoDoiMuonSach.create({ data });
  return TDMS;
};

export const approveOrReject = async (
  id: string,
  data: ApproveOrRejectTDMSDto
) => {
  const TDMS = await prisma.theoDoiMuonSach.findUnique({
    where: { MaTDMS: id },
    include: { Sach: true },
  });

  if (!TDMS) {
    throw new EntityNotFoundException(
      `Không thể tìm thấy theo dõi mượn sách với mã ${id}`
    );
  }

  if (data.TrangThaiMuonSach === "APPROVED" && TDMS.Sach.SoQuyen <= 0) {
    throw new NoCopiesAvailableException();
  }

  const updatedTDMS = await prisma.theoDoiMuonSach.update({
    where: { MaTDMS: id },
    data: {
      TrangThaiMuonSach: data.TrangThaiMuonSach,
      NgayDuyet: data.TrangThaiMuonSach === "APPROVED" ? new Date() : null,
    },
    include: {
      DocGia: true,
      Sach: true,
    },
  });

  if (data.TrangThaiMuonSach === "APPROVED") {
    await prisma.sach.update({
      where: { MaSach: TDMS.MaSach },
      data: { SoQuyen: { decrement: 1 } },
    });
  }

  return updatedTDMS;
};

export const pickUpBook = async (id: string, data: PickUpTDMSDto) => {
  const TDMS = await prisma.theoDoiMuonSach.findUnique({
    where: { MaTDMS: id },
  });

  if (!TDMS) {
    throw new EntityNotFoundException(
      `Không thể tìm thấy theo dõi mượn sách với mã ${id}`
    );
  }

  if (TDMS.TrangThaiMuonSach !== "APPROVED") {
    throw new InvalidPickupStatusException(
      "Chỉ có sách đã được duyệt mới có thể nhận"
    );
  }

  const pickUpBookDto = plainToInstance(PickUpTDMSDto, data);
  const pickUpBookData = pickUpBookDto.toPrismaFormat();

  const updatedTDMS = await prisma.theoDoiMuonSach.update({
    where: { MaTDMS: id },
    data: {
      TrangThaiMuonSach: "PICKED_UP",
      NgayMuon: new Date(),
      ...pickUpBookData,
    },
    include: {
      DocGia: true,
      Sach: true,
    },
  });

  return updatedTDMS;
};

export const returnBook = async (id: string) => {
  const TDMS = await prisma.theoDoiMuonSach.findUnique({
    where: { MaTDMS: id },
  });

  if (!TDMS) {
    throw new EntityNotFoundException(
      `Không thể tìm thấy theo dõi mượn sách với mã ${id}`
    );
  }

  if (TDMS.TrangThaiMuonSach !== "PICKED_UP") {
    throw new BookNotPickedUpException();
  }

  const updatedTDMS = await prisma.theoDoiMuonSach.update({
    where: { MaTDMS: id },
    data: {
      TrangThaiMuonSach: "RETURNED",
      NgayTra: new Date(),
    },
    include: {
      DocGia: true,
      Sach: true,
    },
  });

  await prisma.sach.update({
    where: { MaSach: TDMS.MaSach },
    data: { SoQuyen: { increment: 1 } },
  });

  return updatedTDMS;
};

export const deleteTDMS = async (id: string) => {
  const TDMS = await prisma.theoDoiMuonSach.findUnique({
    where: { MaTDMS: id },
  });

  if (!TDMS) {
    throw new EntityNotFoundException(
      `Không thể tìm thấy theo dõi mượn sách với mã ${id}`
    );
  }

  await prisma.theoDoiMuonSach.delete({
    where: { MaTDMS: id },
  });
};