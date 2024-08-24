import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './entities/books.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity)
    private booksRepository: Repository<BooksEntity>,
  ) {}

  async findAll(): Promise<BooksEntity[]> {
    return await this.booksRepository.find();
  }
}
