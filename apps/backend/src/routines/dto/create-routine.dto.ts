import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateRoutineDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  is_public?: boolean;

  // 예: creatorId 생략 or JWT에서 꺼낼 수도
  @IsOptional()
  exercises?: {
    exerciseId: number;
    defaultSets?: number;
    defaultReps?: number;
  }[];
}
