import { IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateWorkoutSessionDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  routineId?: number;

  @IsDateString()
  start_time: string; // or Date
}
