import { CreateTaiKhoanDto } from "../dtos/taiKhoan.dto";
import {
  createTaiKhoan,
  deleteTaiKhoan,
  getAllTaiKhoan,
  getTaiKhoanById,
} from "../services/taiKhoan.service";
import { apiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";
import HttpStatus from "http-status";
import { getPaginationInfo, getPaginationParams } from "../utils/paginations";
import { getSortingClause } from "../utils/sortings";
import { getWhereClause } from "../utils/filterings";
import { taiKhoanFields } from "../zods/taiKhoanFields";

export const getAllTaiKhoanController = async (req: Request, res: Response) => {
  const { page, limit } = getPaginationParams(req);
  const orderByClause = getSortingClause(req, taiKhoanFields);
  const whereClause = getWhereClause(req, taiKhoanFields);

  const { taiKhoans, total } = await getAllTaiKhoan(
    page,
    limit,
    orderByClause,
    whereClause
  );

  const pagination = getPaginationInfo(total, page, limit);

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    { taiKhoans, pagination },
    null,
    "Lấy tất cả tài khoản thành công"
  );
};

export const getTaiKhoanByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const taiKhoan = await getTaiKhoanById(id);
  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    taiKhoan,
    null,
    `Lấy tài khoản với mã ${id} thành công`
  );
};

export const createTaiKhoanController = async (
  req: Request<{}, {}, CreateTaiKhoanDto>,
  res: Response
) => {
  const newTaiKhoan = await createTaiKhoan(req.body);
  return apiResponse(
    res,
    true,
    HttpStatus.CREATED,
    newTaiKhoan,
    null,
    "Tài khoản mới được tạo thành công"
  );
};

export const deleteTaiKhoanController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteTaiKhoan(id);
  return apiResponse(
    res,
    true,
    HttpStatus.NO_CONTENT,
    null,
    null,
    `Xóa tài khoản với mã ${id} thành công`
  );
};
