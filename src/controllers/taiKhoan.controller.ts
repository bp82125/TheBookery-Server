import { CreateTaiKhoanDto, LoginTaiKhoanDto } from "../dtos/taiKhoan.dto";
import {
  changeMatKhauTaiKhoan,
  createTaiKhoan,
  deleteTaiKhoan,
  getAllTaiKhoan,
  getTaiKhoanById,
  loginTaiKhoan,
  resetMatKhauTaiKhoan,
  toggleTaiKhoan,
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

export const loginTaiKhoanController = async (
  req: Request<{}, {}, LoginTaiKhoanDto>,
  res: Response
) => {
  const { user, token } = await loginTaiKhoan(req.body);

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    { user, token },
    null,
    "Đăng nhập thành công"
  );
};

export const toggleTaiKhoanController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const updatedTaiKhoan = await toggleTaiKhoan(id);
  const statusMessage = updatedTaiKhoan.KichHoat ? "kích hoạt" : "vô hiệu hóa";

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    updatedTaiKhoan,
    null,
    `Tài khoản với mã ${id} đã được ${statusMessage} thành công`
  );
};

export const resetMatKhauTaiKhoanController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { newMatKhau } = req.body;

  const updatedTaiKhoan = await resetMatKhauTaiKhoan(id, newMatKhau);

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    updatedTaiKhoan,
    null,
    `Mật khẩu cho tài khoản với mã ${id} đã được đặt lại thành công`
  );
};

export const changeMatKhauTaiKhoanController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { oldMatKhau, newMatKhau } = req.body;

  const updatedTaiKhoan = await changeMatKhauTaiKhoan(
    id,
    oldMatKhau,
    newMatKhau
  );

  return apiResponse(
    res,
    true,
    HttpStatus.OK,
    updatedTaiKhoan,
    null,
    `Mật khẩu cho tài khoản với mã ${id} đã được thay đổi thành công`
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
