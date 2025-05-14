import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsString()
  nickname: string;

  @IsOptional()
  @IsString()
  profile_image_url?: string;
}
