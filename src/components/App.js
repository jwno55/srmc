import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { fb } from "fbase";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CircularProgress, LinearProgress } from "@material-ui/core";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
      setInit(true);
    });
  }, []);
  return <>
    <CssBaseline />
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : <LinearProgress />}
  </>;
}

export default App;