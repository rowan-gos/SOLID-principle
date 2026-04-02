import { Book } from "./book";

export class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }
  addBook(book: Book): void {
    this.books.push(book);
  }

  getListBooks(): Book[] {
    return this.books;
  }

  removeBook(title: string): void {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getTotalNumberOfBooks(): number {
    return this.books.length;
  }
}
