import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './Schemas/book.schema';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: 'Crea un nuevo libro' })
  @ApiResponse({ status: 201, description: 'Libro creado correctamente' })
  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @ApiOperation({ summary: 'Obtener todos los libros' })
  @ApiResponse({ status: 201, description: 'libros encotrados correctamente' })
  @Get('')
  async findAll(): Promise<Book[]> {
    const books = await this.bookService.findAll();
    return books;
  }

  @ApiOperation({ summary: 'Obtener un libro por ID' })
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    const res = await this.bookService.findById(id);
    return res;
  }

  @ApiOperation({ summary: 'Actualizar un libro por ID' })
  @ApiResponse({ status: 201, description: 'libro actualizado correctamente' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ): Promise<Book> {
    return this.bookService.updateById(id, updateBookDto);
  }

  @ApiOperation({ summary: 'Eliminar un libro por ID' })
  @ApiResponse({ status: 201, description: 'libro eliminado correctamente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.removeById(id);
  }
}
