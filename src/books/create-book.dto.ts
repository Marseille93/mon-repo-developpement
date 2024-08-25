import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  auteur: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsNotEmpty()
  date_publication: Date;

  @IsString()
  @IsNotEmpty()
  langue: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  disponibilite: boolean;
}
