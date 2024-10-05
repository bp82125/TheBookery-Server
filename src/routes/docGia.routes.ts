import { Router } from "express";
import {
  getAllDocGiaController,
  getDocGiaByIdController,
  createDocGiaController,
  updateDocGiaController,
  deleteDocGiaController,
} from "../controllers/docGia.controller";
import { asyncHandler } from "../middleware/asyncHandler";
import { validateRequest } from "../middleware/validateRequest";
import { CreateDocGiaDto, UpdateDocGiaDto } from "../dto/docGia.dto";

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