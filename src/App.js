import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Signup from "./components/Signup";
import NavBar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import { S } from "xmlchars/xml/1.0/ed5";


const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#AAAAAA"
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: "none"
    }
  }
}));


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
      <Books />
      <Login />
      <Signup />
    </React.Fragment>
  );
}

export default App;
