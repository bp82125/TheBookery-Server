import { Router } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import {
  changeMatKhauTaiKhoanController,
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
  protectRoute,
  validateMongoId,
  asyncHandler(getTaiKhoanByIdController)
);

taiKhoanRouter.post(
  "/",
  validateRequest(CreateTaiKhoanDto),
  asyncHandler(createTaiKhoanController)
);

taiKhoanRouter.post(
  "/login",
  validateAuthPayload,
  asyncHandler(loginTaiKhoanController)
);

taiKhoanRouter.patch(
  "/:id/toggle",
  protectRoute,
  validateMongoId,
  asyncHandler(toggleTaiKhoanController)
);

taiKhoanRouter.patch(
  "/:id/reset-password",
  protectRoute,
  validateMongoId,
  asyncHandler(resetMatKhauTaiKhoanController)
);

taiKhoanRouter.patch(
  "/:id/change-password",
  validateMongoId,
  asyncHandler(changeMatKhauTaiKhoanController)
);

taiKhoanRouter.delete(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(deleteTaiKhoanController)
);

export default taiKhoanRouter;
