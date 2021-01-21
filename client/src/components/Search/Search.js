import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search.css";

function Search() {
  return (
    <div className="search-box">
        <input className="search-text" type="text" name="" placeholder="Search"/>
        <button className="search-btn"><FontAwesomeIcon icon={faSearch}/></button>
    </div>
  );
}

export default Search;
