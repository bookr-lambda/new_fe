import React, { Component } from "react";
import Book from "./Book";





class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  getBooks() {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=''`
    return fetch(URL)
    .then(response => response.json())
    .then(json => {
      let { items } = json;
      this.setState({ items })
    })
    .catch(error => console.error(error))
  }

  render() {
    this.getBooks();

    return (
      <React.Fragment>
        {this.state.items.map(book => {
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
  }
}

export default Books