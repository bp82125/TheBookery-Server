import { Router } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import {
  createTaiKhoanController,
  deleteTaiKhoanController,
  getAllTaiKhoanController,
  getTaiKhoanByIdController,
  loginTaiKhoanController,
  resetMatKhauTaiKhoanController,
  toggleTaiKhoanController,
} from "../controllers/taiKhoan.controller";
import { CreateTaiKhoanDto } from "../dtos/taiKhoan.dto";
import { validateRequest } from "../middlewares/validateRequest";
import { validateAuthPayload } from "../middlewares/validateAuthPayload";
import { validateMongoId } from "../middlewares/validateMongoId";
import { protectRoute } from "../middlewares/auth";

const taiKhoanRouter = Router();

taiKhoanRouter.get("/", protectRoute, asyncHandler(getAllTaiKhoanController));

taiKhoanRouter.get(
  "/:id",
  validateMongoId,
  asyncHandler(getTaiKhoanByIdController)
);

taiKhoanRouter.post(
  "/",
  validateRequest(CreateTaiKhoanDto),
  asyncHandler(createTaiKhoanController)
);

taiKhoanRouter.post("/login", validateAuthPayload, loginTaiKhoanController);

taiKhoanRouter.patch("/:id/toggle", validateMongoId, toggleTaiKhoanController);

taiKhoanRouter.patch(
  "/:id/reset-password",
  validateMongoId,
  resetMatKhauTaiKhoanController
);

taiKhoanRouter.delete(
  "/:id",
  validateMongoId,
  asyncHandler(deleteTaiKhoanController)
);

export default taiKhoanRouter;
