import { CreateTaiKhoanDto } from "../dto/taiKhoan.dto";
import {
  createTaiKhoan,
  deleteTaiKhoan,
  getAllTaiKhoan,
  getTaiKhoanById,
} from "../services/taiKhoan.service";
import { apiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";
import HttpStatus from "http-status";

export const getAllTaiKhoanController = async (req: Request, res: Response) => {
  try {
    const taiKhoan = await getAllTaiKhoan();
    return apiResponse(
      res,
      true,
      HttpStatus.OK,
      taiKhoan,
      null,
      "Lấy tất cả tài khoản thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const getTaiKhoanByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const taiKhoan = await getTaiKhoanById(id);
    return apiResponse(
      res,
      true,
      HttpStatus.OK,
      taiKhoan,
      null,
      `Lấy tài khoản với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const createTaiKhoanController = async (
  req: Request<{}, {}, CreateTaiKhoanDto>,
  res: Response
) => {
  try {
    const newTaiKhoan = await createTaiKhoan(req.body);
    return apiResponse(
      res,
      true,
      HttpStatus.CREATED,
      newTaiKhoan,
      null,
      "Tài khoản mới được tạo thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const deleteTaiKhoanController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTaiKhoan(id);
    return apiResponse(
      res,
      true,
      HttpStatus.NO_CONTENT,
      null,
      null,
      `Xóa tài khoản với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};
