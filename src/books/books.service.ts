import { Injectable } from '@nestjs/common';

interface Book {
  titre: string;
  auteur: string;
  annéeDePublication: number;
}

@Injectable()
export class BooksService {
  private books: Book[] = [];

  findAll(): Book[] {
    return this.books;
  }

  create(book: Book) {
    this.books.push(book);
  }

  findByTitle(titre: string): Book | undefined {
    return this.books.find((book) => book.titre === titre);
  }
}
