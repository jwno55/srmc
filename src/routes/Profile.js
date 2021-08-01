import React, { useState } from "react";
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

export default ({refresUser, userObj}) => {
  const classes = useStyles();
  const history = useHistory();
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onChange = (event) => {
    const {
      target: {value},
    } = event;
    setNewDisplayName(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if(userObj.displayName !== newDisplayName) {
      await userObj.updateProfile({
        displayName: newDisplayName,
      });
      refresUser();
    }
  }

  return (
    <>
      <div className={classes.profile_box}>
        <p>Profile Page</p>
        <form onSubmit={onSubmit}>
          <input 
            onChange={onChange}
            type="text" 
            placeholder="Display Name" 
            value={newDisplayName}
          />
          <input type="submit" value="Update Profile" />
        </form>
        <img alt="book img" src={userObj.photoURL} />
        <button onClick={onLogOutClick}>Log Out</button>
      </div>
    </>
  );
};