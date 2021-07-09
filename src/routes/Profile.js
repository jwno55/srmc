import React, { useState, useEffect } from "react";
import { fb } from "fbase";
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

const Profile = () => {
  const classes = useStyles();

  const history = useHistory();

  const onLogOutClick = () => {
    fb.auth().signOut();
    history.push("/");
  };

  const [nweet, setNweet] = useState("");
  const [attachment, setAttachment] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    await fb.firestore().collection("bookapplication").add({
      text: nweet,
      createdAt: fb.firestore.Timestamp.fromDate(new Date()),
    });
    setNweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onClearAttachment = () => setAttachment(null);

  return (
    <>
      <div className={classes.profile_box}>
        <button onClick={onLogOutClick}>Log Out</button>
      </div>
      <hr></hr>
      <div className={classes.admin_box}>
        관리자
        <form onSubmit={onSubmit}>
          <input
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="BOOK NAME"
            maxLength={120}
          />
          <input type="file" accept="image/*" onChange={onFileChange} />
          <input type="submit" value="Apply" />
          {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
          )}
        </form>
      </div>
    </>
  );
};
export default Profile;