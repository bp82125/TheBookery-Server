import { Router } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import {
  createTaiKhoanController,
  deleteTaiKhoanController,
  getAllTaiKhoanController,
  getTaiKhoanByIdController,
  resetMatKhauTaiKhoanController,
  toggleTaiKhoanController,
} from "../controllers/taiKhoan.controller";
import { CreateTaiKhoanDto } from "../dtos/taiKhoan.dto";
import { validateRequest } from "../middlewares/validateRequest";

const taiKhoanRouter = Router();

taiKhoanRouter.get("/", asyncHandler(getAllTaiKhoanController));

taiKhoanRouter.get("/:id", asyncHandler(getTaiKhoanByIdController));

taiKhoanRouter.post(
  "/",
  validateRequest(CreateTaiKhoanDto),
  asyncHandler(createTaiKhoanController)
);

taiKhoanRouter.patch("/:id/toggle", toggleTaiKhoanController);

taiKhoanRouter.patch("/:id/reset-password", resetMatKhauTaiKhoanController);

taiKhoanRouter.delete("/:id", asyncHandler(deleteTaiKhoanController));

export default taiKhoanRouter;
