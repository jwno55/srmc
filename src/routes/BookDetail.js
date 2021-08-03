import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  book_box: {
    marginBottom: '100px',
  },
  bookImage: {
    width: '100%',
    border: "1px solid #000",
  },
  loadingStyle: {
    padding: '20px',
  },
  bookImageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px',
  },
  bookTitleBox:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  bookTitle: {
    fontSize: '2rem',
    fontWeight: '800',
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
        <div className={classes.bookImageBox}>
          <img className={classes.bookImage} alt="book img" src={book.attachmentUrl} />
          <div className={classes.bookTitleBox}>
            <div className={classes.bookTitle}>{book.title}</div>
            <div>By Ki-Dong Kim</div>
          </div>
        </div>
        <p>{book.text}</p>
      </div>
      )}
    </>
  );
};