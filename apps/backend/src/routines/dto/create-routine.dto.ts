import { IsInt, IsOptional, IsString, IsBoolean, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CreateRoutineExerciseDto {
  @IsInt()
  exerciseId: number;

  @IsOptional()
  @IsInt()
  defaultSets?: number;

  @IsOptional()
  @IsInt()
  defaultReps?: number;
}

export class CreateRoutineDto {
  @IsInt() // ✅ UUID 아님!
  creator_id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateRoutineExerciseDto)
  exercises?: CreateRoutineExerciseDto[];
}


