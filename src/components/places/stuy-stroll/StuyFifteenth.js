import React from 'react';

const StuyFifteenth = ({onPageChange}) => {

  return (
    <div id="stroll-wrapper">
      <div>

        <svg 
          version="1.1" 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          viewBox="0 0 2486 1479"
          preserveAspectRatio="xMidYMid meet" 
          className="svg-content"
        >

            <g id="photo">
              <image  
                  width="2486" height="1479" 
                  href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/fifteenth.jpg"  
                  transform="translate(0 0)"> 
              </image>
            </g>

            <g id="turn-buttons">
              <a href="/" onClick={ e => { e.preventDefault(); onPageChange(2, 1)}}>
                <polyline className="arrows" points="2400 697 2458 745 2400 795"/>
                <text transform="translate(2150 755)" className="turn-text">Turn the Corner</text>
              </a>
            </g>

        </svg>

      </div>
    </div>
  )
}

export default StuyFifteenth;