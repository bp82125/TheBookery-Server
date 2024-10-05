import { Router } from "express";
import {
  createSachController,
  deleteSachController,
  getAllSachController,
  getSachByIdController,
  updateSachController,
} from "../controllers/sach.controller";
import { asyncHandler } from "../middleware/asyncHandler";
import { validateRequest } from "../middleware/validateRequest";
import { CreateSachDto, UpdateSachDto } from "../dto/sach.dto";

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
