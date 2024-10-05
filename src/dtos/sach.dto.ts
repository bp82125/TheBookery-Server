import { Expose } from "class-transformer";
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";

export class CreateSachDto {
  @IsString()
  @IsNotEmpty()
  @Expose()
  TenSach: string;

  @IsNumber()
  @IsPositive()
  @Expose()
  DonGia: number;

  @IsInt()
  @IsPositive()
  @Expose()
  SoQuyen: number;

  @IsInt()
  @IsPositive()
  @Expose()
  NamXuatBan: number;

  @IsString()
  @IsOptional()
  @Expose()
  NguonGoc: string;

  @IsString()
  @IsOptional()
  @Expose()
  HinhAnh: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  MaNXB: string;
}

export class UpdateSachDto {
  @IsString()
  @IsOptional()
  @Expose()
  TenSach: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  @Expose()
  DonGia: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Expose()
  SoQuyen: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  @Expose()
  NamXuatBan: number;

  @IsString()
  @IsOptional()
  @Expose()
  NguonGoc: string;

  @IsString()
  @IsOptional()
  @Expose()
  HinhAnh: string;

  toPrismaFormat(): Partial<UpdateSachDto> {
    const { ...data } = this;
    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
    );
  }
}
