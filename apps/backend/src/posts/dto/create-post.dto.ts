import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  workout_sessionId?: number;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  image_url?: string;
}
