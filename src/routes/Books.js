import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";

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
    const [books, setBooks] = useState([]);
    useEffect(() => {
      dbService.collection("bookapplication").onSnapshot((snapshot) => {
        const bookArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBooks(bookArray);
      });
    }, []);

    console.log(books);

    const classes = useStyles();
    return(
        
        <List className={classes.bookroot}>
          {books.map((book) => (
          <Link to={`/bookdetail/${book.id}`}>
          <ListItem className={classes.ListItem} key={book.id}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="Travis Howard" src={book.attachmentUrl} />
              </div>
              <ListItemText
                className={classes.bookTextBox}
                primary={book.title}
                secondary={
                <div className={classes.bookTextBoxIn}>
                    <div className={classes.inline} >
                      {book.text}
                    </div>
                </div>
                }
              />
          </ListItem>
          </Link>
          ))}
      </List>
    )
};