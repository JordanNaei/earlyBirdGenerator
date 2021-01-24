import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';


export function GuestGreeting() {
  return(
    // <div class ="container">
    <div class="jumbotron">
      <h1>Welcome</h1>
      <p>
        This application allows users to search for news articles according to user input. The applications also
        allows the user to search for an external article. With both results, the user will be able to export chosen
        articles to a pre-templated report for those in media relations that provide Early Bird reports to their clients.
        If you would like access to this application, please select "Login" above.
                     </p>
    </div>
    // </div>
    )};

export function UserGreeting() {
  return(

      <div class="jumbotron">
      <h1>Welcome Back!</h1>
      <p>
        This application allows users to search for news articles according to user input. The applications also
        allows the user to search for an external article. With both results, the user will be able to export chosen
        articles to a pre-templated report for those in media relations that provide Early Bird reports to their clients.
                     </p>
    </div>
    )};

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}



// export default GuestGreeting;
// export default UserGreeting;
export default Greeting;