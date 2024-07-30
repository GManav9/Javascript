let books = [
  { title: "Book One", author: "Author One", year: 1999 },
  { title: "Book Two", author: "Author Two", year: 2005 },
  { title: "Book Three", author: "Author Three", year: 2010 },
];

for (let x = 0; x < books.length; x++) {
  if (books[x].year > 2000) {
    console.log(books[x].title);
  }
}
