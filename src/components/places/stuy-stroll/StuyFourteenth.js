import React, { useRef, useState, useEffect } from "react";
import { debounce } from "../../common/Utility";
import CaptionBand from "./CaptionBand";
import "./StuyStroll.css";

const StuyFourteenth = ({loading, error, data, onPageChange}) => {
  const svgEl = useRef(null);
  const [svgWidth, setSvgWidth] = useState(0);

  function handleResize () {
    setSvgWidth(svgEl.current.clientWidth);
  }
  
  // Change caption size on resize
  useEffect (() => {
    const debouncedHandleResize = debounce(handleResize, 1000)
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  });

  // Size caption on startup
  useEffect (() => {
    handleResize();
  },[]);

  return (
    <div id="stroll-wrapper">

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 6006 1479"
          preserveAspectRatio="xMidYMid meet" 
          className="svg-content"
          ref={svgEl}
        >
          <g id="photo">
            <image  
                width="6006" height="1479" 
                href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/fourteenth-st.jpg"  
                transform="translate(0 0)"> 
            </image>
          </g>

          <g id="turn-buttons">
            <a href="/" onClick={ e => { e.preventDefault(); onPageChange(2, 2)}}>
              <polyline className="arrows" points="85.2,691 26.8,739 85.2,789  "/>
              <text transform="translate(85 755)" className="turn-text">Turn the Corner</text>
            </a>
          </g>

        </svg>

        <CaptionBand 
          loading = {loading}
          error = {error}
          data = {data}
          captionWidth = {svgWidth}
        />

    </div>
  );
}

export default StuyFourteenth;