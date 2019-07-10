import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import MyBooks from "./components/MyBooks";
import Login from "./components/Login";


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Bookr
          </Typography>
        </Toolbar>
        <nav>
            My Books
        </nav>
      </AppBar>
    </div>
  )
}

function App() {
  
  return (
    <React.Fragment>
      <NavBar />

    </React.Fragment>
  );
}

export default App;
