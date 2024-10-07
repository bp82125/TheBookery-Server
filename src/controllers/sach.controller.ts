import { CreateSachDto, UpdateSachDto } from "../dtos/sach.dto";
import {
  createSach,
  deleteSach,
  getAllSach,
  getSachById,
  updateSach,
} from "../services/sach.service";
import { apiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";
import httpStatus from "http-status";
import { sachFields } from "../zods/sachFields";
import { getPaginationInfo, getPaginationParams } from "../utils/paginations";
import { getSortingClause } from "../utils/sortings";
import { getWhereClause } from "../utils/filterings";

export const getAllSachController = async (req: Request, res: Response) => {
  const { page, limit } = getPaginationParams(req);
  const orderByClause = getSortingClause(req, sachFields);
  const whereClause = getWhereClause(req, sachFields);

  const { sachs, total } = await getAllSach(
    page,
    limit,
    orderByClause,
    whereClause
  );

  const pagination = getPaginationInfo(total, page, limit);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    { sachs, pagination },
    null,
    "Lấy danh sách sách thành công"
  );
};

export const getSachByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const sach = await getSachById(id);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    sach,
    null,
    `Lấy sách với mã ${id} thành công`
  );
};

export const createSachController = async (
  req: Request<{}, {}, CreateSachDto>,
  res: Response
) => {
  const newSach = await createSach(req.body);
  return apiResponse(
    res,
    true,
    httpStatus.CREATED,
    newSach,
    null,
    "Thêm sách thành công"
  );
};

export const updateSachController = async (
  req: Request<{ id: string }, {}, UpdateSachDto>,
  res: Response
) => {
  const { id } = req.params;

  const updatedSach = await updateSach(id, req.body);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    updatedSach,
    null,
    `Cập nhật sách với mã ${id} thành công`
  );
};

export const deleteSachController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  await deleteSach(id);
  return apiResponse(
    res,
    true,
    httpStatus.NO_CONTENT,
    null,
    null,
    `Xóa sách với mã ${id} thành công`
  );
};
