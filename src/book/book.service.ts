import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './Schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private bookModel: mongoose.Model<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = await this.bookModel.create(createBookDto);
    return book;
  }

  async findAll(): Promise<Book[]> {
    const books = await this.bookModel.find();
    return books;
  }

  async findById(id: string): Promise<Book> {
    const book = await this.bookModel.findById(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async updateById(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async removeById(id: string): Promise<Book> {
    const book = await this.bookModel.findByIdAndDelete(id);

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }
}
