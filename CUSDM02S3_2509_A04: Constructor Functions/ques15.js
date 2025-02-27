function Book(title, author) {
  return {
    title,
    author,
    details() {
      console.log(`Title: ${this.title}, Author: ${this.author}`);
    }
  };
}
function createLibrary() {
  let books = [];
  return {
    addBook(book) {
      books.push(book);
      console.log(`Book added: ${book.title}`);
    },
    removeBook(title) {
      books = books.filter(book => book.title !== title);
      console.log(`Book removed: ${title}`);
    },
    listBooks() {
      if (books.length === 0) {
        console.log("No books in the library.");
      } else {
        books.forEach(book => book.details());
      }
    }
  };
}
const library = createLibrary();
const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");
library.addBook(book1);
library.addBook(book2);
library.listBooks();
library.removeBook("1984");
library.listBooks();
