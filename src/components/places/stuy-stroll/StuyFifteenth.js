import React from 'react';

const StuyFifteenth = ({onPageChange}) => {

  return (
    <div id="stroll-wrapper">
      <div>

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 2000 1479"
          preserveAspectRatio="xMidYMid meet" 
          className="svg-content"
        >

          <g id="photo">
            <image  
                width="2000" height="1254" 
                href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/fifteenth.jpg"  
                transform="translate(0 0)"> 
            </image>
          </g>

          <g id="turn-buttons">
            <a href="/" onClick={ e => { e.preventDefault(); onPageChange(2, 1)}}>
              <text transform="translate(1870 411.46)" className="st10 st2 st11">Enter 1st Ave</text>
            </a>
          </g>

        </svg>


      </div>
    </div>
  )
}

export default StuyFifteenth;