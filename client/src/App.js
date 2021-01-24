
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import "./styles/homeStyle.css";


function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
=======
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import SignForm from "./components/SignupForm";
import LandingPage from "./components/LandingPage/HomePage";


class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
      </div>
      // <SignForm />

    );
  }

}

export default App;
