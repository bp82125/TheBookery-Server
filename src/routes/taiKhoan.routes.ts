import { Router } from "express";
import { asyncHandler } from "../middleware/asyncHandler";
import {
  createTaiKhoanController,
  deleteTaiKhoanController,
  getAllTaiKhoanController,
  getTaiKhoanByIdController,
} from "../controllers/taiKhoan.controller";
import { CreateTaiKhoanDto } from "../dto/taiKhoan.dto";
import { validateRequest } from "../middleware/validateRequest";

const taiKhoanRouter = Router();

taiKhoanRouter.get("/", asyncHandler(getAllTaiKhoanController));

taiKhoanRouter.get("/:id", asyncHandler(getTaiKhoanByIdController));

taiKhoanRouter.post(
  "/",
  validateRequest(CreateTaiKhoanDto),
  asyncHandler(createTaiKhoanController)
);

taiKhoanRouter.delete("/:id", asyncHandler(deleteTaiKhoanController));

export default taiKhoanRouter;
