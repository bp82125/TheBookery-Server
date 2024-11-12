import { prisma } from "../prisma/prismaClient";
import { TrangThaiMuonSach } from "@prisma/client";

export const getTotalCounts = async () => {
  const sachCounts = await prisma.sach.count({
    where: { DaXoa: false },
  });
  const docGiaCounts = await prisma.docGia.count({
    where: { DaXoa: false },
  });
  const nhanVienCounts = await prisma.nhanVien.count({
    where: { DaXoa: false },
  });
  const theoDoiMuonSachCounts = await prisma.theoDoiMuonSach.count({
    where: { DaXoa: false },
  });

  return {
    sach: sachCounts,
    docGia: docGiaCounts,
    nhanVien: nhanVienCounts,
    theoDoiMuonSach: theoDoiMuonSachCounts,
  };
};

interface ChartData {
  date: string;
  "Chờ duyệt": number;
  "Đã duyệt": number;
  "Bị từ chối": number;
  "Đã lấy sách": number;
  "Đã trả sách": number;
}

const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

const fetchTheoDoiMuonSachData = async (dayCount: number) => {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - dayCount);

  return await prisma.theoDoiMuonSach.findMany({
    where: {
      DaXoa: false,
      OR: [
        { NgayYeuCau: { gte: startDate, lte: today } },
        { NgayDuyet: { gte: startDate, lte: today } },
        { NgayMuon: { gte: startDate, lte: today } },
        { NgayTra: { gte: startDate, lte: today } },
      ],
    },
  });
};

const processData = (data: any[], dayCount: number): ChartData[] => {
  const chartData: { [key: string]: ChartData } = {};

  for (let i = dayCount - 1; i >= 0; i--) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - i);
    const dateStr = formatDate(currentDate);
    chartData[dateStr] = {
      date: dateStr,
      "Chờ duyệt": 0,
      "Đã duyệt": 0,
      "Bị từ chối": 0,
      "Đã lấy sách": 0,
      "Đã trả sách": 0,
    };
  }

  data.forEach((item) => {
    const { NgayYeuCau, NgayDuyet, NgayMuon, NgayTra, TrangThaiMuonSach } =
      item;

    if (NgayYeuCau) {
      const yeuCauDate = formatDate(new Date(NgayYeuCau));
      if (chartData[yeuCauDate]) {
        chartData[yeuCauDate]["Chờ duyệt"] += 1;
      }
    }
    if (NgayDuyet) {
      const duyetDate = formatDate(new Date(NgayDuyet));
      if (chartData[duyetDate]) {
        if (TrangThaiMuonSach === "REJECTED") {
          chartData[duyetDate]["Bị từ chối"] += 1;
        } else {
          chartData[duyetDate]["Đã duyệt"] += 1;
        }
      }
    }
    if (NgayMuon) {
      const muonDate = formatDate(new Date(NgayMuon));
      if (chartData[muonDate]) {
        chartData[muonDate]["Đã lấy sách"] += 1;
      }
    }
    if (NgayTra) {
      const traDate = formatDate(new Date(NgayTra));
      if (chartData[traDate]) {
        chartData[traDate]["Đã trả sách"] += 1;
      }
    }
  });

  return Object.values(chartData);
};

export const getChartData = async (dayCount: number): Promise<ChartData[]> => {
  const theoDoiMuonSachData = await fetchTheoDoiMuonSachData(dayCount);
  return processData(theoDoiMuonSachData, dayCount);
};

export const getRecectTDMS = async () => {
  const latestRecords = await prisma.theoDoiMuonSach.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    take: 6,
    include: {
      DocGia: true,
      Sach: true,
    },
  });

  return latestRecords;
};
