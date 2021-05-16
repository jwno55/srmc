import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login_wrap: {
    display:"flex",
    flexDirection:"column",
    flexWrap:"wrap",
    justifyContent:"center",
    marginLeft:"16px",
    marginRight:"16px",
    height:"100vh",
  },
  login_title: {
    fontSize:"2rem",
    fontWeight:"bold",
    marginBottom:"5px",
  },
  login_text_box: {
    marginBottom:"30px",
  },
  login_text: {
    fontSize:"0.9rem",
    marginRight:"5px",
  },
  login_text_blue: {
    fontSize:"0.9rem",
    color:"#0071e3",
    fontWeight:"600",
  },
  login_input: {
    width:"100%",
    height:56,
    marginBottom:"16px",
    borderRadius: 4,
    padding: "17px 16px",
    border:"1px",
    borderColor:"#d2d2d7",
    borderStyle: "solid",
  },
  login_button: {
    width:"100%",
    height:56,
    background: "#BABABB",
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '0 30px',
    marginTop:"31px",
    marginBottom:"47px",
    fontSize:"1rem",
  },
  login_hr_box: {
    display:"flex",
    alignItems: "center",
    marginBottom:"34px",
  },
  login_hr_text: {
    fontSize:"1rem",
    marginLeft:"10px",
    marginRight:"10px",
  },
  login_hr: {
    flex:1,
    color:"#d2d2d7",
  },
  login_google_button: {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems: "center",
    width:"100%",
    height:56,
    background: "white",
    border: 0,
    borderRadius: 4,
    color: '#2E2E2E',
    padding: '0 30px',
    fontSize:"1rem",
    border:"1px",
    borderColor:"#d2d2d7",
    borderStyle: "solid",
  },
  login_google_logo: {
    width:"1rem",
    marginRight:5,
  }
}));

const Auth = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    }
    const data = await authService.signInWithPopup(provider);
    //console.log(data);
  };
  return (
    <div className={classes.login_wrap}>
      <div className={classes.login_title}>
        Please sign in.
      </div>
      <div className={classes.login_text_box}>
        <span className={classes.login_text}>
          {newAccount ? "" : "Not a member yet?"} 
        </span>
        <span onClick={toggleAccount} className={classes.login_text_blue}>
          {newAccount ? "Please Sign In" : "Register now"}
        </span>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <input 
            className={classes.login_input}
            name="email"
            type="email"
            placeholder="Email or Username"
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            className={classes.login_input}
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <button
            className={classes.login_button}
            type="submit"
          >{newAccount ? "Create Account" : "Login"}
          </button>
        </div>
        {error}
      </form>
      <div className={classes.login_hr_box}>
        <hr className={classes.login_hr} />
        <span className={classes.login_hr_text}>or</span>
        <hr className={classes.login_hr} />
      </div>
      <div>
        <button 
          className={classes.login_google_button}
          onClick={onSocialClick} name="google">
          <img className={classes.login_google_logo} src="/images/google_logo.png" alt="G"/>
          Google
        </button>
      </div>
    </div>
  );
};
export default Auth;