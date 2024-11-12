import {
  getChartData,
  getRecectTDMS,
  getTotalCounts,
} from "../services/overview.service";
import { apiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";
import HttpStatus from "http-status";

export const getTotalCountsController = async (req: Request, res: Response) => {
  const counts = await getTotalCounts();

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    counts,
    null,
    "Lấy thống kê tổng số thành công"
  );
};

export const getChartDataController = async (req: Request, res: Response) => {
  const dayCount = parseInt(req.query.dayCount as string) || 7;
  const counts = await getChartData(dayCount);

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    counts,
    null,
    "Lấy thống kê theo dõi mượn sách thành công"
  );
};

export const getRecentTDMSController = async (req: Request, res: Response) => {
  const latestRecords = await getRecectTDMS();

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    latestRecords,
    null,
    "Lấy các đơn mượn sách có thay đổi gần đây thành công"
  );
};
