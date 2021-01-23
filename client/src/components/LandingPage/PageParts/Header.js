import React from "react";
import "./landingPagestyle.css";
// import Greeting from "./Greetings";
// placeholder for header messaging
import UserGreeting from "./Greetings";
// import Greeting from "./Greeings";

function Header() {
  return (
    
    <header className="header">
      {/* test message. Replace with Greeting from ./Greetings once logic is connected to login state. */}
      <UserGreeting />
      <div></div>
    </header>
    
  );
}

export default Header;
