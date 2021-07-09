import React, { useState, useEffect } from "react";
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  admin_box: {
      margin: '20px',
  },
}));

const BookApplication = () => {
  const classes = useStyles();
  const [books, setBooks] = useState("");
  const [contents, setContents] = useState("");
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
      title: books,
      text: contents,
      createdAt: Date.now(),
      attachmentUrl,
    };
    await dbService.collection("bookapplication").add(bookObj);
    setBooks("");
    setContents("");
    setAttachment();
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setBooks(value);
  };

  const onChangeContents = (event) => {
    const {
      target: { value },
    } = event;
    setContents(value);
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
        <input
          value={books}
          onChange={onChange}
          type="text"
          placeholder="Book Name"
          maxLength={120}
        />
        <input
          value={contents}
          onChange={onChangeContents}
          type="text"
          placeholder="Book Contents"
          maxLength={120}
        />
        <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Application" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
      </form>
    </div>
  );
};
export default BookApplication;