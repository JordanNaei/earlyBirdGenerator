import React from "react";
import "./SideDrawer.css";
const sideDrawer=props=> {
  let drawerClasses=["side-drawer"];
  if (props.show) {
    drawerClasses=["side-drawer", "open"];
  }
  return ( <nav className= {
    drawerClasses.join(" ")
  }
  > <ul> <li> <a href="/Login">Login</a> </li> <li> <a href="/">Home</a> </li> <li> <a href="/reportPage">Report</a> </li> </ul> </nav>);
}

;
export default sideDrawer;