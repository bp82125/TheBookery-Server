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

export const getAllSachController = async (req: Request, res: Response) => {
  try {
    const sachs = await getAllSach();
    return apiResponse(
      res,
      true,
      200,
      sachs,
      null,
      "Lấy danh sách sách thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const getSachByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const sach = await getSachById(id);
    return apiResponse(
      res,
      true,
      200,
      sach,
      null,
      `Lấy sách với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const createSachController = async (
  req: Request<{}, {}, CreateSachDto>,
  res: Response
) => {
  try {
    const newSach = await createSach(req.body);
    return apiResponse(res, true, 201, newSach, null, "Thêm sách  thành công");
  } catch (error) {
    throw error;
  }
};

export const updateSachController = async (
  req: Request<{ id: string }, {}, UpdateSachDto>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedSach = await updateSach(id, req.body);
    return apiResponse(
      res,
      true,
      200,
      updatedSach,
      null,
      `Cập nhật sách với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteSachController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  try {
    await deleteSach(id);
    return apiResponse(
      res,
      true,
      200,
      null,
      null,
      `Xóa sách với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};
