import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
import { CreateDocGiaDto, UpdateDocGiaDto } from "../dto/docGia.dto";
import { prisma } from "../prisma/prismaClient";
import { plainToInstance } from "class-transformer";

export const getAllDocGia = async () => {
  return await prisma.docGia.findMany({
    where: { DaXoa: false },
  });
};

export const getDocGiaById = async (id: string) => {
  const docGia = await prisma.docGia.findUnique({
    where: { MaDocGia: id },
  });

  if (!docGia) {
    throw new EntityNotFoundException(`Không tìm thấy độc giả với mã ${id}`);
  }

  return docGia;
};

export const createDocGia = async (data: CreateDocGiaDto) => {
  const docGiaDto = plainToInstance(CreateDocGiaDto, data);
  const docGiaData = docGiaDto.toPrismaFormat();

  const docGia = await prisma.docGia.create({
    data: docGiaData,
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

  const updatedDocGia = await prisma.docGia.update({
    where: { MaDocGia: id },
    data: {
      ...updatedFields,
      ...docGiaData,
    },
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

  return { message: `Xóa độc giả với mã ${id} thành công` };
};
