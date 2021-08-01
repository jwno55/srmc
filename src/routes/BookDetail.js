import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  book_box: {
      margin: '20px',
  },
  bookImage: {
    width: '100%',
  },
  loadingStyle: {
    padding: '20px',
  },
}));

export default ({ match }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);
 
  const getSrBook = async () => {
      const book = dbService.collection("bookapplication").doc(match.params.id);
      await book.get().then((doc) => {
          if (doc.exists) {
            setBook(doc.data());
            setLoading(false);
          } else {
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    getSrBook();
  }, []);

  return (
    <>
      {loading ? (
          <div className={classes.loadingStyle}>loading...</div>
      ) : (
      <div className={classes.book_box}>
        <p>{book.title}</p>
        <p>{book.text}</p>
        <img className={classes.bookImage} alt="book img" src={book.attachmentUrl} />
      </div>
      )}
    </>
  );
};