import React, { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import BookApplication from "routes/BookApplication";
import Profile from "routes/Profile";
import Books from "routes/Books";
import Navigation from "components/Navigation";
import TopBar from "components/TopAppBar";
import ScrollToTop from "components/ScrollToTop";
import Detail from "routes/Detail";
import Cart from "routes/Cart";
import BookDetail from "routes/BookDetail";

const AppRouter = ({ refresUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <TopBar userObj={userObj} />}
      <ScrollToTop />
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refresUser={refresUser} />
            </Route>
            <Route exact path="/carts">
              <Cart />
            </Route>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/bookapplication" component={BookApplication} />
            <Route path="/bookdetail/:id" component={BookDetail} />
          </>
        ) : (
          <>
            <Route exact path="/">
              <Auth />
            </Route>
          </>
        )}
      </Switch>
      {isLoggedIn && <Navigation />}
    </Router>
  );
};
export default AppRouter;