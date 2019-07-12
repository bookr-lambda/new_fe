import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";
import Signup from "./components/Signup";
import NavBar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import { S } from "xmlchars/xml/1.0/ed5";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
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
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

function IsLoggedIn(props) {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={Books} />
      </div>
    </Router>
  )
}

function IsNotLoggedIn(props) {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" component={Login} />
        <Route path="/Signup" component={Signup} exact />
      </div>
    </Router>
  )
}

class App extends React.Component {

  state = {
    userVerified: true
  };

  render() {
    return this.state.userVerified ? IsLoggedIn() : IsNotLoggedIn()
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.reload(true);
}

export default withRouter(App);

// const mapStateToProps = state => ({
//   isLoggedIn: state.isLoggedIn,
//   user: state.user
// });

// const mainApp = connect (mapStateToProps)
// export default (mapStateToProps, {})(App);
