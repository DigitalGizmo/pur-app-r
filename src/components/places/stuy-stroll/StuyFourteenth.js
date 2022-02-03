import React from "react";
import CaptionBand from "./CaptionBand";
import "./StuyStroll.css";

const StuyFourteenth = ({loading, error, data, onPageChange}) => {

  return (
    <div id="stroll-wrapper">

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 6006 1479"
          preserveAspectRatio="xMidYMid meet" 
          className="svg-content"
        >
          <g id="photo">
            <image  
                width="6006" height="1500" 
                href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/fourteenth-st.jpg"  
                transform="translate(0 0)"> 
            </image>
          </g>

          <g id="turn-buttons">
            <a href="/" onClick={ e => { e.preventDefault(); onPageChange(2, 2)}}>
              <polyline className="st9" points="85.2,191 26.8,239 85.2,289  "/>
              <text transform="translate(85.1718 245)" className="st10 st2 st11">TURN THE CORNER</text>
            </a>
          </g>

        </svg>

        <CaptionBand 
          loading = {loading}
          error = {error}
          data = {data}
        />

    </div>
  );
}

export default StuyFourteenth;