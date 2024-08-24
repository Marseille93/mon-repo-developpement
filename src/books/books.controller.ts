import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
interface Book {
  titre: string;
  auteur: string;
  annéeDePublication: number;
}
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() book) {
    this.booksService.create(book);
  }

  @Get(':title')
  findByTitle(@Param('title') title: string): Book {
    return this.booksService.findByTitle(title);
  }
}
