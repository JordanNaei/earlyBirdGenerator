import React from "react";
import "./landingPagestyle.css";
//import API and URL results


function Section() {
  return (
    
    <section className="section">
              
   {/* Below buttons need to be setup in Buttons.js */}

     {/* Need to align with API search */}

        {/* if (status !== True) {disable search button} */}
        <form className="form-inline my-2 my-lg-0" style={{ marginRight: "auto"}}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="API Search"
            aria-label="Search"
          />
          
          {/* Need to ink to OnClick event. Replace with SearchButton component */}
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ marginRight: "auto" }}>
            Search
            </button>
          
       
        {/* Need to align with URL search */}

        {/* if (status !== True) {disable search button} */}
        <form className="form-inline my-2 my-lg-0" style={{ marginLeft: "auto" }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="URL Search"
            aria-label="Search"
          />
          
          {/* Need to link to OnClick event. Replace with SearchButton component */}
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={{ marginLeft: "auto" }}>
            Search
            </button>
          
        </form>
         </form>
{/*          <div>
         <APIResults />  <URLResults /> 
         </div> */}
            </section>
  
  );
}

export default Section;
