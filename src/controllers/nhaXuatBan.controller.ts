import {
  CreateNhaXuatBanDto,
  UpdateNhaXuatBanDto,
} from "../dtos/nhaXuatBan.dto";
import {
  createNhaXuatBan,
  deleteNhaXuatBan,
  getAllNhaXuatBan,
  getNhaXuatBanById,
  updateNhaXuatBan,
} from "../services/nhaXuatBan.service";
import { apiResponse } from "../utils/apiResponse";
import { Request, Response } from "express";

export const getAllNhaXuatBanController = async (
  req: Request,
  res: Response
) => {
  try {
    const docGias = await getAllNhaXuatBan();
    return apiResponse(
      res,
      true,
      200,
      docGias,
      null,
      "Lấy danh sách nhà xuất bản thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const getNhaXuatBanByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const docGia = await getNhaXuatBanById(id);
    return apiResponse(
      res,
      true,
      200,
      docGia,
      null,
      `Lấy nhà xuất bản với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const createNhaXuatBanController = async (
  req: Request<{}, {}, CreateNhaXuatBanDto>,
  res: Response
) => {
  try {
    const newNhaXuatBan = await createNhaXuatBan(req.body);
    return apiResponse(
      res,
      true,
      201,
      newNhaXuatBan,
      null,
      "Thêm nhà xuất bản thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const updateNhaXuatBanController = async (
  req: Request<{ id: string }, {}, UpdateNhaXuatBanDto>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedNhaXuatBan = await updateNhaXuatBan(id, req.body);
    return apiResponse(
      res,
      true,
      200,
      updatedNhaXuatBan,
      null,
      `Cập nhật nhà xuất bản với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteNhaXuatBanController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  try {
    await deleteNhaXuatBan(id);
    return apiResponse(
      res,
      true,
      200,
      null,
      null,
      `Xóa nhà xuất bản với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};
