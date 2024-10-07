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
import { getPaginationInfo, getPaginationParams } from "../utils/paginations";
import { getSortingClause } from "../utils/sortings";
import { getWhereClause } from "../utils/filterings";
import { docGiaFields } from "../zods/docGiaFields";

export const getAllDocGiaController = async (req: Request, res: Response) => {
  const { page, limit } = getPaginationParams(req);
  const orderByClause = getSortingClause(req, docGiaFields);
  const whereClause = getWhereClause(req, docGiaFields);

  const { docGias, total } = await getAllDocGia(
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
    { docGias, pagination },
    null,
    "Lấy danh sách đọc giả thành công"
  );
};

export const getDocGiaByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const docGia = await getDocGiaById(id);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    docGia,
    null,
    `Lấy đọc giả với mã ${id} thành công`
  );
};

export const createDocGiaController = async (
  req: Request<{}, {}, CreateDocGiaDto>,
  res: Response
) => {
  const newDocGia = await createDocGia(req.body);
  return apiResponse(
    res,
    true,
    httpStatus.CREATED,
    newDocGia,
    null,
    "Thêm đọc giả thành công"
  );
};

export const updateDocGiaController = async (
  req: Request<{ id: string }, {}, UpdateDocGiaDto>,
  res: Response
) => {
  const { id } = req.params;
  const updatedDocGia = await updateDocGia(id, req.body);
  return apiResponse(
    res,
    true,
    httpStatus.OK,
    updatedDocGia,
    null,
    `Cập nhật đọc giả với mã ${id} thành công`
  );
};

export const deleteDocGiaController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  const message = await deleteDocGia(id);
  return apiResponse(
    res,
    true,
    httpStatus.NO_CONTENT,
    message,
    null,
    `Xóa đọc giả với mã ${id} thành công`
  );
};
