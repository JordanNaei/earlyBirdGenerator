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
