import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loadingStyle: {
    padding: '20px',
  },

  modalBox: {
    top:0,
    width: '100%',
    height: '100%',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    background: 'rgba(0, 0, 0, .5)',
  },
  modalCon: {
    width: '80%',
    height: '200px',
    zIndex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: 'white',
    opacity : '1',
    fontSize : '1.1rem',
    textAlign : 'center',
  },
  modalButton: {
    fontSize : '1.1rem',
    textAlign : 'center',
    padding : '10px 50px',
    backgroundColor : 'white',
  },

  bookBox: {
    position: 'relative',
    marginBottom: '150px',
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
    margin: '0px 20px 10px 20px',
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
  bookInfoText: {
    marginTop: '10px',
    fontSize: '1.2rem',
    fontWeight: '800',
  },
  bookInfoSubText: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'gray',
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
  bookContentsTitle: {
    margin: '10px 20px',
    fontSize: '1.0rem',
    fontWeight: '800',
  },
  bookContents: {
    margin: '0px 20px 10px 20px',
  },
  bookContentsSub: {
    width: '100%',
    margin: '0px 20px 10px 20px',
    color: 'gray',
  },

  addInfoBox:{
    margin: "0 20px 20px 20px",
    paddingTop: "20px",
    borderTop: "1px solid #ccc",
  },
  addInfoTitle:{
    fontSize: '1.0rem',
    fontWeight: '800',
    marginBottom: '10px',
  },
  addInfoText:{
    color: 'gray',
  },

  applyBox:{
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: '70px',
    width: '100%',
    height:'70px',
    backgroundColor: '#f1f1f1',
  },
  applyButton:{
    flex:1,
    margin: '15px 20px',
    color: "white",
    backgroundColor: 'black',
    fontSize: '1.2rem',
    fontWeight: '700',
  },
  
}));

export default ({ match }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);
  const [modal, setModal] = useState(false);
 
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

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      {loading ? (
          <div className={classes.loadingStyle}>loading...</div>
      ) : (
      <div className={classes.bookBox}>
        
        { modal ? (
        <div className={classes.modalBox}>
          <div className={classes.modalCon}>
            Saint<br />
            Please choose an option
            <button className={classes.modalButton} onClick={ closeModal }>GO CART</button>
          </div>
        </div>
        ) : ( null )}

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
            <div className={classes.bookInfoSubText}>LANGUAGE</div>
            <div className={classes.bookInfoText}>EN</div>
            <div className={classes.bookInfoSubText}>English</div>
          </div>
          <div className={classes.bookInfo}>
            <div className={classes.bookInfoSubText}>RELEASED</div>
            <div className={classes.bookInfoText}>{book.publication.substring(0,4)}</div>
            <div className={classes.bookInfoSubText}>{book.publication.substring(5,10)}</div>
          </div>
          <div className={classes.bookInfoLast}>
            <div className={classes.bookInfoSubText}>PUBLISHER</div>
            <div className={classes.bookInfoText}>Berea</div>
            <div className={classes.bookInfoSubText}>press</div>
          </div>
        </div>
        <div className={classes.bookContentsBox}>
          <div className={classes.bookContentsTitle}>Preface</div>
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
          <div className={classes.bookContentsSub}>{book.bottomsentence}</div>
        </div>
        <div className={classes.addInfoBox}>
          <div className={classes.addInfoTitle}>
            Shipping Information
          </div>
          <div className={classes.addInfoText}>
            Delivery may be delayed due to weather or parcel circumstances.
          </div>
        </div>
        <div className={classes.addInfoBox}>
          <div className={classes.addInfoTitle}>
          Version History
          </div>
          <div className={classes.addInfoText}>
            {book.history}
          </div>
        </div>
        <div className={classes.applyBox}>
          <button className={classes.applyButton} onClick={ openModal } >
            add to cart
          </button>
        </div>
      </div>
      )}
    </>
  );
};