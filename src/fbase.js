import firebase from "firebase/app";
import "firebase/auth";

  export const authService = async function () {
    if(firebase.apps?.length > 0) return firebase.auth();
    else {
      const res = await fetch('/__/firebase/init.json');
      return firebase.initializeApp(await res.json()).auth();
    }
  }