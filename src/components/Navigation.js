import React from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav_area: {
    width:"100%",
    bottom: 0,
    position: "fixed",
  },
  root: {
    color: "black",
    "&$selected": {
      color: "red"
    }
  },
  selected: {}
}));

const Navigation = () => {
  const classes = useStyles();
  return(
    <Paper zDepth={1} className={classes.nav_area}>
        <BottomNavigation value={1} showLabels={true}>
          <Link to="/">
            <BottomNavigationAction
              classes={classes}
              label="Home"
              icon={<HomeIcon />}
            />
          </Link>

          <Link to="/bookapplication">
            <BottomNavigationAction
              classes={classes}
              label="Application"
              icon={<MenuBookIcon />}
            />
          </Link>

          <Link to="/profile">
            <BottomNavigationAction
              classes={classes}
              label="account"
              icon={<AccountBoxIcon />}
            />
          </Link>
        </BottomNavigation>
      </Paper>
)};
export default Navigation;
