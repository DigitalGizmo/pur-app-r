import React, { useRef, useState, useEffect } from "react";
import CaptionBand from "./CaptionBand";
import "./StuyStroll.css";

const StuyFirst = ({loading, error, data, onPageChange}) => {
  const svgEl = useRef(null);
  const [svgWidth, setSvgWidth] = useState(0);
  // const [captionWidth, setCaptionWidth] = useState(0);
  
  // const findWidth = () => {
  //   // const sWidth = svgEl.current.clientWidth;
  //   setSvgWidth(svgEl.current.clientWidth);
  // }

  // const updateCaptionWidth = svgWidth => {
  //   setCaptionWidth(svgWidth);
  //   console.log('setCaptionWidth: ' + svgWidth);
  // }

  function debounce(func, milSecs) {
    let timer;
    return () => {
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, arguments)
      }, milSecs)
    }
  }

  function handleResize () {
    setSvgWidth(svgEl.current.clientWidth);
    console.log('svgEl ' + svgEl.current.clientWidth);
    console.log('svgWidth ' + svgWidth);
  }

  // const debounedHandleResize = debounce(function handleResize () {
  //   setSvgWidth(svgEl.current.clientWidth);
  //   console.log('svgEl ' + svgEl.current.clientWidth);
  //   console.log('svgWidth ' + svgWidth);
  // }, 1000)

  
  
  // Change caption size on resize
  useEffect (() => {
    const debounedHandleResize = debounce(handleResize, 1000)
    // findWidth();
    // function handleResize () {
    //   setSvgWidth(svgEl.current.clientWidth);
    //   console.log('svgEl ' + svgEl.current.clientWidth);
    //   console.log('svgWidth ' + svgWidth);
    // }
    window.addEventListener('resize', debounedHandleResize);
    return () => {
      console.log('removing listener');
      window.removeEventListener('resize', debounedHandleResize);
    }
  });

  // Size caption on startup
  useEffect (() => {
    handleResize();
  },[]);

  // useEffect (() => {
  //   updateCaptionWidth(svgWidth);
  //   // console.log('setCaptionWidth: ' + captionWidth);
  // }, [svgWidth]);

  const scrollToRight = () => {
    document.getElementById('wrapper').scrollLeft = 1200;
  }

  return (
    <div id="stroll-wrapper">

{/*      <section id="view-frame">
*/}
        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 5270 1479"
          preserveAspectRatio="xMidYMid meet" 
          className="svg-content"
          ref={svgEl}
        >
          <g id="photo">
            <image  
                width="5270" height="1479" 
                href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/first-ave.jpg"  
                transform="translate(0 0)"> 
            </image>
          </g>

          <g id="turn-buttons">
            <a href="/" onClick={ e => { e.preventDefault(); onPageChange(3, 1)}}>
            <polyline className="st9" points="5172.86 356.77 5231.28 404.61 5172.86 454.62"/>
              <text transform="translate(5037.27 411.46)" className="st10 st2 st11">TURN THE CORNER</text>
            </a>
          </g>

          <g id="turn-buttons">
            <a href="/" onClick={ e => { e.preventDefault(); onPageChange(1, 2)}}>
              <polyline className="st9" points="85.2,191 26.8,239 85.2,289  "/>
              <text transform="translate(85.1718 245)" className="st10 st2 st11">Intro</text>
            </a>
          </g>

          <g id="turn-buttons">
            <a href="/" onClick={ e => { e.preventDefault(); scrollToRight()}}>
              <polyline className="st9" points="85.2,191 26.8,239 85.2,289  "/>
              <text transform="translate(85.1718 345)" className="st10 st2 st11">find/scroll right</text>
            </a>
          </g>

        </svg>

        <CaptionBand 
          loading = {loading}
          error = {error}
          data = {data}
          captionWidth = {svgWidth}
        />
        {/* <p onClick={findWidth}>debug:</p> */}

    </div>
  );
}

export default StuyFirst;