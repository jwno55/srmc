import React, { useState } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  bookroot: {
    width: '100%',
  },
  inline: {
    display: 'inline',
  },
  bookImageBox: {
    flex: 1,
    border: "1px solid #ccc",
    marginRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
    paddingTop: "15px",
    paddingBottom: "15px",
    boxShadow: "2px 2px 3px #ccc",
  },
  bookImage: {
      width: '100%'
  },
  ListItem: {
    
  },
  bookTextBox: {
    marginTop: "5px",
    paddingTop: "15px",
    height: "25vh",
    flex: 2,
  },
  bookTextBoxIn: {
    display:"flex",
    flexWrap:"wrap",
  },
}));

export default () => {
    const classes = useStyles();
    return(
        <List className={classes.bookroot}>
          <ListItem className={classes.ListItem}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="Travis Howard" src="/images/book1.jpg" />
              </div>
              <ListItemText
                className={classes.bookTextBox}
                primary="The Narrow Gate"
                secondary={
                <div className={classes.bookTextBoxIn}>
                    <div className={classes.inline} >
                    Berean books 110
                    </div>
                    <div>
                        In June, Sungrak Mission Center published a new translated English version of Let Us Know Jesus…
                    </div>
                </div>
                }
              />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem className={classes.ListItem}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="Travis Howard" src="/images/book2.jpg" />
              </div>
              <ListItemText
                className={classes.bookTextBox}
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
          <ListItem className={classes.ListItem}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="Travis Howard" src="/images/book3.jpg" />
              </div>
              <ListItemText
                className={classes.bookTextBox}
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