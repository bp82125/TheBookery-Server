import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNhaXuatBanDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  TenNXB: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  DiaChi: string;
}

export class UpdateNhaXuatBanDto {
  @IsOptional()
  @IsString()
  @Expose()
  TenNXB: string;

  @IsOptional()
  @IsString()
  @Expose()
  DiaChi: string;

  toPrismaFormat(): Partial<UpdateNhaXuatBanDto> {
    const { ...data } = this;
    return Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== "")
    );
  }
}
