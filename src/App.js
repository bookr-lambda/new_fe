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

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navigation-bar">
            <div className="nav-links">
              <button>
                <a href="https://bookr-lambda.netlify.com/">Home</a>
              </button>
              {this.props.isLoggedIn && <></>}
              <div>
                <NavLink to="/signup">Register</NavLink>
              </div>
            </div>
            <div>
              {!this.props.isLoggedIn ? (
                <Link to="/login">Log In</Link>
              ) : (
                <Link to="/" onClick={logout}>
                  Log Out
                </Link>
              )}
            </div>
          </nav>

          <Route path="/login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </div>
      </Router>
    );
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
