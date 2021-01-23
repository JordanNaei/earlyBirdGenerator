/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import SignForm from "./components/SignupForm";
import Navbar from "./components/LandingPage/Navbar";
import Header from "./components/LandingPage/Header";
import Section from "./components/LandingPage/Section";
import SideDrawer from "./components/LandingPage/sidemenu/SideDrawer";
import BackDrop from "./components/LandingPage/backdrop/BackDrop";
import DividerPage from "./components/Divider/Divider"

class App extends Component {
   state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div className= "container" style={{ height: "100%" }}>
        <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}

       <Header />
        <Section />
      </div>
    );
  }



}
  

export default App;
