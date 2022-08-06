/*eslint-disable*/
import React from "react";

// reactstrap components

// core components

function PresentationHeader() {
  return (
    <>
      <div className="page-header clear-filter">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
         
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            
          ></div>
        </div>
        <div className="rellax-text-container rellax-text">
          <h1 className="h1-seo" data-rellax-speed="-1">
            Mortgage Solutions
          </h1>
        </div>
        <h3 className="h3-description rellax-text" data-rellax-speed="-1">
          Brokering Loans for Better Solutions
        </h3>
        <h6
          className="category category-absolute rellax-text"
          data-rellax-speed="-1"
        >
          Website by{" "}
          <a
            href="https://www.creative-tim.com?ref=nuk-pro-react-presentation-header"
            target="_blank"
          >
            <img
              alt="..."
              className="creative-tim-logo"
              style={ { width: "50px" } }
              src={require("assets/img/invigorate-logo.png")}
            ></img>
            Invigorate Code LLC
          </a>
          .
        </h6>
      </div>
    </>
  );
}

export default PresentationHeader;
