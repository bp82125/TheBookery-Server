import { Expose } from "class-transformer";
import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateNhanVienDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  HoTenNV: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  ChucVu: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  DiaChi: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  SoDienThoai: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  MaTaiKhoan: string;
}

export class UpdateNhanVienDto {
  @IsOptional()
  @IsString()
  @Expose()
  HoTenNV?: string;

  @IsOptional()
  @IsString()
  @Expose()
  ChucVu?: string;

  @IsOptional()
  @IsString()
  @Expose()
  DiaChi?: string;

  @IsOptional()
  @IsString()
  @Expose()
  SoDienThoai?: string;

  toPrismaFormat(): Partial<UpdateNhanVienDto> {
    const { ...data } = this;
    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
    );
  }
}
