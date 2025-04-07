import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  workoutSessionId?: number;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  image_url?: string;
}
