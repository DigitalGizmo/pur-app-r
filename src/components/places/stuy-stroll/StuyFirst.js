import React from "react";
import CaptionBand from "./CaptionBand";
import "./StuyStroll.css";

const StuyFirst = ({loading, error, data}) => {

  return (
    <div id="wrapper">
      <CaptionBand 
        loading = {loading}
        error = {error}
        data = {data}
      />
      <section id="view-frame">

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 6006 1479"
          preserveAspectRatio="xMidYMid meet" 
          class="svg-content"
        >
          <g id="photo">
            <image  
                width="5270" height="1479" 
                href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/first-ave.jpg"  
                transform="translate(0 0)"> 
            </image>
          </g>
        </svg>
      </section> {/* end view-frame */}

    </div>
  );
}

export default StuyFirst;