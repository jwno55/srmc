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

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <TopBar />}
      <ScrollToTop />
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/books">
              <Books />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/bookapplication">
              <BookApplication />
            </Route>
            <Route path="/detail/:id" component={Detail} />
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