const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    addBook(book) {
        const { title, author, year } = book;
        if (!title || !author || !year) {
            console.error("Error: Book information is incomplete. Title, author, and year are required.");
            return;
        }

        this.books.push(book);
        console.log(`Book added: ${title}`);
    },
    findBookByTitle(title) {
        const foundBook = this.books.find(book => book.title === title);
        return foundBook ? foundBook : "Book not found.";
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1);
            console.log(`Removed book: ${removedBook[0].title}`);
        } else {
            console.error("Error: Book not found.");
        }
    }
};
library.addBook({ author: "George Orwell", year: 1949 });
library.addBook({ title: "1984", author: "George Orwell", year: 1949 });
console.log(library.findBookByTitle("1984"));
console.log(library.findBookByTitle("Nonexistent Book"));
library.removeBook("1984");
library.removeBook("Nonexistent Book");
