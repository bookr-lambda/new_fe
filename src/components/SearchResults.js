import React, { Component } from 'react';
import book from '../images/book.svg';

class SearchResults extends Component {

  render() {
    return (
      <div>{
        this.props.items.map( (item, index) => {
          let { title, authors, description, publishedDate, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
              rel="noopener"
              >
              <img
                src={undefined !== imageLinks ? imageLinks.thumbnail : {book}}
                alt={`Book Cover for ${title}.`}
                className="bookCover"
              />
              <header className="bookTitle">
                {title} by {authors}
              </header>
              <div>
                {/* {publishedDate}
                {description} */}
              </div>
            </a>
          )
        })
      }</div>
    )
  }
}

export default SearchResults;
