import express from "express";

import "reflect-metadata";

import docGiaRouter from "./routes/docGia.routes";
import taiKhoanRouter from "./routes/taiKhoan.routes";
import nhaXuatBanRouter from "./routes/nhaXuatBan.routes";
import sachRouter from "./routes/sach.routes";
import nhanVienRouter from "./routes/nhanVien.routes";
import theoDoiMuonSachRouter from "./routes/theoDoiMuonSach.routes";
import cloudinaryRouter from "./routes/cloudinary.routes";

import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFoundHandler";
import cors from "cors";

import passport from "./config/passport";
import { createAdminAccount } from "./utils/adminInitializer";
import tongQuanRouter from "./routes/overview.routes";

const app = express();

app.use(express.json());
app.use(logger);
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const apiRouter = express.Router();
apiRouter.use("/doc-gia", docGiaRouter);
apiRouter.use("/tai-khoan", taiKhoanRouter);
apiRouter.use("/nhan-vien", nhanVienRouter);
apiRouter.use("/nha-xuat-ban", nhaXuatBanRouter);
apiRouter.use("/sach", sachRouter);
apiRouter.use("/theo-doi-muon-sach", theoDoiMuonSachRouter);
apiRouter.use("/tong-quan", tongQuanRouter);
apiRouter.use("/cloudinary/signature", cloudinaryRouter);

app.use("/api/v1", apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);
app.use(passport.initialize());

createAdminAccount().catch((error) => {
  console.error(error);
});

export default app;
