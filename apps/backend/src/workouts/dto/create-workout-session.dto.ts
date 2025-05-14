import {
  IsNumber,
  IsOptional,
  IsDateString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWorkoutSetDto {
  @IsNumber()
  exerciseId: number;

  @IsNumber()
  set_number: number;

  @IsNumber()
  reps: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  volume: number;
}

export class CreateWorkoutSessionDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  routineId?: number;

  @IsDateString()
  start_time: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateWorkoutSetDto)
  sets?: CreateWorkoutSetDto[];
}
