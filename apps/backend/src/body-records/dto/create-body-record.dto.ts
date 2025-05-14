import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBodyRecordDto {
  @IsNumber()
  userId: number;  // User 엔티티의 id가 int이므로 number로 변경

  @IsString()
  date: string;

  @IsNumber()
  weight: number;

  @IsOptional()
  @IsNumber()
  body_fat_percentage?: number;

  @IsOptional()
  @IsNumber()
  skeletal_muscle_mass?: number;
}


