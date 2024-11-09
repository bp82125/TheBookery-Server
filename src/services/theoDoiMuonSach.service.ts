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
import { BookNotReturnedException } from "../exceptions/BookNotReturnedException";

export const getAllTDMS = async (
  page: number,
  limit: number,
  orderByClause: object,
  whereClause: object
) => {
  const skip = (page - 1) * limit;
  const [TDMSs, total] = await Promise.all([
    prisma.theoDoiMuonSach.findMany({
      where: whereClause,
      skip: skip,
      take: limit,
      orderBy: orderByClause,
      include: {
        DocGia: true,
        Sach: true,
      },
    }),
    prisma.theoDoiMuonSach.count({ where: whereClause }),
  ]);

  return { TDMSs, total };
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
  const docGia = await prisma.docGia.findUnique({
    where: { MaDocGia: data.MaDocGia },
  });

  if (!docGia) {
    throw new EntityNotFoundException(
      `Không tìm thấy đọc giả với mã ${data.MaDocGia}`
    );
  }

  const sach = await prisma.sach.findUnique({
    where: { MaSach: data.MaSach },
    include: { NhaXuatBan: true },
  });

  if (!sach) {
    throw new EntityNotFoundException(
      `Không tìm thấy sách với mã ${data.MaSach}`
    );
  }

  const existingTDMS = await prisma.theoDoiMuonSach.findFirst({
    where: {
      MaSach: data.MaSach,
      TrangThaiMuonSach: {
        notIn: ["RETURNED", "REJECTED"],
      },
      MaDocGia: data.MaDocGia,
    },
    include: {
      DocGia: true,
      Sach: true,
    },
  });

  if (existingTDMS?.TrangThaiMuonSach === "PENDING") {
    throw new BookNotReturnedException(
      `Sách ${sach.TenSach} đã có yêu cầu mượn của đọc giả ${docGia.HoTen}`
    );
  }
  if (existingTDMS?.TrangThaiMuonSach === "APPROVED") {
    throw new BookNotReturnedException(
      `Sách ${sach.TenSach} đã được duyệt mượn nhưng chưa được đọc giả của đọc giả ${docGia.HoTen} lấy`
    );
  }

  if (existingTDMS?.TrangThaiMuonSach === "PICKED_UP") {
    throw new BookNotReturnedException(
      `Sách ${sach.TenSach} đã được đọc giả ${docGia.HoTen} lấy nhưng chưa trả`
    );
  }

  if (existingTDMS) {
    throw new BookNotReturnedException(
      `Đã tồn tại đơn mượn sách ${sach.TenSach} của đọc giả ${docGia.HoTen} trong hệ thống`
    );
  }

  const TDMS = await prisma.theoDoiMuonSach.create({ data });
  return TDMS;
};

export const approveOrReject = async (
  id: string,
  data: ApproveOrRejectTDMSDto
) => {
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

  if (data.TrangThaiMuonSach === "APPROVED" && TDMS.Sach.SoQuyen <= 0) {
    throw new NoCopiesAvailableException(
      `Sách ${TDMS.Sach.TenSach} hiện không còn quyển nào trong hệ thống`
    );
  }

  const updatedTDMS = await prisma.theoDoiMuonSach.update({
    where: { MaTDMS: id },
    data: {
      TrangThaiMuonSach: data.TrangThaiMuonSach,
      NgayDuyet: new Date(),
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
