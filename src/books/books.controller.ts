import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksEntity } from './entities/books.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get()
  async getAllBooks(): Promise<BooksEntity[]> {
    return await this.booksService.findAll();
  }
}
