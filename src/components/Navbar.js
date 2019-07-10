// import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";
// import InputBase from '@material-ui/core/InputBase';
// // import SearchIcon from '@material-ui/icons/Search';

// import { makeStyles } from "@material-ui/core/styles";

// function TabContainer(props) {
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// }

// const useStyles = makeStyles(theme => ({
//   "@global": {
//     body: {
//       backgroundColor: "#AAAAAA"
//     },
//     ul: {
//       margin: 0,
//       padding: 0
//     },
//     li: {
//       listStyle: "none"
//     }
//   },
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`
//   },
//   toolbar: {
//     flexWrap: "wrap"
//   },
//   toolbarTitle: {
//     flexGrow: 1
//   },
//   link: {
//     margin: theme.spacing(1, 1.5)
//   }
// }));

// export default function NavBar() {
//   const classes = useStyles();


//   return (
//     <div>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Grid container direction="row" justify="center" alignItems="center">
//           <Grid item xs>
//             <Toolbar>
//               <Typography variant="h6" color="inherit">
//                 Bookr
//               </Typography>
//             </Toolbar>
//           </Grid>
//           <Grid item xs>
//           <div className={classes.search}>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'Search' }}
//             />
//           </div>
//           </Grid>
//         </Grid>
//       </AppBar>
//     </div>
//   );
// }
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WishListIcon from '@material-ui/icons/Favorite';
import BookIcon from '@material-ui/icons/Book';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
export default function SearchAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="My Books" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Community" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <WishListIcon />
          </ListItemIcon>
          <ListItemText primary="WishList" />
        </StyledMenuItem>
      </StyledMenu>

          <Typography className={classes.title} variant="h6" noWrap>
            Bookr
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Find A Book"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}