import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  book_box: {
      margin: '20px',
  },
}));

export default ({ match }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.book_box}>
        <p>Book Detail Page</p>
      </div>
    </>
  );
};