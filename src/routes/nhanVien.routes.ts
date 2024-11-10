import { Router } from "express";
import {
  getAllNhanVienController,
  getNhanVienByIdController,
  createNhanVienController,
  updateNhanVienController,
  deleteNhanVienController,
} from "../controllers/nhanVien.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { validateRequest } from "../middlewares/validateRequest";
import { CreateNhanVienDto, UpdateNhanVienDto } from "../dtos/nhanVien.dto";
import { validateMongoId } from "../middlewares/validateMongoId";
import { protectRoute } from "../middlewares/auth";

const nhanVienRouter = Router();

nhanVienRouter.get("/", protectRoute, asyncHandler(getAllNhanVienController));

nhanVienRouter.get(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(getNhanVienByIdController)
);

nhanVienRouter.post(
  "/",
  protectRoute,
  validateRequest(CreateNhanVienDto),

  asyncHandler(createNhanVienController)
);

nhanVienRouter.put(
  "/:id",
  protectRoute,
  validateMongoId,
  validateRequest(UpdateNhanVienDto),
  asyncHandler(updateNhanVienController)
);

nhanVienRouter.delete(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(deleteNhanVienController)
);

export default nhanVienRouter;
