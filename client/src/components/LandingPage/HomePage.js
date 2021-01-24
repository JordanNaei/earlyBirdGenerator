import React, { Component } from "react";
import Header from "./PageParts/Header";
import Section from "./PageParts/Section";
import Navbar from "./PageParts/Navbar";
import SideDrawer from "./BurgerMenu/sidemenu/SideDrawer.js";
import BackDrop from "./BurgerMenu/backdrop/BackDrop";

class LandingPage extends Component {
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
  

export default LandingPage;