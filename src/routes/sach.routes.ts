import { Router } from "express";
import {
  createSachController,
  deleteSachController,
  getAllSachController,
  getSachByIdController,
  updateSachController,
} from "../controllers/sach.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { validateRequest } from "../middlewares/validateRequest";
import { CreateSachDto, UpdateSachDto } from "../dtos/sach.dto";

const sachRouter = Router();

sachRouter.get("/", asyncHandler(getAllSachController));

sachRouter.get("/:id", asyncHandler(getSachByIdController));

sachRouter.post(
  "/",
  validateRequest(CreateSachDto),
  asyncHandler(createSachController)
);

sachRouter.put(
  "/:id",
  validateRequest(UpdateSachDto),
  asyncHandler(updateSachController)
);

sachRouter.delete("/:id", asyncHandler(deleteSachController));

export default sachRouter;
