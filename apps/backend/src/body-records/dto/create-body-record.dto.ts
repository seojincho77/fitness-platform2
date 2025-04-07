import { IsNumber, IsOptional } from 'class-validator';

export class CreateBodyRecordDto {
  @IsNumber()
  userId: number; // user.id

  @IsNumber()
  weight: number;

  @IsOptional()
  @IsNumber()
  body_fat_percentage?: number;

  @IsOptional()
  @IsNumber()
  skeletal_muscle_mass?: number;
}
