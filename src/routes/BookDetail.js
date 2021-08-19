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
  },

  bookImageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px',
  },
  bookImage: {
    width: '80%',
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
  bookSeries: {
    color: '#aeaeae',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  bookTitle: {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '800',
    marginBottom: '10px',
  },
  bookAuthor: {
    fontSize: '1rem',
    fontWeight: '500',
  },

  bookInfoBox:{
    margin: "0 20px 20px 20px",
    borderTop: "1px solid #ccc",
    paddingBottom: '20px',
    borderBottom: "1px solid #ccc",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bookInfo: {
    flex:1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    borderRight: "1px solid #ccc",
  },
  bookInfoLast: {
    flex:1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
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
    bottom: '70px',
    width: '100%',
    height:'70px',
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
            <div className={classes.bookSeries}>Kim Ki Dong Theology Series {book.series}</div>
            <div className={classes.bookTitle}>{book.title}</div>
            <div className={classes.bookAuthor}>By Ki-Dong Kim</div>
        </div>
        <div className={classes.bookInfoBox}>
          <div className={classes.bookInfo}>
            <div>LANGUAGE</div>
            <div>EN</div>
            <div>English</div>
          </div>
          <div className={classes.bookInfo}>
            <div>RELEASED</div>
            <div>1991</div>
            <div>jan 18</div>
          </div>
          <div className={classes.bookInfoLast}>
            <div>PUBLISHER</div>
            <div>Berea</div>
            <div>press</div>
          </div>
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