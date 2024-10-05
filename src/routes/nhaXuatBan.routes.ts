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

const nhaXuatBanRouter = Router();

nhaXuatBanRouter.get("/", asyncHandler(getAllNhaXuatBanController));

nhaXuatBanRouter.get("/:id", asyncHandler(getNhaXuatBanByIdController));

nhaXuatBanRouter.post(
  "/",
  validateRequest(CreateNhaXuatBanDto),
  asyncHandler(createNhaXuatBanController)
);

nhaXuatBanRouter.put(
  "/:id",
  validateRequest(UpdateNhaXuatBanDto),
  asyncHandler(updateNhaXuatBanController)
);

nhaXuatBanRouter.delete("/:id", asyncHandler(deleteNhaXuatBanController));

export default nhaXuatBanRouter;
