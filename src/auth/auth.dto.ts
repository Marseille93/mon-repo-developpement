import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsEmail, IsNotEmpty, IsString, IsIn } from 'class-validator';
const ROLES = ['user', 'admin'];
export class AuthDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  genre: string;

  @ApiProperty()
  @IsString()
  @IsIn(ROLES)
  role: string;
}
