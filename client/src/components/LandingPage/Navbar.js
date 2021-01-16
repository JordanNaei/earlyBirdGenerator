import React from "react";
import "./landingPagestyle.css";
import SideMenu from "./sidemenu/SideMenu";


// import {
//   BrowserRouter as Router,
//   Switch,
//   // Route,
//   Link
// } from "react-router-dom";

const Navbar = props => (
  <header className="navbar toolbar">
    <nav className="toolbar_navigator">
      <div />
      <div className="toggle-btn">
        <SideMenu click={props.drawerToggleClickHandler} />
      </div>
            <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            {/* need code to switch between Login/Logout */}
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/reportPage">Report</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);


  // function Navbar() {
  //   return (
  //     <nav className="navbar">
       
  //       <Router>
  //         <Switch>
  //           <p>
  //          <Link to = "/Login"> Login </Link>
  //          <Link to ="/#"> Home </Link>
  //          {/* needs developed */}
  //          <Link to ="/reportPage"> Report </Link> 
  //          </p>
  //         </Switch>
  //       </Router>
            

       
        
  //     </nav>
  //   );
  // }


export default Navbar;

<script src="https://unpkg.com/react-router/umd/react-router.min.js"></script>