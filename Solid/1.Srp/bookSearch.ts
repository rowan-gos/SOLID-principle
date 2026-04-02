import { Book } from "./book";

export class BookSearch {
  books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  getListBooks(): Book[] {
    return this.books;
  }

  getBookByTitle(title: string): Book | undefined {
    return this.books.find((book) => book.title === title);
  }

  getBooksByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }

  getBooksByPublicationYear(publicationYear: number): Book[] {
    return this.books.filter(
      (book) => book.publicationYear === publicationYear,
    );
  }
}
