import { Router } from "express";
import { getCloudinarySignatureController } from "../controllers/cloudinary.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
const cloudinaryRouter = Router();

cloudinaryRouter.get("/", asyncHandler(getCloudinarySignatureController));

export default cloudinaryRouter;
