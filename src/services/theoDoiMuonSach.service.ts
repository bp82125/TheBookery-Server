import { EntityNotFoundException } from "../exceptions/EntityNotFoundException";
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
};

export const createTDMS = async (data) => {
    
}
