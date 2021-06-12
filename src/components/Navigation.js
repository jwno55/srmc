import React from "react";
import { Link, useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav_area: {
    width:"100%",
    bottom: 0,
    paddingBottom:"24px",
    position: "fixed",
  },
  root: {
    color: "black",
    "&$selected": {
      color: "tomato",
      fontSize: "10px",
    }
  },
  label: {
    fontSize: "10px",
    "&$selected": {
      fontSize: "10px",
    }
  },
  selected: {}
}));

const Navigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const goHome = () => history.push('/');
  const goBooks = () => history.push('/books');
  const goBookapplication = () => history.push('/bookapplication');
  const goProfile = () => history.push('/profile');

  return(
    <Paper zDepth={1} className={classes.nav_area}>
        <BottomNavigation 
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels={true}>
          <BottomNavigationAction
            classes={classes}
            label="TODAY"
            icon={<HomeIcon />}
            onClick={goHome}
          />
          <BottomNavigationAction
            classes={classes}
            label="BOOKS"
            icon={<MenuBookIcon />}
            onClick={goBooks}
          />
          <BottomNavigationAction
            classes={classes}
            label="APPLY"
            icon={<CartIcon />}
            onClick={goBookapplication}
          />
          <BottomNavigationAction
            classes={classes}
            label="MY"
            icon={<AccountBoxIcon />}
            onClick={goProfile}
          />
        </BottomNavigation>
      </Paper>
)};
export default Navigation;
