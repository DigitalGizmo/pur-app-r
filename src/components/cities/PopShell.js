import React from 'react'; // , { useState, useEffect }
import { Link } from 'react-router-dom';

const PopShell = ({title, onPopClose}) => {
  return (
    <div className="city-lightbox"> 
      {/* <div className="city-pop-wrapper entry-pop"> */}
      <div className="city-pop">
        <div className="pop-nav">
          <p>
            <a href="/" onClick={ event => onPopClose(event) }>Close</a>
          </p>
        </div>

        <header>
          <h1>City: {title}</h1>
          <p>Specific pop here</p>
          <p><a href="https://dev.picturingurbanrenewal.org/wireframe/city-stories/albany-displaced.html">
          View City Story</a>
          </p>
        </header>
{/*         
        <img 
          src= {`http://dev.picturingurbanrenewal.org/prod-assets/archive/fullpics/${slides[currSlide].imgName}.jpg`}
          alt='meaningful alt text'/> */}
      </div>
    </div>
  );
} // end class

PopShell.defaultProps = {
  title: 'Title for this city'
};

export default PopShell;
















