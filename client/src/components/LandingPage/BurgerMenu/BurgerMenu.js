// import React from "react";
import React, { Component } from "react";
import "../landingPagestyle.css";
import SideDrawer from "./sidemenu/SideDrawer";
import BackDrop from "./backdrop/BackDrop";
import Navbar from "../Navbar";

class BurgerMenu extends Component {
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
       
      </div>
    );
  }

}

export default BurgerMenu(); 