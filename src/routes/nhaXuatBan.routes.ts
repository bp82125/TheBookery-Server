import { Router } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import {
  createNhaXuatBanController,
  deleteNhaXuatBanController,
  getAllNhaXuatBanController,
  getNhaXuatBanByIdController,
  updateNhaXuatBanController,
} from "../controllers/nhaXuatBan.controller";
import {
  CreateNhaXuatBanDto,
  UpdateNhaXuatBanDto,
} from "../dtos/nhaXuatBan.dto";
import { validateRequest } from "../middlewares/validateRequest";
import { validateMongoId } from "../middlewares/validateMongoId";
import { protectRoute } from "../middlewares/auth";

const nhaXuatBanRouter = Router();

nhaXuatBanRouter.get(
  "/",
  protectRoute,

  asyncHandler(getAllNhaXuatBanController)
);

nhaXuatBanRouter.get(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(getNhaXuatBanByIdController)
);

nhaXuatBanRouter.post(
  "/",
  protectRoute,
  validateRequest(CreateNhaXuatBanDto),
  asyncHandler(createNhaXuatBanController)
);

nhaXuatBanRouter.put(
  "/:id",
  protectRoute,
  validateMongoId,
  validateRequest(UpdateNhaXuatBanDto),
  asyncHandler(updateNhaXuatBanController)
);

nhaXuatBanRouter.delete(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(deleteNhaXuatBanController)
);

export default nhaXuatBanRouter;
