// src/dto/docGia.dto.ts
import { Expose, Transform } from "class-transformer";
import {
  IsEnum,
  IsString,
  IsDate,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import { GioiTinh } from "@prisma/client";

export class CreateDocGiaDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  HoLot: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  Ten: string;

  @IsNotEmpty()
  @IsDate()
  @Transform(
    ({ value }) => (typeof value === "string" ? new Date(value) : value),
    { toClassOnly: true }
  )
  @Expose()
  NgaySinh: Date;

  @IsNotEmpty()
  @IsEnum(GioiTinh)
  @Expose()
  GioiTinh: GioiTinh;

  @IsNotEmpty()
  @IsString()
  @Expose()
  DiaChi: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  DienThoai: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  MaTaiKhoan: string;

  toPrismaFormat() {
    return {
      ...this,
      NgaySinh: this.NgaySinh.toISOString(),
    };
  }
}

export class UpdateDocGiaDto {
  @IsOptional()
  @IsString()
  @Expose()
  HoLot?: string;

  @IsOptional()
  @IsString()
  @Expose()
  Ten?: string;

  @IsNotEmpty()
  @IsDate()
  @Transform(
    ({ value }) => (typeof value === "string" ? new Date(value) : value),
    { toClassOnly: true }
  )
  @Expose()
  NgaySinh: Date;

  @IsOptional()
  @IsEnum(GioiTinh)
  @Expose()
  GioiTinh?: GioiTinh;

  @IsOptional()
  @IsString()
  @Expose()
  DiaChi?: string;

  @IsOptional()
  @IsString()
  @Expose()
  DienThoai?: string;

  toPrismaFormat(): Partial<UpdateDocGiaDto> {
    const { ...data } = this;
    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
    );
  }
}
