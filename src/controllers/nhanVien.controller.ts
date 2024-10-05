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

export const getAllNhanVienController = async (req: Request, res: Response) => {
  try {
    console.log("hi");
    const nhanViens = await getAllNhanVien();
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      nhanViens,
      null,
      "Lấy danh sách nhân viên thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const getNhanVienByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const nhanVien = await getNhanVienById(id);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      nhanVien,
      null,
      `Lấy nhân viên với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const createNhanVienController = async (
  req: Request<{}, {}, CreateNhanVienDto>,
  res: Response
) => {
  try {
    const newNhanVien = await createNhanVien(req.body);
    return apiResponse(
      res,
      true,
      httpStatus.CREATED,
      newNhanVien,
      null,
      "Thêm nhân viên thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const updateNhanVienController = async (
  req: Request<{ id: string }, {}, UpdateNhanVienDto>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedNhanVien = await updateNhanVien(id, req.body);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      updatedNhanVien,
      null,
      `Cập nhật nhân viên với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteNhanVienController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  try {
    await deleteNhanVien(id);
    return apiResponse(
      res,
      true,
      httpStatus.NO_CONTENT,
      null,
      null,
      `Xóa nhân viên với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};