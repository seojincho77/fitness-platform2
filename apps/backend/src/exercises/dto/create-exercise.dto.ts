import { IsString, IsOptional } from 'class-validator';

export class CreateExerciseDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  muscle_group?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  difficulty?: string;

  @IsOptional()
  @IsString()
  video_url?: string;

  @IsOptional()
  @IsString()
  image_url?: string;
}
