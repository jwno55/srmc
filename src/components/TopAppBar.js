import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2), 
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    profileButton: {
        
    },
    title: {
      flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
      },
  }));

const TopBar = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.link}>
                        Hello Bereans!
                    </Link>
                </Typography>
                <IconButton edge="end" className={classes.profileButton} color="inherit" aria-label="porfile">
                    <Link to="/profile" className={classes.link}>
                        <AccountCircle />
                    </Link>
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
        </>
    )
};

export default TopBar;