import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cart_box: {
      margin: '20px',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cart_box}>
        <p>Cart Page</p>
      </div>
    </>
  );
};