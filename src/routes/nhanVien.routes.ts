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

const nhanVienRouter = Router();

nhanVienRouter.get("/", asyncHandler(getAllNhanVienController));

nhanVienRouter.get("/:id", asyncHandler(getNhanVienByIdController));

nhanVienRouter.post(
  "/",
  validateRequest(CreateNhanVienDto),
  asyncHandler(createNhanVienController)
);

nhanVienRouter.put(
  "/:id",
  validateRequest(UpdateNhanVienDto),
  asyncHandler(updateNhanVienController)
);

nhanVienRouter.delete("/:id", asyncHandler(deleteNhanVienController));

export default nhanVienRouter;
