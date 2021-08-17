import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bookroot: {
    width: '100%',
    padding: '20px 10px',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap:"wrap",
    marginBottom:"20px",
  },
  bookImageBox: {
    flex: 1,
  },
  bookImage: {
    width: '100%',
    border: "1px solid #707070",
    boxShadow: "1px 1px 1px #ccc ",
  },
  bookTitle: {
    
  },
  bookText: {
    height: "60px",
    overflow: "hidden",
  },
  loadingStyle: {
    padding: '20px',
  }
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
          <div className={classes.loadingStyle}>loading...</div>
      ) : (
      <div className={classes.bookroot}>
        {books.map((book) => (
        <Link to={`/bookdetail/${book.id}`}>
          <div className={classes.listItem} key={book.id}>
              <div className={classes.bookImageBox}>
                  <img className={classes.bookImage} alt="book img" src={book.attachmentUrl} />
              </div>
              <div className={classes.bookTitle}>
                {book.title}
              </div>
              <div className={classes.bookText}>
                {book.text}
              </div>
          </div>
        </Link>
        ))}
    </div>
    )}
  </>
)};