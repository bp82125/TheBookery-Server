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

const theoDoiMuonSachRouter = Router();

theoDoiMuonSachRouter.get("/", asyncHandler(getAllTDMSController));

theoDoiMuonSachRouter.get("/:id", asyncHandler(getTDMSByIdController));

theoDoiMuonSachRouter.post(
  "/",
  validateRequest(CreateTDMSDto),
  asyncHandler(createTDMSController)
);

theoDoiMuonSachRouter.patch(
  "/:id/duyet",
  validateRequest(ApproveOrRejectTDMSDto),
  asyncHandler(approveOrRejectController)
);

theoDoiMuonSachRouter.patch(
  "/:id/lay-sach",
  validateRequest(PickUpTDMSDto),
  asyncHandler(pickUpBookController)
);

theoDoiMuonSachRouter.patch(
  "/:id/tra-sach",
  asyncHandler(returnBookController)
);

theoDoiMuonSachRouter.delete("/:id", asyncHandler(deleteTDMSController));

export default theoDoiMuonSachRouter;
