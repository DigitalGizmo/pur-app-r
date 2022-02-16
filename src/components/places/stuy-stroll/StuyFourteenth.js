import React, { useRef, useState, useEffect} from "react";
import { debounce } from "../../common/Utility";
import CaptionBand from "./CaptionBand";
import Hotspots from './Hotspots';
import StrollMore from './StrollMore';
import "./StuyStroll.css";

const StuyFourteenth = ({loading, error, interactivePart, 
    onPageChange, highlights, hoverSpot, unHoverSpot,
    showStrollMore, isMoreShowing, highlightIndex,
    closeStrollMore}) => {
  const svgEl = useRef(null);
  const [svgWidth, setSvgWidth] = useState(0);
  // const [highlightStates, setHighlightStates] = useState([]);

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

  // Set array of highlight boolean values to size of immage array
  // const initHighlightStates = () => {
  //   console.log('num highlights: ' + interactivePart.node.hotspots.edges.length);
  // }

  // Size caption on startup
  useEffect (() => {
    handleResize();
    // initHighlightStates();
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

          <Hotspots
            hotspots={interactivePart.node.hotspots.edges}
            highlights = {highlights}
            hoverSpot = {hoverSpot}
            unHoverSpot = {unHoverSpot}
            />

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
          hotspots = {interactivePart.node.hotspots.edges}
          captionWidth = {svgWidth}
          highlights = {highlights}
          hoverSpot = {hoverSpot}
          unHoverSpot = {unHoverSpot}
          showStrollMore = {showStrollMore}
          closeStrollMore = {closeStrollMore}
          highlightIndex = {highlightIndex}
          isMoreShowing = {isMoreShowing}
        />



    </div>
  );
}

export default StuyFourteenth;