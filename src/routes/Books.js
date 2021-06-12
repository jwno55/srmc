import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    bookImageBox: {
        width: '30%'
    },
    bookImage: {
        width: '100%'
    },
  }));
  

export default () => {
    const classes = useStyles();
    return(
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/images/book1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary="The Narrow Gate"
                secondary={
                <>
                    <div className={classes.inline} >
                    Berean books 110
                    </div>
                    <div>
                        In June, Sungrak Mission Center published a new translated English version of Let Us Know Jesus…
                    </div>
                </>
                }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/images/book2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="The Narrow Gate"
            secondary={
              <>
                <div className={classes.inline} >
                  Berean books 110
                </div>
                <div>
                    In June, Sungrak Mission Center published a new translated English version of Let Us Know Jesus…
                </div>
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/images/book3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="The Narrow Gate"
            secondary={
              <>
                <div className={classes.inline} >
                  Berean books 110
                </div>
                <div>
                    In June, Sungrak Mission Center published a new translated English version of Let Us Know Jesus…
                </div>
              </>
            }
          />
        </ListItem>
      </List>
    )
};