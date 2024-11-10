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
import { validateMongoId } from "../middlewares/validateMongoId";
import { protectRoute } from "../middlewares/auth";
const sachRouter = Router();

sachRouter.get("/", protectRoute, asyncHandler(getAllSachController));

sachRouter.get(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(getSachByIdController)
);

sachRouter.post(
  "/",
  protectRoute,
  validateRequest(CreateSachDto),
  asyncHandler(createSachController)
);

sachRouter.put(
  "/:id",
  protectRoute,
  validateMongoId,
  validateRequest(UpdateSachDto),
  asyncHandler(updateSachController)
);

sachRouter.delete(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(deleteSachController)
);

export default sachRouter;
