import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from "./components/Navbar"
import Books from "./components/Books";
import Login from "./components/Login";




function App() {
  
  return (
    <React.Fragment>
      <NavBar />
      <Books />
    </React.Fragment>
  );
}

export default App;
