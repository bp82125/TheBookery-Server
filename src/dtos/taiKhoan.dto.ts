import { Expose } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString, IsOptional } from "class-validator";
import { LoaiTaiKhoan } from "@prisma/client";

export class CreateTaiKhoanDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  TenDangNhap: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  MatKhau: string;

  @IsEnum(LoaiTaiKhoan)
  @Expose()
  LoaiTaiKhoan: LoaiTaiKhoan;
}

export class UpdateTaiKhoanDto {
  @IsOptional()
  @IsString()
  @Expose()
  TenDangNhap?: string;

  @IsOptional()
  @IsString()
  @Expose()
  MatKhau?: string;

  @IsOptional()
  @IsEnum(LoaiTaiKhoan)
  @Expose()
  LoaiTaiKhoan?: LoaiTaiKhoan;
}

export class LoginTaiKhoanDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  TenDangNhap: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  MatKhau: string;
}
