import { Request, Response } from "express";
import {
  createTDMS,
  getAllTDMS,
  getTDMSById,
  approveOrReject,
  deleteTDMS,
  pickUpBook,
  returnBook,
} from "../services/theoDoiMuonSach.service";
import { apiResponse } from "../utils/apiResponse";
import {
  ApproveOrRejectTDMSDto,
  CreateTDMSDto,
  PickUpTDMSDto,
} from "../dtos/theoDoiMuonSach.dto";
import httpStatus from "http-status";

export const getAllTDMSController = async (req: Request, res: Response) => {
  try {
    const TDMSs = await getAllTDMS();
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      TDMSs,
      null,
      "Lấy danh sách theo dõi mượn sách thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const getTDMSByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const TDMS = await getTDMSById(id);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      TDMS,
      null,
      `Lấy theo dõi mượn sách với ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const createTDMSController = async (
  req: Request<{}, {}, CreateTDMSDto>,
  res: Response
) => {
  try {
    const newTDMS = await createTDMS(req.body);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      newTDMS,
      null,
      "Tạo theo dõi mượn sách mới thành công"
    );
  } catch (error) {
    throw error;
  }
};

export const approveOrRejectController = async (
  req: Request<{ id: string }, {}, ApproveOrRejectTDMSDto>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedTDMS = await approveOrReject(id, req.body);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      updatedTDMS,
      null,
      `Duyệt yêu cầu mượn sách với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const pickUpBookController = async (
  req: Request<{ id: string }, {}, PickUpTDMSDto>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const updatedTDMS = await pickUpBook(id, req.body);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      updatedTDMS,
      null,
      `Cho mượn sách với mã theo dõi ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const returnBookController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedTDMS = await returnBook(id);
    return apiResponse(
      res,
      true,
      httpStatus.OK,
      updatedTDMS,
      null,
      `Trả sách với mã theo dõi ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};

export const deleteTDMSController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteTDMS(id);
    return apiResponse(
      res,
      true,
      httpStatus.NO_CONTENT,
      null,
      null,
      `Xóa theo dõi mượn sách với mã ${id} thành công`
    );
  } catch (error) {
    throw error;
  }
};
