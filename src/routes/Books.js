import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Loading from "components/Loading";

const useStyles = makeStyles((theme) => ({
  bookList: {
    marginBottom: '100px',
  },

  listLink: {
    textDecoration: 'none',
  },

  listItem: {
    display: 'flex',
    flexWrap:"wrap",
    margin: '15px 15px 0px 15px',
    paddingBottom: '10px',
    borderBottom: "1px solid #ccc",
  },

  bookImageBox: {
    flex: 1,
    marginRight: '20px',
  },
  bookImage: {
    width: '100%',
    border: "1px solid #707070",
    boxShadow: "1px 1px 1px #ccc ",
  },

  bookTextBox: {
    flex: 1.5,
  },
  bookSeries: {
    color: '#aeaeae',
    fontSize: '0.8rem',
  },
  bookTitle: {
    color: 'black',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  bookSummary: {
    color: '#aeaeae',
    height: "80px",
    overflow: "hidden",
  },
}));

export default () => {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   dbService.collection("bookapplication").onSnapshot((snapshot) => {
  //     const bookArray = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setBooks(bookArray);
  //   });
  // }, []);

  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  const getSrBooks = async () => {
    const books = await dbService
      .collection("bookapplication")
      .orderBy("createdAt","desc")
      .get();
      setBooks(books.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
      setLoading(false);
  };

  useEffect(() => {
    getSrBooks();
  }, []);

  return(
    <>
      {loading ? (
          <Loading />
      ) : (
      <div className={classes.bookList}>
        {books.map((book, i) => (
        <Link to={`/bookdetail/${book.id}`} className={classes.listLink} key={i}>
          <div className={classes.listItem}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="book img" src={book.attachmentUrl} />
              </div>
              <div className={classes.bookTextBox}>
                <div className={classes.bookSeries}>Berean books {book.series}</div>
                <div className={classes.bookTitle}>{book.title}</div>
                <div className={classes.bookSummary}>{book.summary}</div>
                <div>...</div>
              </div>
          </div>
        </Link>
        ))}
    </div>
    )}
  </>
)};