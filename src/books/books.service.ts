import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksEntity } from './entities/books.entity';
import { CreateBookDto } from './create-book.dto';

@Injectable()
export class BooksService {
  //Injection de dépendance
  constructor(
    @InjectRepository(BooksEntity)
    private booksRepository: Repository<BooksEntity>,
  ) {}
  //Methode pour la création de livre
  create(createBookDto: CreateBookDto): Promise<BooksEntity> {
    const book = this.booksRepository.create(createBookDto);
    return this.booksRepository.save(book);
  }
  //Methode pour recupérer tout les livres
  findAll(): Promise<BooksEntity[]> {
    return this.booksRepository.find();
  }
  //Methode pour recupérer un livre par son id
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
