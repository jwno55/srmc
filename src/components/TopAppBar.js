import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { fb } from "fbase";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2), 
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolBar: {
        backgroundColor: '#fff',
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
    const [name, setName] = useState("");

    useEffect(() => fb.auth().onAuthStateChanged((user) => setName(user.displayName)), []);

    return(
        <>
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.link}>
                        Hello {name == "" ? "Bereans" : name}!
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
        </>
    )
};

export default TopBar;