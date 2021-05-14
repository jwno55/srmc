import React, { useState } from "react";
import { dbService } from "fbase";

const BookApplication = () => {
  const [books, setBooks] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("bookapplication").add({
      books,
      createdAt: Date.now(),
    });
    setBooks("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setBooks(value);
  };
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
        <input type="submit" value="Application" />
      </form>
    </div>
  );
};
export default BookApplication;