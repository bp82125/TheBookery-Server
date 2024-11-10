import { Router } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import {
  approveOrRejectController,
  createTDMSController,
  deleteTDMSController,
  getAllTDMSController,
  getTDMSByIdController,
  pickUpBookController,
  returnBookController,
} from "../controllers/theoDoiMuonSach.controller";
import { validateRequest } from "../middlewares/validateRequest";
import {
  ApproveOrRejectTDMSDto,
  CreateTDMSDto,
  PickUpTDMSDto,
} from "../dtos/theoDoiMuonSach.dto";
import { validateMongoId } from "../middlewares/validateMongoId";
import { protectRoute } from "../middlewares/auth";

const theoDoiMuonSachRouter = Router();

theoDoiMuonSachRouter.get(
  "/",
  protectRoute,
  asyncHandler(getAllTDMSController)
);

theoDoiMuonSachRouter.get(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(getTDMSByIdController)
);

theoDoiMuonSachRouter.post(
  "/",
  protectRoute,
  validateRequest(CreateTDMSDto),
  asyncHandler(createTDMSController)
);

theoDoiMuonSachRouter.patch(
  "/:id/duyet",
  protectRoute,
  validateMongoId,
  validateRequest(ApproveOrRejectTDMSDto),
  asyncHandler(approveOrRejectController)
);

theoDoiMuonSachRouter.patch(
  "/:id/lay-sach",
  protectRoute,
  validateMongoId,
  validateRequest(PickUpTDMSDto),
  asyncHandler(pickUpBookController)
);

theoDoiMuonSachRouter.patch(
  "/:id/tra-sach",
  protectRoute,
  validateMongoId,
  asyncHandler(returnBookController)
);

theoDoiMuonSachRouter.delete(
  "/:id",
  protectRoute,
  validateMongoId,
  asyncHandler(deleteTDMSController)
);

export default theoDoiMuonSachRouter;
