import React, { useState } from "react";
import AppRouter from 'components/Router';
import { authService } from "fbase";

function unsafeAuth() {
  let nullableAuth = null;
  authService().then((auth) => nullableAuth = auth);
  return nullableAuth;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(unsafeAuth().currentUser);
    return (
        <>
          <AppRouter isLoggedIn={isLoggedIn} />
        </>
    );
}


export default App;
