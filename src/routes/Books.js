import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
      dbService.collection("bookapplication").onSnapshot((snapshot) => {
        const nweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNweets(nweetArray);
      });
    }, []);

    console.log(nweets);

    const classes = useStyles();
    return(
        
        <List className={classes.bookroot}>
          {nweets.map((nweet) => (
          <ListItem className={classes.ListItem} key={nweet.id}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="Travis Howard" src={nweet.attachmentUrl} />
              </div>
              <ListItemText
                className={classes.bookTextBox}
                primary={nweet.text}
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
          ))}
      </List>
    )
};