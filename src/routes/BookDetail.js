import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingStyle: {
    padding: '20px',
  },

  bookBox: {
    marginBottom: '100px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },

  bookImageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px',
  },
  bookImage: {
    width: '100%',
    border: "1px solid #000",
  },

  bookTitleBox:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '30px',
  },
  bookTitle: {
    fontSize: '2rem',
    fontWeight: '800',
  },

  bookInfoBox:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '30px',
  },
  bookInfo: {
    flex:1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bookContentsBox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '30px',
  },
  bookContents: {
    marginBottom: '10px',
  },

  applyBox:{
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '60px',
    width: '100%',
    height:'60px',
    backgroundColor: '#f7f7f7',
  },
  applyButton:{
    flex:1,
    margin: '10px',
    color: "white",
    backgroundColor: 'black',
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
      <div className={classes.bookBox}>
        <div className={classes.bookImageBox}>
          <img className={classes.bookImage} alt="book img" src={book.attachmentUrl} />
        </div>
        <div className={classes.bookTitleBox}>
            <div>Kim Ki Dong Theology Series {book.series}</div>
            <div className={classes.bookTitle}>{book.title}</div>
            <div>By Ki-Dong Kim</div>
        </div>
        <div className={classes.bookInfoBox}>
          <div className={classes.bookInfo}>language</div>
          <div className={classes.bookInfo}>released</div>
          <div className={classes.bookInfo}>publisher</div>
        </div>
        <div className={classes.bookContentsBox}>
          <div className={classes.bookContents}>Preface</div>
          <div className={classes.bookContents}>
          {book.contents.split("\n").map((line) => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
          </div>
          <div className={classes.bookContents}>{book.bottomsentence}</div>
        </div>
        <div>
          Shipping Information
        </div>
        <div>
          Version History
        </div>
        <div>
          More books by Ki-Dong Kim
        </div>
        <div className={classes.applyBox}>
          <button className={classes.applyButton}>add to cart</button>
        </div>
      </div>
      )}
    </>
  );
};