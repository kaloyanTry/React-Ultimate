const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

//////Functions and methods practice:
const getData = function () {
  return data;
};

const getBookById = function (id) {
  const book = data.find((b) => b.id === id);
  return book;
};

const books = getData();
const book = getBookById(1);

const { author, title, pages } = book;
author;
// function getBooks() {
//   return data;
// }

const newAuthor = {
  ...book,
  author: "J.R.Tolkin",
};
newAuthor;

const importantBooks = books.map((b) => ({
  title: b.title,
  author: b.author,
}));

importantBooks;

const longBooks = books
  .filter((b) => b.pages >= 600)
  .sort((b1, b2) => b1.pages - b2.pages);
longBooks;
// function getBook(id) {
//   return data.find((d) => d.id === id);
// }

// //// using Quokka extension

// const books = getBooks();
// const book = getBook(1);

// const { title, author, genres, publicationDate, hasMovieAdaptation } = book;
// console.log(title, author, genres, publicationDate);

// const newGenres = ["epic fantasy", ...genres];
// newGenres;

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 1210,
// };

// updatedBook;

// const summary = `${title} has written by ${author} and published in ${
//   publicationDate.split("-")[0]
// }.`;
// summary;

// //short-circuiting operators:
// console.log(hasMovieAdaptation && "The book has movie adaptaiton");

// // falsy values = 0, '', null, undefined:
// const bgTranslation = book.translations.bulgarian || "Not translted";
// bgTranslation;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// // Functional Array Methods:
// const essentionalData = books.map((book) => ({
//   title: book.title,
//   author: book.author,
// }));
// essentionalData;

// const longBooks = books
//   .filter((book) => book.pages >= 500)
//   .filter((book) => book.hasMovieAdaptation)
//   .map((book) => book.title);
// longBooks;

// // sort() method muted the original array
// const nums = [9, 1, 5, 6, 3, 8];
// const sorted = nums.sort((num1, num2) => num1 - num2);
// sorted;

// // so, we can use slice method to make a copy of the arrra y first:
// const nums2 = [9, 1, 5, 6, 3, 8];
// const sorted2 = nums2.slice().sort((num1, num2) => num1 - num2);
// sorted2;

// // adding a new object
// const addBook = {
//   id: 6,
//   title: "HP and the Chamber of Secrets",
//   author: "J. K. Rowling",
// };

// const booksAdd = [...books, addBook];
// console.log(booksAdd);

// // deleting a book
// const booksDelete = booksAdd.filter((book) => book.id !== 3);
// booksDelete;

// // update the array
// const booksUpdate = booksDelete.map((book) =>
//   book.id === 1 ? { ...book, pages: 1210 } : book
// );
// console.log(booksUpdate);

// ////////////////////////////////////////////////////
// //  Promise:
// // fetch("https://jsonplaceholder.typicode.com/todos")
// //   .then((res) => res.json())
// //   .then((data) => console.log(data));

// // Async/await:
// async function getTodos() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   console.log(data);
// }
// getTodos();
