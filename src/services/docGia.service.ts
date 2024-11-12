import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { CreateDocGiaDto, UpdateDocGiaDto } from "../dtos/docGia.dto";
import { prisma } from "../prisma/prismaClient";
import { plainToInstance } from "class-transformer";
import { AccountAlreadyLinkedException } from "../exceptions/AccountAlreadyLinkedException";

export const getAllDocGia = async (
  page: number,
  limit: number,
  orderByClause: object,
  whereClause: object
) => {
  const skip = (page - 1) * limit;
  const [docGias, total] = await Promise.all([
    prisma.docGia.findMany({
      where: whereClause,
      skip: skip,
      take: limit,
      orderBy: orderByClause,
      include: { TaiKhoan: true },
    }),
    prisma.docGia.count({ where: whereClause }),
  ]);

  return { docGias, total };
};

export const getDocGiaById = async (id: string) => {
  const docGia = await prisma.docGia.findUnique({
    where: { MaDocGia: id },
    include: { TaiKhoan: true },
  });

  if (!docGia) {
    throw new EntityNotFoundException(`Không tìm thấy độc giả với mã ${id}`);
  }

  return docGia;
};

export const createDocGia = async (data: CreateDocGiaDto) => {
  const MaTaiKhoan = data.MaTaiKhoan;

  const taiKhoan = await prisma.taiKhoan.findUnique({
    where: { MaTaiKhoan: MaTaiKhoan },
    include: {
      DocGia: true,
      NhanVien: true,
    },
  });

  if (!taiKhoan) {
    throw new EntityNotFoundException(
      `Không tìm thấy tài khoản với mã ${MaTaiKhoan}`
    );
  }

  if (taiKhoan.DocGia) {
    throw new AccountAlreadyLinkedException(
      `Tài khoản với mã ${MaTaiKhoan} đã được liên kết với một độc giả.`
    );
  }

  if (taiKhoan.NhanVien) {
    throw new AccountAlreadyLinkedException(
      `Tài khoản với mã ${MaTaiKhoan} đã được liên kết với một nhân viên.`
    );
  }

  const docGiaDto = plainToInstance(CreateDocGiaDto, data);
  const docGiaData = docGiaDto.toPrismaFormat();

  const docGia = await prisma.docGia.create({
    data: docGiaData,
    include: { TaiKhoan: true },
  });

  await prisma.docGia.update({
    where: {
      MaDocGia: docGia.MaDocGia,
    },
    data: {
      HoTen: `${docGia.HoLot} ${docGia.Ten}`,
    },
  });

  return docGia;
};

export const updateDocGia = async (id: string, data: UpdateDocGiaDto) => {
  const oldDocGia = await prisma.docGia.findUnique({
    where: { MaDocGia: id },
  });

  if (!oldDocGia) {
    throw new EntityNotFoundException(`Không tìm thấy độc giả với mã ${id}`);
  }

  const docGiaDto = plainToInstance(UpdateDocGiaDto, data);
  const docGiaData = docGiaDto.toPrismaFormat();

  const { MaDocGia, ...updatedFields } = oldDocGia;

  const docGia = await prisma.docGia.update({
    where: { MaDocGia: id },
    data: {
      ...updatedFields,
      ...docGiaData,
    },
  });

  const updatedDocGia = await prisma.docGia.update({
    where: {
      MaDocGia: docGia.MaDocGia,
    },
    data: {
      HoTen: `${docGia.HoLot} ${docGia.Ten}`,
    },
    include: { TaiKhoan: true },
  });

  return updatedDocGia;
};

export const deleteDocGia = async (id: string) => {
  const docGia = await prisma.docGia.findUnique({
    where: { MaDocGia: id },
  });

  if (!docGia) {
    throw new EntityNotFoundException(`Không tìm thấy độc giả với mã ${id}`);
  }

  await prisma.docGia.update({
    where: { MaDocGia: id },
    data: { DaXoa: true },
  });

  await prisma.taiKhoan.update({
    where: { MaTaiKhoan: docGia.MaTaiKhoan },
    data: { DaXoa: true, KichHoat: false },
  });

  await prisma.theoDoiMuonSach.deleteMany({
    where: { MaDocGia: id },
  });

  return { message: `Xóa đọc giả với mã ${id} thành công` };
};
