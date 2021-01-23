import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "../../styles/homeStyle.css";


function Nav() {
  const [store] = useStoreContext();

  return (
    <div className="container yan">
      <ul className="nav justify-content-center yandal4">
        <li className="nav-item">
          <a className="nav-link" href="#"><h1 className=""><b>Early Bird Generator</b></h1></a>
        </li>
      </ul>
    </div>

  );
}

export default Nav;
