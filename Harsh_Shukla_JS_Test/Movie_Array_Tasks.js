const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    rating: 4.9,
    details: [
      { chapter: "Introduction", pages: 20 },
      { chapter: "Chapter 1", pages: 15 },
      { chapter: "Chapter 2", pages: 25 },
    ],
  },
  {
    title: "1984",
    author: "George Orwell",
    rating: 4.8,
    details: [
      { chapter: "Introduction", pages: 10 },
      { chapter: "Chapter 1", pages: 30 },
      { chapter: "Chapter 2", pages: 22 },
    ],
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    rating: 4.7,
    details: [
      { chapter: "Introduction", pages: 18 },
      { chapter: "Chapter 1", pages: 16 },
      { chapter: "Chapter 2", pages: 28 },
    ],
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    rating: 4.6,
    details: [
      { chapter: "Introduction", pages: 12 },
      { chapter: "Chapter 1", pages: 20 },
      { chapter: "Chapter 2", pages: 35 },
    ],
  },
];

function findLongestChapter(books) {
  return books.map((book) => {
    const maxChapter = book.details.reduce((max, chapter) =>
      chapter.pages > max.pages ? chapter : max
    );

    return {
      title: book.title,
      longestChapter: maxChapter.chapter,
      pages: maxChapter.pages,
    };
  });
}

function getUniqueAuthors(books) {
  const authors = books.map((book) => book.author);
  return [...new Set(authors)];
}
