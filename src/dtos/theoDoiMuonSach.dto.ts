import { TrangThaiMuonSach } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateTDMSDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  MaSach: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  MaDocGia: string;
}

export class ApproveOrRejectTDMSDto {
  @IsNotEmpty()
  @IsEnum(TrangThaiMuonSach)
  @Expose()
  TrangThaiMuonSach: TrangThaiMuonSach;
}

export class PickUpTDMSDto {
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @Expose()
  NgayTraDuKien: Date;

  toPrismaFormat() {
    return {
      NgayTra: this.NgayTraDuKien.toISOString(),
    };
  }
}
