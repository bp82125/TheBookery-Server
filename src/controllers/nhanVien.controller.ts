import { Request, Response } from "express";
import {
  getAllNhanVien,
  getNhanVienById,
  createNhanVien,
  updateNhanVien,
  deleteNhanVien,
} from "../services/nhanVien.service";
import { CreateNhanVienDto, UpdateNhanVienDto } from "../dtos/nhanVien.dto";
import { apiResponse } from "../utils/apiResponse";
import httpStatus from "http-status";
import { nhanVienFields } from "../zods/nhanVienFields";
import { getPaginationInfo, getPaginationParams } from "../utils/paginations";
import { getSortingClause } from "../utils/sortings";
import { getWhereClause } from "../utils/filterings";

export const getAllNhanVienController = async (req: Request, res: Response) => {
  const { page, limit } = getPaginationParams(req);
  const orderByClause = getSortingClause(req, nhanVienFields);
  const whereClause = getWhereClause(req, nhanVienFields);

  const { nhanViens, total, chucVus } = await getAllNhanVien(
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
    { nhanViens, pagination, chucVus },
    null,
    "Lấy danh sách nhân viên thành công"
  );
};

export const getNhanVienByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const nhanVien = await getNhanVienById(id);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    nhanVien,
    null,
    `Lấy nhân viên với mã ${id} thành công`
  );
};

export const createNhanVienController = async (
  req: Request<{}, {}, CreateNhanVienDto>,
  res: Response
) => {
  const newNhanVien = await createNhanVien(req.body);
  return apiResponse(
    res,
    true,
    httpStatus.CREATED,
    newNhanVien,
    null,
    "Thêm nhân viên thành công"
  );
};

export const updateNhanVienController = async (
  req: Request<{ id: string }, {}, UpdateNhanVienDto>,
  res: Response
) => {
  const { id } = req.params;
  const updatedNhanVien = await updateNhanVien(id, req.body);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    updatedNhanVien,
    null,
    `Cập nhật nhân viên với mã ${id} thành công`
  );
};

export const deleteNhanVienController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  await deleteNhanVien(id);
  return apiResponse(
    res,
    true,
    httpStatus.NO_CONTENT,
    null,
    null,
    `Xóa nhân viên với mã ${id} thành công`
  );
};
