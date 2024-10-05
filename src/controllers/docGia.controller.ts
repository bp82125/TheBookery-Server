import { CreateDocGiaDto, UpdateDocGiaDto } from "../dtos/docGia.dto";
import {
  createDocGia,
  deleteDocGia,
  getAllDocGia,
  getDocGiaById,
  updateDocGia,
} from "../services/docGia.service";
import { apiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";
import httpStatus from "http-status";

export const getAllDocGiaController = async (req: Request, res: Response) => {
  try {
    const docGias = await getAllDocGia();
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      docGias,
      null,
      "Lấy danh sách đọc giả thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const getDocGiaByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const docGia = await getDocGiaById(id);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      docGia,
      null,
      `Lấy đọc giả với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const createDocGiaController = async (
  req: Request<{}, {}, CreateDocGiaDto>,
  res: Response
) => {
  try {
    const newDocGia = await createDocGia(req.body);
    return apiResponse(
      res,
      true,
      httpStatus.CREATED,
      newDocGia,
      null,
      "Thêm đọc giả thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const updateDocGiaController = async (
  req: Request<{ id: string }, {}, UpdateDocGiaDto>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedDocGia = await updateDocGia(id, req.body);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      updatedDocGia,
      null,
      `Cập nhật đọc giả với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteDocGiaController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const message = await deleteDocGia(id);
    return apiResponse(
      res,
      true,
      httpStatus.NO_CONTENT,
      message,
      null,
      `Xóa đọc giả với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};
