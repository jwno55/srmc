import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  admin_box: {
      margin: '20px 20px 300px 20px',
      height: '100vh',
  },
  form_box: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: '',
  },
  form_list: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  form_span: {
    flex: 1,
    marginRight : '10px',
  },
  form_input: {
    flex: 2,
  },
  form_textarea: {
    flex: 1,
    height : '200px',
  },
  form_sentence: {
    flex: 1,
    height : '100px',
  },
}));

const BookApplication = () => {
  const classes = useStyles();
  const [books, setBooks] = useState({
    title: "",
    summary: "",
    contents: "",
    bottomsentence: "",
    author: "Ki-Dong Kim",
    publication: "",
    history: "",
    press: "Berea Press",
    series: "1",
  });
  const [attachment, setAttachment] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = storageService
        .ref()
        .child(`${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const bookObj = {
      title: books.title,
      summary: books.summary,
      contents: books.contents,
      bottomsentence: books.bottomsentence,
      author: books.author,
      publication: books.publication,
      history: books.history,
      press: books.press,
      series: books.series,
      createdAt: Date.now(),
      attachmentUrl,
    };
    await dbService.collection("bookapplication").add(bookObj);
    setBooks({
      title: "",
      summary: "",
      contents: "",
      bottomsentence: "",
      author: "Ki-Dong Kim",
      publication: "",
      history: "",
      press: "Berea Press",
      series: "1",
    });
    setAttachment();
  };

  const onChange = (e) => {
    setBooks({
      ...books, 
      [e.target.name]: e.target.value
    })
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      //console.log(finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment(null);
  
  return (
    <div className={classes.admin_box}>
      <form onSubmit={onSubmit}>
        <div className={classes.form_box}>
          <article className={classes.form_list}>
            <span className={classes.form_span}>title</span> 
            <input className={classes.form_input}
              name="title"
              value={books.title}
              onChange={onChange}
              type="text"
              placeholder="Book title"
              maxLength={120}
            />
          </article>
          <article className={classes.form_list}>
            <span className={classes.form_span}>author</span> 
            <input className={classes.form_input} 
              name="author"
              value={books.author}
              onChange={onChange}
              type="text"
              placeholder="Book author"
              maxLength={120}
            />
          </article>
          <article className={classes.form_list}>
          <span className={classes.form_span}>publication</span>
            <input className={classes.form_input}
              name="publication"
              value={books.publication}
              onChange={onChange}
              type="date"
              placeholder="Book publication"
              maxLength={120}
            />
          </article>
          <article className={classes.form_list}>
          <span className={classes.form_span}>press</span>
            <input className={classes.form_input}
              name="press"
              value={books.press}
              onChange={onChange}
              type="text"
              placeholder="Book press"
              maxLength={120}
            />
          </article>
          <article className={classes.form_list}>
          <span className={classes.form_span}>series</span>
            <input className={classes.form_input}
              name="series"
              value={books.series}
              onChange={onChange}
              type="number"
              placeholder="Series Numver"
            />
          </article>
          <article className={classes.form_list}>
            <textarea className={classes.form_sentence}
              name="history"
              value={books.history}
              onChange={onChange}
              type="text"
              placeholder="Version History"
            />
          </article>
          <article className={classes.form_list}>
            <textarea className={classes.form_sentence}
              name="summary"
              value={books.summary}
              onChange={onChange}
              type="text"
              placeholder="Book Summary"
            />
          </article>
          <article className={classes.form_list}>
            <textarea className={classes.form_textarea}
              name="contents"
              value={books.contents}
              onChange={onChange}
              type="text"
              placeholder="Book Contents"
            />
          </article>
          <article className={classes.form_list}>
            <textarea className={classes.form_sentence}
              name="bottomsentence"
              value={books.bottomsentence}
              onChange={onChange}
              type="text"
              placeholder="Bottom Sentence"
            />
          </article>
          <article className={classes.form_list}>
            <input type="file" accept="image/*" onChange={onFileChange} />
          </article>
          <article className={classes.form_list}>
            {attachment && (
              <div>
                <img src={attachment} width="50%" />
                <button onClick={onClearAttachment}>Clear</button>
              </div>
            )}
          </article>
          <article className={classes.form_list}>
            <input type="submit" value="Application" />
          </article>
        </div>
      </form>
    </div>
  );
};
export default BookApplication;