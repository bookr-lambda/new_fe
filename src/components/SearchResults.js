import React, { Component } from 'react';
import bookimg from '../images/bookimg.svg';
import Book from './Book.js';
import './Search.css';
class SearchResults extends Component {

  render() {
    return (
      <div>{
        this.props.items.map( (item, index) => {
          let { title, authors, averageRating, description, publishedDate, imageLinks, infoLink } = item.volumeInfo;
          return (
            <h1>
                <a key={index}
              className="book"
              href={infoLink}
              target="_blank"
              rel="noopener">
                <img
                src={undefined !== imageLinks ? imageLinks.thumbnail : {bookimg}}
                alt={`Book Cover for ${title}.`}
                className="bookCover"
              />
                </a>
              
              <header className="bookTitle">
                {title} by {authors}
              </header>
              <div>
               Average Rating:  {averageRating}
                <Book />
              </div>
            </h1>
          )
        })
      }</div>
    )
  }
}

export default SearchResults;
