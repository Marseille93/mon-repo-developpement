import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './entities/books.entity';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BooksEntity)
    private booksRepository: Repository<BooksEntity>,
  ) {}
  create(createBookDto: CreateBookDto): Promise<BooksEntity> {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }
  findAll(): Promise<BooksEntity[]> {
    return this.booksRepository.find();
  }
  async findOne(id: number): Promise<BooksEntity> {
    const book = await this.booksRepository.findOne({
      where: { id },
    });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async update(id: number, updateBookDto: CreateBookDto): Promise<BooksEntity> {
    const book = await this.booksRepository.preload({
      id: +id,
      ...updateBookDto,
    });
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return this.booksRepository.save(book);
  }

  async remove(id: number): Promise<void> {
    const book = await this.findOne(id);
    await this.booksRepository.remove(book);
  }
}
