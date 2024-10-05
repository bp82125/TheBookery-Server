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

const docGiaRouter = Router();

docGiaRouter.get("/", asyncHandler(getAllDocGiaController));

docGiaRouter.get("/:id", asyncHandler(getDocGiaByIdController));

docGiaRouter.post(
  "/",
  validateRequest(CreateDocGiaDto),
  asyncHandler(createDocGiaController)
);

docGiaRouter.put(
  "/:id",
  validateRequest(UpdateDocGiaDto),
  asyncHandler(updateDocGiaController)
);

docGiaRouter.delete("/:id", asyncHandler(deleteDocGiaController));

export default docGiaRouter;
