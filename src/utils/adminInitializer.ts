import { CreateTaiKhoanDto } from "../dtos/taiKhoan.dto";
import { prisma } from "../prisma/prismaClient";
import { createTaiKhoan } from "../services/taiKhoan.service";

export async function createAdminAccount() {
  try {
    const existingAdmin = await prisma.taiKhoan.findUnique({
      where: {
        TenDangNhap: process.env.ADMIN_USERNAME as string,
      },
    });

    if (!existingAdmin) {
      const adminData: CreateTaiKhoanDto = {
        TenDangNhap: process.env.ADMIN_USERNAME as string,
        MatKhau: process.env.ADMIN_PASSWORD as string,
        LoaiTaiKhoan: "ADMINISTRATOR",
      };

      await createTaiKhoan(adminData);

      console.log("Tài khoản Admin mặc định đã được tạo thành công.");
    } else {
      console.log("Tài khoản Admin mặc định đã tồn tại.");
    }
  } catch (error) {
    console.error("Đã xảy ra lỗi khi tạo tài khoản Admin:", error);
  }
}
