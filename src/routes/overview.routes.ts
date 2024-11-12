import {
  getChartDataController,
  getRecentTDMSController,
} from "./../controllers/overview.controller";
import { Router } from "express";
import { asyncHandler } from "../middlewares/asyncHandler";
import { getTotalCountsController } from "../controllers/overview.controller";
import { protectRoute } from "../middlewares/auth";
import { validateRequest } from "../middlewares/validateRequest";
import { ChartDataOverviewDto } from "../dtos/overview.dto";

const tongQuanRouter = Router();

tongQuanRouter.get(
  "/count",
  protectRoute,
  asyncHandler(getTotalCountsController)
);

tongQuanRouter.get(
  "/chart",
  protectRoute,
  validateRequest(ChartDataOverviewDto),
  asyncHandler(getChartDataController)
);

tongQuanRouter.get(
  "/recent",
  protectRoute,
  asyncHandler(getRecentTDMSController)
);

export default tongQuanRouter;
