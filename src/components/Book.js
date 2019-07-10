import React from 'react';
import { Typography } from '@material-ui/core';

const Book = props => {
    return(
        <React.Fragment>
            <Typography variant="h2" color="inherit">{props.title}</Typography>
            <Typography variant="h5" color="inherit">{props.authors.map(author => {return(<span>| {author} |</span>)})}  {props.rating} STARS</Typography>
            <p>{props.description}</p>
        </React.Fragment>
        
    )
}

Book.defaultProps = {
    title: '',
    authors: [],
    rating: '',
    description: ''
  };

export default Book;