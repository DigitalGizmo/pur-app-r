import React, { useRef, useState, useEffect} from "react";
import { debounce } from "../../common/Utility";
import CaptionBand from "./CaptionBand";
import Hotspots from './Hotspots';
import "./StuyStroll.css";

const StuyFirst = ({loading, error, interactivePart, 
    onPageChange, highlights, hoverSpot, unHoverSpot,
    showStrollMore, isMoreShowing, highlightIndex,
    closeStrollMore }) => {
  const svgEl = useRef(null);
  const [svgWidth, setSvgWidth] = useState(0);

  function handleResize () {
    setSvgWidth(svgEl.current.clientWidth);
  }
  
  // Change caption size on resize
  // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  useEffect (() => {
    const debouncedHandleResize = debounce(handleResize, 1000)
    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      // console.log('removing listener');
      window.removeEventListener('resize', debouncedHandleResize);
    }
  });

  // Size caption on startup
  useEffect (() => {
    handleResize();
  },[]);

  // const scrollToRight = () => {
  //   document.getElementById('wrapper').scrollLeft = 1200;
  // }

  return (
    <div id="stroll-wrapper">
      <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px"
        viewBox="0 0 5248 1479"
        preserveAspectRatio="xMidYMid meet" 
        className="svg-content"
        ref={svgEl}
      >
        <g id="photo">
          <image  
              width="5248" height="1479" 
              href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/first-ave.jpg"  
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
          <a href="/" onClick={ e => { e.preventDefault(); onPageChange(3, 1)}}>
            <polyline className="arrows" points="5172.86 697 5231.28 745 5172.86 795"/>
            <text transform="translate(4940 755)" className="turn-text">Turn the Corner</text>
          </a>
        </g>

        <g id="turn-buttons">
          <a href="/" onClick={ e => { e.preventDefault(); onPageChange(1, 2)}}>
            <polyline className="arrows" points="85.2,691 26.8,739 85.2,789  "/>
            <text transform="translate(85 755)" className="turn-text">Return to Intro</text>
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

export default StuyFirst;