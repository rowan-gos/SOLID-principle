import { Book, Library, BookSearch } from "../../Solid/1.Srp/sample";

describe("Library", () => {
  let library: Library;
  let book1: Book;
  let book2: Book;

  beforeEach(() => {
    library = new Library();
    book1 = new Book("Clean Code", "Edric Cao", 2023);
    book2 = new Book("Design Pattern", "Edric Cao", 2022);
  });

  test("should add a book to the library", () => {
    library.addBook(book1);
    expect(library.getListBooks()).toContain(book1);
  });

  test("should remove a book by title from the library", () => {
    library.addBook(book1);
    library.addBook(book2);
    library.removeBook("Clean Code");
    expect(library.getListBooks()).not.toContain(book1);
    expect(library.getListBooks()).toContain(book2);
  });

  test("should not remove any book if title not found", () => {
    library.addBook(book1);
    library.removeBook("Nonexistent Book");
    expect(library.getListBooks().length).toBe(1);
    expect(library.getListBooks()).toContain(book1);
  });

  test("should return the total number of books in the library", () => {
    library.addBook(book1);
    library.addBook(book2);
    expect(library.getListBooks().length).toBe(2);
  });

  test("should return an empty list when no books are added", () => {
    expect(library.getListBooks().length).toBe(0);
  });
});

describe("BookSearch", () => {
  let books: Book[];
  let search: BookSearch;

  beforeEach(() => {
    books = [
      new Book("Clean Code", "Edric Cao", 2023),
      new Book("Design Pattern", "Edric Cao", 2022),
      new Book("Refactoring", "Martin Fowler", 2018),
    ];
    search = new BookSearch(books);
  });

  test("should find a book by title", () => {
    const book = search.getBookByTitle("Clean Code");
    expect(book).toBeDefined();
    expect(book?.author).toBe("Edric Cao");
  });

  test("should return undefined when no book matches the title", () => {
    const book = search.getBookByTitle("Nonexistent Book");
    expect(book).toBeUndefined();
  });

  test("should return books by author", () => {
    const authorBooks = search.getBooksByAuthor("Edric Cao");
    expect(authorBooks.length).toBe(2);
    expect(authorBooks).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title: "Clean Code" }),
        expect.objectContaining({ title: "Design Pattern" }),
      ]),
    );
  });

  test("should return an empty array when no books match the author", () => {
    const authorBooks = search.getBooksByAuthor("Unknown Author");
    expect(authorBooks.length).toBe(0);
  });

  test("should return books by publication year", () => {
    const booksByYear = search.getBooksByPublicationYear(2022);
    expect(booksByYear.length).toBe(1);
    expect(booksByYear[0].title).toBe("Design Pattern");
  });

  test("should return an empty array when no books match the publication year", () => {
    const booksByYear = search.getBooksByPublicationYear(1999);
    expect(booksByYear.length).toBe(0);
  });
});
