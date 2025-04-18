import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Category } from '../Schemas/book.schema';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'titulo del libro' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'descripcion del libro' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'autor del libro' })
  @IsString()
  autor: string;

  @ApiProperty({ description: 'precio del libro' })
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'categoria del libro' })
  @IsEnum(Category)
  category: Category;
}
