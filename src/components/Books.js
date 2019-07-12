import React from "react";
import Book from "./Book";
import Navbar from "./Navbar";

// REPLACE WITH FETCH!!!
import { bookList } from "../data";

export default function Books() {
  console.log(bookList);

  return (
    <React.Fragment>
      {bookList.map(book => {
        return (
          <Book
            title={book.volumeInfo.title}
            id={book.id}
            image={book.volumeInfo.imageLinks.thumbnail}
            authors={book.volumeInfo.authors}
            rating={book.volumeInfo.averageRating}
            description={book.volumeInfo.description}
            key={book.id}
          />
        );
      })}
    </React.Fragment>
  );
}
