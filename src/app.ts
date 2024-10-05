import express from "express";

import "reflect-metadata";

import docGiaRouter from "./routes/docGia.routes";
import taiKhoanRouter from "./routes/taiKhoan.routes";
import nhaXuatBanRouter from "./routes/nhaXuatBan.routes";
import sachRouter from "./routes/sach.routes";
import nhanVienRouter from "./routes/nhanVien.routes";
// import theoDoiMuonSachRouter from "./routes/theoDoiMuonSachRoutes";

import { logger } from "./middlewares/logger";
import { errorHandler } from "./middlewares/errorHandler";
import { notFoundHandler } from "./middlewares/notFoundHandler";

const app = express();

app.use(express.json());
app.use(logger);

const apiRouter = express.Router();
apiRouter.use("/doc-gia", docGiaRouter);
apiRouter.use("/tai-khoan", taiKhoanRouter);
apiRouter.use("/nhan-vien", nhanVienRouter);
apiRouter.use("/nha-xuat-ban", nhaXuatBanRouter);
apiRouter.use("/sach", sachRouter);
// apiRouter.use("/theo-doi-muon-sach", theoDoiMuonSachRouter);

app.use("/api/v1", apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
