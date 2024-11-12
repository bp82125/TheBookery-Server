import { Expose } from "class-transformer";
import { IsInt, IsOptional, IsPositive } from "class-validator";

export class ChartDataOverviewDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  @Expose()
  SoQuyen: number;
}
