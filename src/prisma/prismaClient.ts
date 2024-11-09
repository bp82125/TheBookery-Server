import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  result: {
    docGia: {
      HoTen: {
        needs: { HoLot: true, Ten: true },
        compute(docGia) {
          return `${docGia.HoLot} ${docGia.Ten}`;
        },
      },
    },
  },
});

export { prisma };
