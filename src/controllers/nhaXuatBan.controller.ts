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
import httpStatus from "http-status";

export const getAllNhaXuatBanController = async (
  req: Request,
  res: Response
) => {
  const docGias = await getAllNhaXuatBan();
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    docGias,
    null,
    "Lấy danh sách nhà xuất bản thành công"
  );
};

export const getNhaXuatBanByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const docGia = await getNhaXuatBanById(id);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    docGia,
    null,
    `Lấy nhà xuất bản với mã ${id} thành công`
  );
};

export const createNhaXuatBanController = async (
  req: Request<{}, {}, CreateNhaXuatBanDto>,
  res: Response
) => {
  const newNhaXuatBan = await createNhaXuatBan(req.body);
  return apiResponse(
    res,
    true,
    httpStatus.CREATED,
    newNhaXuatBan,
    null,
    "Thêm nhà xuất bản thành công"
  );
};

export const updateNhaXuatBanController = async (
  req: Request<{ id: string }, {}, UpdateNhaXuatBanDto>,
  res: Response
) => {
  const { id } = req.params;
  const updatedNhaXuatBan = await updateNhaXuatBan(id, req.body);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    updatedNhaXuatBan,
    null,
    `Cập nhật nhà xuất bản với mã ${id} thành công`
  );
};

export const deleteNhaXuatBanController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  await deleteNhaXuatBan(id);
  return apiResponse(
    res,
    true,
    httpStatus.NO_CONTENT,
    null,
    null,
    `Xóa nhà xuất bản với mã ${id} thành công`
  );
};
