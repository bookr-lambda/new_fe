import React from "react";
import Book from "./Book";

function getBooks() {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=''`
  return fetch(URL)
  .then(response => response.json())
  .then(function(data) {
    return (
      <React.Fragment>
        {data.items.map(book => {
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
    )
  })
  .catch(error => console.error(error))
}



export default function Books() {
  return getBooks();
}
