import { Router } from "express";
import {
  getAllDocGiaController,
  getDocGiaByIdController,
  createDocGiaController,
  updateDocGiaController,
  deleteDocGiaController,
} from "../controllers/docGia.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { validateRequest } from "../middlewares/validateRequest";
import { CreateDocGiaDto, UpdateDocGiaDto } from "../dtos/docGia.dto";
import { validateMongoId } from "../middlewares/validateMongoId";
import { protectRoute } from "../middlewares/auth";

const docGiaRouter = Router();

docGiaRouter.get("/", protectRoute, asyncHandler(getAllDocGiaController));

docGiaRouter.get(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(getDocGiaByIdController)
);

docGiaRouter.post(
  "/",
  protectRoute,
  validateRequest(CreateDocGiaDto),
  asyncHandler(createDocGiaController)
);

docGiaRouter.put(
  "/:id",
  protectRoute,
  validateMongoId,
  validateRequest(UpdateDocGiaDto),
  asyncHandler(updateDocGiaController)
);

docGiaRouter.delete(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(deleteDocGiaController)
);

export default docGiaRouter;
