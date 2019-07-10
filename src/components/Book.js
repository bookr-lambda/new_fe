import React from "react";
import { Typography, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  book: {
    display: 'flex',
    margin: theme.spacing(3, 5.5),
    padding: theme.spacing(3),
    height: theme.spacing(20)
  },
  author: {
    fontSize: 20
  },
  cover: {
    width: 151,
  }
}));

const Book = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.book}>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h4" color="inherit">
              {props.title}
            </Typography>
          </Grid>
          <Grid item xs />
          {props.authors.map(author => {
            return (
              <Grid item xs={2}>
                <span className={classes.author}>{author}</span>
              </Grid>
            );
          })}
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <Typography variant="h5" color="inherit">
              {props.rating} STARS
            </Typography>
          </Grid>
          <Grid item xs />
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <p>{props.description}</p>
          </Grid>
        </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

Book.defaultProps = {
  title: "",
  authors: [],
  rating: "",
  description: ""
};

export default Book;
