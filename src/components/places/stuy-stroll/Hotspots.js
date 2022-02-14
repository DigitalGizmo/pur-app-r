import React from 'react';
import './StuyStroll.css';

const Hotspots = ({hotspots, highlights, hoverSpot, unHoverSpot}) => {

  const hotspotElements = hotspots.map((hotspot, index) => {
    return (
      <g
        key = {index}
        onMouseOver={() => hoverSpot(index)}
        onMouseLeave={unHoverSpot}
      >
        <circle        
          className={`low-spot ${highlights[index] ? "hi-spot" : ""} `} 
          cx={hotspot.node.hotspotX}
          cy={hotspot.node.hotspotY}
          r={hotspot.node.hotspotR}
        />
      </g>
      
    )
  }); 

  return (
    <g id="hilights">
      { hotspotElements }
      { highlights[8] &&
        <g>
          <image  
            width="400" height="400" 
            href="http://dev.picturingurbanrenewal.org/prod-assets/places/stuy-stroll/penny-scale.png"  
            transform="translate(1900 1010)">
          </image>
        </g>
      }

    </g>
  );
}

export default Hotspots;
