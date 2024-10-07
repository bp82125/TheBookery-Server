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
import { validateSortingParams } from "../middlewares/sortingValidator";
import { docGiaFields } from "../utils/modelFields";
import { validatePaginationParams } from "../middlewares/paginationValidator";
import { getFieldNames } from "../utils/getFieldNames";
import { validateFilterParams } from "../middlewares/filterValidator";

const docGiaRouter = Router();

docGiaRouter.get(
  "/",
  validatePaginationParams(),
  validateSortingParams(getFieldNames(docGiaFields)),
  validateFilterParams(docGiaFields),
  asyncHandler(getAllDocGiaController)
);

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
