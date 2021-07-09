import React, { useState, useEffect } from "react";
import { fb } from "fbase";
import { v4 as uuidv4 } from "uuid";

const BookApplication = () => {
  const [books, setBooks] = useState("");
  const [attachment, setAttachment] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const attachmentRef = fb.storage()
        .ref()
        .child(`${uuidv4()}`);
      const response = await attachmentRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const bookObj = {
      text: books,
      createdAt: fb.firestore.Timestamp.fromDate(new Date()),
      attachmentUrl,
    };
    await fb.firestore().collection("bookapplication").add(bookObj);
    setBooks("");
    setAttachment("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setBooks(value);
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={books}
          onChange={onChange}
          type="text"
          placeholder="Book Name"
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