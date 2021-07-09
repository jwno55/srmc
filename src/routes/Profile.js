import React, { useState, useEffect } from "react";
import { authService } from "fbase";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile_box: {
      margin: '20px',
  },
  admin_box: {
    margin: '20px',
},
}));

export default () => {
  const classes = useStyles();
  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  return (
    <>
      <div className={classes.profile_box}>
        <p>Profile Page</p>
        <button onClick={onLogOutClick}>Log Out</button>
      </div>
    </>
  );
};