import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      zIndex:10,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolBar: {
        backgroundColor: '#fff',
        boxShadow: '0 4px 2px -2px rgb(0 0 0 .3)',
    },
    title: {
      flexGrow: 1,
    },
    link: {
        color: '#000',
        textDecoration: 'none',
      },
  }));

const TopBar = () => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.link}>
                        Hello Bereans!
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
        </>
    )
};

export default TopBar;