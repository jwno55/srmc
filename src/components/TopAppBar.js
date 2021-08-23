import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#000',
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
      display: 'flex',
      justifyContent : 'space-between',
    },
    link: {
        color: '#919191',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '800',
    },
    adimnLink: {
        color: '#919191',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '800',
    },
  }));

const TopBar = ({userObj}) => {
    const classes = useStyles();
    return(
        <>
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.title}>
                    <Link to="/" className={classes.link}>
                        Hello {userObj.displayName}
                    </Link>
                    {
                        (userObj.uid==='zf3GLDKHN2anphR5MjafJ9lTWt82') ? (
                        <Link to="/BookApplication" className={classes.adimnLink}>
                            admin
                        </Link>
                        ) : (
                        null
                        )
                    }
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
        </>
    )
};

export default TopBar;