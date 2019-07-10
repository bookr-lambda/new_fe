import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from "@material-ui/core/styles";

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

export default function NavBar() {
  const classes = useStyles();


  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs>
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Bookr
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
