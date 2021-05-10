import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;

  export const authService = async function () {
    if(firebase.apps?.length > 0) return firebase.auth();
    else {
      const res = await fetch('/__/firebase/init.json');
      return firebase.initializeApp(await res.json()).auth();
    }
  }
